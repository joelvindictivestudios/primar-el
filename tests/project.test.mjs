import test from "node:test";
import assert from "node:assert/strict";
import { readFile, access } from "node:fs/promises";
import { buildDraft, validateInquiry } from "../src/contact.mjs";
const routes = JSON.parse(
  await readFile(new URL("../src/routes.json", import.meta.url)),
);
const pages = new Map();
for (const route of routes)
  pages.set(
    route.path,
    await readFile(
      route.path === "/404/" ? "dist/404.html" : `dist${route.path}index.html`,
      "utf8",
    ),
  );
test("Alla sidor är förbyggda med innehåll och metadata", () => {
  assert.equal(routes.length, 23);
  for (const route of routes) {
    const html = pages.get(route.path);
    assert.equal((html.match(/<h1[ >]/g) || []).length, 1, route.path);
    assert.ok(html.includes("<title>"), route.path);
    assert.ok(html.includes('id="root"'), route.path);
    assert.ok(!html.includes("<!--app-html-->"), route.path);
  }
});
test("Interna sidlänkar och ankare leder till befintligt innehåll", () => {
  for (const [path, html] of pages)
    for (const match of html.matchAll(/href="([^" ]+)"/g)) {
      const href = match[1];
      if (!href.startsWith("/") && !href.startsWith("#")) continue;
      if (href.startsWith("/assets/")) continue;
      const url = new URL(href, "https://example.test" + path),
        target = url.pathname.endsWith("/") ? url.pathname : url.pathname + "/";
      assert.ok(pages.has(target), `${path}: ${href}`);
      if (url.hash)
        assert.ok(
          pages
            .get(target)
            .includes(`id="${decodeURIComponent(url.hash.slice(1))}"`),
          `${path}: ${href}`,
        );
    }
});
test("Lokala bilder finns i det portabla projektet", async () => {
  const assets = new Set();
  for (const html of pages.values())
    for (const match of html.matchAll(/(?:src|srcset)="(\/assets\/[^" ]+)/g))
      assets.add(match[1]);
  for (const asset of assets) await access("dist" + asset);
});
test("Förfrågan valideras och byggs som ett lokalt e-postutkast", () => {
  assert.deepEqual(
    Object.keys(validateInquiry({ name: " ", email: "fel", message: "" })),
    ["name", "email", "message"],
  );
  const values = {
    name: " Anna ",
    email: "anna@example.se",
    phone: "",
    service: "BRF / fastighet",
    message: "Belysning i trapphuset",
  };
  assert.deepEqual(validateInquiry(values), {});
  assert.ok(buildDraft(values).includes("Telefon: Ej angivet"));
  assert.ok(buildDraft(values).startsWith("Namn: Anna\n"));
  assert.ok(buildDraft(values).endsWith(values.message));
});

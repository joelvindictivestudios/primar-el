import { readFile, writeFile, mkdir, rm } from "node:fs/promises";
import { resolve, dirname } from "node:path";
import { render } from "../.ssr/entry-server.js";
const routes = JSON.parse(await readFile("src/routes.json", "utf8"));
const siteURL = (
  process.env.SITE_URL ||
  "https://primar-elservice-redesign.jp1777.chatgpt.site"
).replace(/\/$/, "");
const template = await readFile("dist/index.html", "utf8");
const escape = (value) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll('"', "&quot;");
for (const route of routes) {
  const { title, description, canonical, schema } = route.meta;
  const head = `<title>${escape(title)}</title><meta name="description" content="${escape(description)}"><meta name="robots" content="noindex, follow"><link rel="canonical" href="${escape(canonical)}"><meta name="theme-color" content="#202c35"><meta property="og:title" content="${escape(title)}"><meta property="og:description" content="${escape(description)}"><meta property="og:url" content="${escape(canonical)}"><meta property="og:type" content="website"><meta property="og:locale" content="sv_SE"><meta property="og:image" content="${escape(siteURL)}/assets/referens3.webp">${schema.map((data) => `<script type="application/ld+json" data-page-schema>${JSON.stringify(data).replaceAll("<", "\\u003c")}</script>`).join("")}`;
  const html = template
    .replace("<!--page-head-->", head)
    .replace("<!--app-html-->", render(route.path));
  const file = resolve(
    "dist",
    route.path === "/404/" ? "404.html" : "." + route.path,
    "index.html",
  );
  const destination = route.path === "/404/" ? resolve("dist/404.html") : file;
  await mkdir(dirname(destination), { recursive: true });
  await writeFile(destination, html);
}
await rm(".ssr", { recursive: true, force: true });
console.log(`Förbyggde ${routes.length} sidor.`);

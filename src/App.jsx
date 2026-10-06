import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import routes from "./routes.json";
import * as Sections from "./components/Sections.jsx";
import { Header, Footer } from "./components/Layout.jsx";
import { UIProvider } from "./components/UIContext.jsx";
export function routeFor(pathname) {
  const path = pathname.endsWith("/") ? pathname : pathname + "/";
  return (
    routes.find((route) => route.path === path) ||
    routes.find((route) => route.path === "/404/")
  );
}
function Page() {
  const location = useLocation(),
    route = routeFor(location.pathname);
  useEffect(() => {
    document.title = route.meta.title;
    const update = (selector, attr, value) =>
      (() => {
        let node = document.querySelector(selector);
        if (!node) {
          node = document.createElement(
            selector.startsWith("link") ? "link" : "meta",
          );
          const match = selector.match(/\[(name|property|rel)="([^"]+)"\]/);
          if (match) node.setAttribute(match[1], match[2]);
          document.head.append(node);
        }
        node.setAttribute(attr, value);
      })();
    update('meta[name="description"]', "content", route.meta.description);
    update('link[rel="canonical"]', "href", route.meta.canonical);
    update('meta[property="og:title"]', "content", route.meta.title);
    update(
      'meta[property="og:description"]',
      "content",
      route.meta.description,
    );
    update('meta[property="og:url"]', "content", route.meta.canonical);
    document
      .querySelectorAll("script[data-page-schema]")
      .forEach((node) => node.remove());
    route.meta.schema.forEach((schema) => {
      const node = document.createElement("script");
      node.type = "application/ld+json";
      node.dataset.pageSchema = "";
      node.textContent = JSON.stringify(schema);
      document.head.append(node);
    });
    const id = decodeURIComponent(location.hash.slice(1));
    const frame = requestAnimationFrame(() => {
      if (id) document.getElementById(id)?.scrollIntoView();
      else window.scrollTo(0, 0);
    });
    return () => cancelAnimationFrame(frame);
  }, [location.pathname, location.hash, route]);
  return (
    <>
      <Header />
      <main id="main" tabIndex={-1}>
        {route.sections.map((name, index) => {
          const Section = Sections[name];
          return <Section key={route.path + index} />;
        })}
      </main>
      <Footer />
    </>
  );
}
export default function App() {
  return (
    <UIProvider>
      <Page />
    </UIProvider>
  );
}

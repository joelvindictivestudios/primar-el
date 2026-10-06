# Primär El-Service — React

Fristående React-projekt med samma design, innehåll, bilder och sidstruktur som den färdiga webbplatsen. React 19, Vite och React Router. Alla 22 ordinarie sidor samt en felsida förbyggs till HTML och kopplas sedan till React i webbläsaren.

## Kom igång

Installera Node.js 22.12 eller senare. Kör i projektmappen:

```sh
npm ci
npm run dev
```

## Bygg och kontrollera

```sh
npm run build
npm test
npm run preview
```

`dist/` är den färdiga webbplatsen. Den kan publiceras på ett webbhotell som kan servera undermapparnas `index.html`. Ange `dist/404.html` som felsida i webbhotellets inställningar. Vid drift på en server som bara har SPA-stöd måste övriga sidvägar skickas till `index.html`. Projektet använder domänens rot, inte en undermapp.

## Ändra innehållet

- `src/components/Sections.jsx`: sidornas innehåll och återanvända sektioner.
- `src/routes.json`: sidvägar, sektioner, rubriker och metadata.
- `src/components/Layout.jsx`: header, mobilmeny, footer och fasta mobilknappar.
- `src/components/UIContext.jsx`: mobilmenyn och inställningarna för externt Reco-innehåll.
- `src/components/ContactForm.jsx`: kontaktformuläret.
- `src/styles.css`: den befintliga responsiva designen.
- `public/assets/`: logotyper och bilder.
- `scripts/prerender.mjs`: förbyggningen av sidornas HTML.

Kör `npm run format` för kodformatering och bygg om efter ändringar. Sidinnehållet renderas som JSX-komponenter. Projektet behöver inte Python, den tidigare webbplatsens byggskript eller någon anslutning till ChatGPT Sites.

## Kontakt och Reco

Formuläret validerar fälten och skapar ett e-postutkast i besökarens e-postprogram. Det skickar inte e-post och har ingen serverdel. Akuta förfrågningar hänvisas till telefonnumret. En eventuell framtida formulärserver ansluts i `ContactForm.jsx`.

Reco-logotypen är lokal. Recos externa omdömeswidget laddas först när besökaren begär den och godkänner externt innehåll. Valet sparas på besökarens enhet och kan ändras via cookieinställningarna.

## Inför publicering

Den tidigare demonstrationssidans sökmotorinställningar är bevarade: `noindex` i `scripts/prerender.mjs` och blockering i `public/robots.txt`. Ändra dessa när sidan ska indexeras. Canonical-adresser och sitemap pekar på företagets ordinarie domän. Kontrollera dem om projektet ska använda en annan domän.

Ange webbplatsens publiceringsadress för delningsbilden när du bygger, exempelvis:

```sh
SITE_URL=https://primarelservice.se npm run build
```

Standardvärdet är den befintliga demonstrationsadressen. Ingen publicering sker när du bygger lokalt. Mappen innehåller inga hostingnycklar eller kopplingar till det tidigare projektets publiceringskonto.
# primar-el

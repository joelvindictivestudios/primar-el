import { Link } from "react-router-dom";
import { useUI, RecoEmbed } from "./UIContext.jsx";
import ContactForm from "./ContactForm.jsx";
export function HomeHero() {
  const { openCookies, requestReco } = useUI();
  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">
              <span aria-hidden="true"></span>
              {"DIN ELEKTRIKER I STOCKHOLM"}
            </p>
            <h1>
              {"Trygg elhjälp."}
              <br />
              {"För vardagen."}
              <br />
              <span>{"Och det oväntade."}</span>
            </h1>
            <p>
              {
                "Från små eljobb till stora projekt. Vi hjälper privatpersoner, företag och BRF:er med installation, service och eljour i hela Stockholm."
              }
            </p>
            <div className="hero-actions">
              <Link className="button primary" to="/kontakt/">
                {"Kontakta oss"}
              </Link>
              <a className="button outline" href="#tjanster">
                {"Våra tjänster"}
              </a>
            </div>
            <div className="hero-proof">
              <span className="proof-symbol" aria-hidden="true">
                {"✓"}
              </span>
              <p>
                {"Över 10 års erfarenhet av"}
                <br />
                {"service i fastigheter och lägenheter"}
              </p>
            </div>
          </div>
          <figure className="hero-visual">
            <img
              className=""
              src="/assets/referens3.webp"
              srcSet="/assets/referens3-400.webp 400w, /assets/referens3.webp 600w"
              sizes="(max-width: 700px) 100vw, 50vw"
              width="600"
              height="600"
              alt="Primär El-Services montör arbetar vid en elcentral"
              fetchPriority="high"
              decoding="async"
            />
            <figcaption>
              <span>{"PRIMÄR EL-SERVICE"}</span>
              <span>{"På plats. För dig."}</span>
            </figcaption>
            <a className="hero-jour" href="tel:+46840020108">
              <span>
                <small>{"ELJOUR DYGNET RUNT"}</small>
                <strong>{"08-400 201 08"}</strong>
              </span>
            </a>
          </figure>
        </div>
        <div className="wrap audience">
          <span>{"ELHJÄLP FÖR"}</span>
          <Link to="/elinstallationer-stockholm/">{"Ditt hem"}</Link>
          <Link to="/serviceavtal/">{"Din fastighet"}</Link>
          <Link to="/serviceavtal/#foretag">{"Ditt företag"}</Link>
          <span className="audience-local">{"SOLNA · HELA STOCKHOLM"}</span>
        </div>
      </section>
    </>
  );
}
export function ServicesOverview() {
  const { openCookies, requestReco } = useUI();
  return (
    <>
      <section className="wrap section" id="tjanster">
        <div className="section-head">
          <div>
            <p className="eyebrow">
              <span aria-hidden="true"></span>
              {"VÅRA TJÄNSTER"}
            </p>
            <h2>
              {"Små jobb. Stora projekt."}
              <br />
              {"Samma omtanke."}
            </h2>
          </div>
          <p>
            {
              "En kontakt för elen i ditt hem, din fastighet eller din verksamhet."
            }
          </p>
        </div>
        <div className="service-list">
          <article className="service-row">
            <span className="service-number">{"01"}</span>
            <div>
              <p className="micro">{"RENOVERING · NYPRODUKTION · BELYSNING"}</p>
              <h3>
                <Link to="/elinstallationer-stockholm/">
                  {"Elinstallationer"}
                </Link>
              </h3>
              <p>
                {
                  "Från en ny dimmer till hela elen i ett nybygge. Vi hjälper dig med både vardagens små jobb och de större projekten."
                }
              </p>
              <Link className="arrow-link" to="/elinstallationer-stockholm/">
                {"Upptäck elinstallationer "}
              </Link>
            </div>
            <img
              className=""
              src="/assets/referens17.webp"
              srcSet="/assets/referens17-400.webp 400w, /assets/referens17.webp 600w"
              sizes="(max-width: 700px) 100vw, 50vw"
              width="600"
              height="600"
              alt="Belysning över köksbänk från företagets referensgalleri"
              loading="lazy"
              decoding="async"
            />
          </article>
          <article className="service-row">
            <span className="service-number">{"02"}</span>
            <div>
              <p className="micro">{"FELSÖKNING · AKUT HJÄLP · 24/7"}</p>
              <h3>
                <Link to="/eljour-stockholm/">{"Eljour"}</Link>
              </h3>
              <p>
                {
                  "Strömlöst eller en jordfelsbrytare som slår ifrån? Vi felsöker och hjälper dig när problemet behöver lösas direkt."
                }
              </p>
              <Link className="arrow-link" to="/eljour-stockholm/">
                {"Upptäck eljour "}
              </Link>
            </div>
            <img
              className=""
              src="/assets/referens11.webp"
              srcSet="/assets/referens11-400.webp 400w, /assets/referens11.webp 600w"
              sizes="(max-width: 700px) 100vw, 50vw"
              width="600"
              height="600"
              alt="Primärs montör arbetar med en elcentral"
              loading="lazy"
              decoding="async"
            />
          </article>
          <article className="service-row">
            <span className="service-number">{"03"}</span>
            <div>
              <p className="micro">{"FASTIGHET · BRF · FÖRETAG"}</p>
              <h3>
                <Link to="/serviceavtal/">{"Service & BRF"}</Link>
              </h3>
              <p>
                {
                  "En elektriker att vända sig till för fastigheten. Löpande elservice och serviceavtal för bostadsrättsföreningar och företag."
                }
              </p>
              <Link className="arrow-link" to="/serviceavtal/">
                {"Upptäck service & brf "}
              </Link>
            </div>
            <img
              className=""
              src="/assets/referens20.webp"
              srcSet="/assets/referens20-400.webp 400w, /assets/referens20.webp 600w"
              sizes="(max-width: 700px) 100vw, 50vw"
              width="600"
              height="600"
              alt="Belyst verksamhetslokal från Primärs referensgalleri"
              loading="lazy"
              decoding="async"
            />
          </article>
          <article className="service-row">
            <span className="service-number">{"04"}</span>
            <div>
              <p className="micro">{"HEMBESÖK · INSTALLATION · SERVICE"}</p>
              <h3>
                <Link to="/luftvarmepumpar-stockholm/">
                  {"Luftvärmepumpar"}
                </Link>
              </h3>
              <p>
                {
                  "En helhetslösning för installationen, inklusive den el som behövs. Vi börjar med ett hembesök."
                }
              </p>
              <Link className="arrow-link" to="/luftvarmepumpar-stockholm/">
                {"Upptäck luftvärmepumpar "}
              </Link>
            </div>
            <img
              className=""
              src="/assets/luftvarmepump-stockholm.webp"
              srcSet="/assets/luftvarmepump-stockholm-400.webp 400w, /assets/luftvarmepump-stockholm.webp 700w"
              sizes="(max-width: 700px) 100vw, 50vw"
              width="700"
              height="387"
              alt="Luftvärmepump från originalwebbplatsen"
              loading="lazy"
              decoding="async"
            />
          </article>
        </div>
      </section>
    </>
  );
}
export function EmergencySection() {
  const { openCookies, requestReco } = useUI();
  return (
    <>
      <section className="emergency" id="eljour">
        <div className="wrap emergency-inner">
          <div>
            <p className="eyebrow light">
              <span aria-hidden="true"></span>
              {"ELJOUR · DYGNET RUNT"}
            </p>
            <h2>
              {"Strömmen gick?"}
              <br />
              {"Vi finns här."}
            </h2>
            <p>
              {
                "Akuta elproblem väntar inte till måndag. Vi hjälper dig i hela Stockholm, dygnet runt, och är oftast på plats inom en timme."
              }
            </p>
            <Link className="light-link" to="/eljour-stockholm/">
              {"Så fungerar vår eljour "}
            </Link>
          </div>
          <div className="emergency-call">
            <span className="availability">{"HJÄLP NÄR DU BEHÖVER DEN"}</span>
            <a href="tel:+46840020108">{"08-400 201 08 "}</a>
            <p>
              {
                "Ring för akut hjälp. Använd inte kontaktformuläret för jourärenden."
              }
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
export function PropertySection() {
  const { openCookies, requestReco } = useUI();
  return (
    <>
      <section className="property section">
        <div className="wrap split">
          <img
            className=""
            src="/assets/referens9.webp"
            srcSet="/assets/referens9-400.webp 400w, /assets/referens9.webp 600w"
            sizes="(max-width: 700px) 100vw, 50vw"
            width="600"
            height="600"
            alt="Belyst lokal från Primär El-Services referensgalleri"
            loading="lazy"
            decoding="async"
          />
          <div>
            <p className="eyebrow">
              <span aria-hidden="true"></span>
              {"FÖR BRF, FASTIGHET & FÖRETAG"}
            </p>
            <h2>
              {"En elpartner."}
              <br />
              {"Flera möjligheter."}
            </h2>
            <p>
              {
                "Ta hand om fastighetens el med en partner som lär känna era behov. Vi erbjuder serviceavtal för BRF:er och utför serviceuppdrag och större projekt åt företag."
              }
            </p>
            <ul className="clean-list">
              <li>{"Service i fastigheter och lägenheter"}</li>
              <li>{"Renoveringar och tillbyggnationer"}</li>
              <li>{"Samarbeten med byggherrar och hantverkare"}</li>
            </ul>
            <Link className="button primary" to="/kontakt/?service=BRF">
              {"Prata med oss om serviceavtal"}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
export function ProjectsPreview() {
  const { openCookies, requestReco } = useUI();
  return (
    <>
      <section className="wrap section">
        <div className="section-head">
          <div>
            <p className="eyebrow">
              <span aria-hidden="true"></span>
              {"FRÅN VÅR VARDAG"}
            </p>
            <h2>
              {"Riktigt arbete."}
              <br />
              {"Riktiga människor."}
            </h2>
          </div>
          <p>{"Bilder från Primär El-Services eget referensgalleri."}</p>
        </div>
        <div className="project-grid">
          <figure>
            <img
              className=""
              src="/assets/referens3.webp"
              srcSet="/assets/referens3-400.webp 400w, /assets/referens3.webp 600w"
              sizes="(max-width: 700px) 100vw, 50vw"
              width="600"
              height="600"
              alt="Montör vid elcentral"
              loading="lazy"
              decoding="async"
            />
            <figcaption>
              <span className="micro">{"Elservice"}</span>
              <h3>{"Människorna bakom arbetet"}</h3>
            </figcaption>
          </figure>
          <figure>
            <img
              className=""
              src="/assets/referens17.webp"
              srcSet="/assets/referens17-400.webp 400w, /assets/referens17.webp 600w"
              sizes="(max-width: 700px) 100vw, 50vw"
              width="600"
              height="600"
              alt="Belysning i kök"
              loading="lazy"
              decoding="async"
            />
            <figcaption>
              <span className="micro">{"Belysning"}</span>
              <h3>{"Detaljer som gör skillnad"}</h3>
            </figcaption>
          </figure>
          <figure>
            <img
              className=""
              src="/assets/referens20.webp"
              srcSet="/assets/referens20-400.webp 400w, /assets/referens20.webp 600w"
              sizes="(max-width: 700px) 100vw, 50vw"
              width="600"
              height="600"
              alt="Belyst verksamhetslokal"
              loading="lazy"
              decoding="async"
            />
            <figcaption>
              <span className="micro">{"Företag"}</span>
              <h3>{"El för hela verksamheten"}</h3>
            </figcaption>
          </figure>
        </div>
        <Link className="button outline" to="/referenser/">
          {"Se fler av våra arbeten"}
        </Link>
      </section>
    </>
  );
}
export function AboutSection() {
  const { openCookies, requestReco } = useUI();
  return (
    <>
      <section className="about section">
        <div className="wrap split">
          <div>
            <p className="eyebrow">
              <span aria-hidden="true"></span>
              {"DET HÄR ÄR PRIMÄR"}
            </p>
            <h2>
              {"Nära till hands."}
              <br />
              {"Noggranna i arbetet."}
            </h2>
            <p>
              {
                "Vi utgår från Solna och arbetar över hela Stockholm. Med över tio års erfarenhet av service i fastigheter och lägenheter hjälper vi privatpersoner, företag och BRF:er."
              }
            </p>
            <p>
              {
                "För oss börjar ett bra arbete med att förstå vad du behöver. Tillsammans hittar vi en lösning som passar ditt hem eller ditt projekt."
              }
            </p>
            <Link className="button outline" to="/om-oss/">
              {"Lär känna Primär"}
            </Link>
          </div>
          <img
            className=""
            src="/assets/referens18.webp"
            srcSet="/assets/referens18-400.webp 400w, /assets/referens18.webp 600w"
            sizes="(max-width: 700px) 100vw, 50vw"
            width="600"
            height="600"
            alt="Primärs montör arbetar i en bostad"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="wrap trust-grid">
          <div>
            <span>{"01 / ERFARENHET"}</span>
            <h3>{"Kunskap i praktiken"}</h3>
            <p>
              {
                "Över tio års erfarenhet av service i fastigheter och lägenheter."
              }
            </p>
          </div>
          <div>
            <span>{"02 / PERSONLIG SERVICE"}</span>
            <h3>{"Ditt behov först"}</h3>
            <p>
              {
                "Små eljobb och större projekt får samma fokus på kundens behov."
              }
            </p>
          </div>
          <div>
            <span>{"03 / TILLGÄNGLIGHET"}</span>
            <h3>{"Hjälp dygnet runt"}</h3>
            <p>{"Planerade arbeten och eljour över hela Stockholm."}</p>
          </div>
        </div>
      </section>
    </>
  );
}
export function ReviewsSection() {
  const { openCookies, requestReco } = useUI();
  return (
    <>
      <section className="reviews section" id="omdomen">
        <div className="wrap review-layout">
          <div>
            <p className="eyebrow">
              <span aria-hidden="true"></span>
              {"KUNDERNAS EGNA ORD"}
            </p>
            <h2>
              {"Förtroende som"}
              <br />
              {"märks i vardagen."}
            </h2>
            <a
              className="reco-recognition"
              href="https://www.reco.se/m-larsson-primar-el-service-ab"
            >
              <img
                src="/assets/reco-badge-2021.svg"
                width="110"
                height="110"
                alt=""
                loading="lazy"
              />
              <span>
                <strong>{"Rekommenderat företag"}</strong>
                <span>{"Reco · 2021"}</span>
              </span>
            </a>
            <p>{"Ta del av kundernas erfarenheter på Reco."}</p>
            <a
              className="arrow-link"
              href="https://www.reco.se/m-larsson-primar-el-service-ab"
            >
              {"Se omdömen på Reco "}
              <span aria-hidden="true">{"↗"}</span>
            </a>
          </div>
          <div className="review-card">
            <span className="micro">{"VERIFIERAD KUND PÅ RECO"}</span>
            <blockquote>
              {"”Bra utfört arbete och trevlig och kunnig personal”"}
            </blockquote>
            <div className="review-author">
              <span>{"Anette H"}</span>
              <a href="https://www.reco.se/m-larsson-primar-el-service-ab#3347799">
                {"Källa: Reco"}
              </a>
            </div>
            <p className="small">
              {"Utvalt omdöme, kontrollerat 6 oktober 2026."}
            </p>
          </div>
        </div>
        <div className="wrap reco-option">
          <button
            className="text-button"
            data-reco-load={true}
            onClick={requestReco}
          >
            {"Visa Recos aktuella omdömen här"}
          </button>
          <p className="small">
            {"Externt innehåll laddas efter ditt samtycke."}
          </p>
          <RecoEmbed />
        </div>
      </section>
    </>
  );
}
export function ServiceAreas() {
  const { openCookies, requestReco } = useUI();
  return (
    <>
      <section className="wrap section areas">
        <div className="section-head">
          <div>
            <p className="eyebrow">
              <span aria-hidden="true"></span>
              {"LOKALT FÖRANKRADE"}
            </p>
            <h2>
              {"Hemma i Solna."}
              <br />
              {"På plats i Stockholm."}
            </h2>
          </div>
          <p>
            {
              "Vi hjälper kunder i hela Stockholmsområdet. Hitta elservice där du bor eller arbetar."
            }
          </p>
        </div>
        <div className="location-grid">
          <Link to="/elektriker-solna/">{"Solna"}</Link>
          <Link to="/elektriker-sundbyberg/">{"Sundbyberg"}</Link>
          <Link to="/elektriker-bromma/">{"Bromma"}</Link>
          <Link to="/elektriker-sollentuna/">{"Sollentuna"}</Link>
          <Link to="/elektriker-taby/">{"Täby"}</Link>
          <Link to="/elektriker-sodermalm/">{"Södermalm"}</Link>
          <Link to="/elektriker-nacka/">{"Nacka"}</Link>
          <Link to="/elektriker-i-jarfalla/">{"Järfälla"}</Link>
        </div>
      </section>
    </>
  );
}
export function ContactSection() {
  const { openCookies, requestReco } = useUI();
  return (
    <>
      <section className="contact section" id="kontakt">
        <div className="wrap contact-grid">
          <div>
            <p className="eyebrow">
              <span aria-hidden="true"></span>
              {"KONTAKTA OSS"}
            </p>
            <h2>
              {"Vad kan vi"}
              <br />
              {"hjälpa dig med?"}
            </h2>
            <p>
              {
                "Berätta om ditt projekt eller vad som behöver åtgärdas. Vi hjälper dig att hitta nästa steg."
              }
            </p>
            <a className="contact-phone" href="tel:+46840020108">
              {"08-400 201 08"}
            </a>
            <a href="mailto:info@primarelservice.se">
              {"info@primarelservice.se"}
            </a>
            <p>
              {"Förvaltarvägen 5"}
              <br />
              {"169 68 Solna"}
            </p>
            <div className="urgent-note">
              <strong>{"Akut problem?"}</strong>
              <p>
                {"Ring vår eljour på "}
                <a href="tel:+46840020108">{"08-400 201 08"}</a>
                {". Skicka inte en vanlig förfrågan för akut hjälp."}
              </p>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
export function FrequentlyAskedQuestions() {
  const { openCookies, requestReco } = useUI();
  return (
    <>
      <section className="wrap section faq">
        <div className="section-head">
          <div>
            <p className="eyebrow">
              <span aria-hidden="true"></span>
              {"FRÅGOR & SVAR"}
            </p>
            <h2>{"Bra att veta."}</h2>
          </div>
        </div>
        <div>
          <details>
            <summary>
              {"Vad kostar ett elarbete?"}
              <span aria-hidden="true">{"+"}</span>
            </summary>
            <p>
              {
                "Kostnaden beror på arbetets omfattning, material och om det gäller planerat arbete eller eljour. Berätta vad du behöver hjälp med så kan vi prata om upplägget och en offert."
              }
            </p>
          </details>
          <details>
            <summary>
              {"Hur snabbt kan ni hjälpa vid akuta elproblem?"}
              <span aria-hidden="true">{"+"}</span>
            </summary>
            <p>
              {
                "Vår eljour är tillgänglig dygnet runt i hela Stockholm. Vi är oftast på plats inom en timme. Ring oss för att få besked om aktuell tillgänglighet."
              }
            </p>
          </details>
          <details>
            <summary>
              {"Kan ni hjälpa till vid en renovering?"}
              <span aria-hidden="true">{"+"}</span>
            </summary>
            <p>
              {
                "Ja. Vi utför elarbeten vid renoveringar, tillbyggnader och nyproduktion samt byter strömbrytare, dimrar, armaturer och elcentraler."
              }
            </p>
          </details>
          <details>
            <summary>
              {"Vad innebär ett serviceavtal för vår BRF?"}
              <span aria-hidden="true">{"+"}</span>
            </summary>
            <p>
              {
                "Ni får en elpartner för service i fastigheten. Kontakta oss så går vi igenom era behov och vad ett serviceavtal kan omfatta."
              }
            </p>
          </details>
          <details>
            <summary>
              {"Installerar ni luftvärmepumpar?"}
              <span aria-hidden="true">{"+"}</span>
            </summary>
            <p>
              {
                "Ja. Vi erbjuder en helhetslösning som även omfattar nödvändigt elarbete. Ett hembesök före montage hjälper oss att planera installationen."
              }
            </p>
          </details>
        </div>
      </section>
    </>
  );
}
export function CookiePolicySection1() {
  const { openCookies, requestReco } = useUI();
  return (
    <>
      <section className="wrap section legal">
        <p className="breadcrumb">
          <Link to="/">{"Start"}</Link>
          {" / Cookies"}
        </p>
        <p className="eyebrow">
          <span aria-hidden="true"></span>
          {"INTEGRITET"}
        </p>
        <h1>{"Cookies & externa tjänster"}</h1>
        <p className="intro">
          {"Du väljer själv om externt innehåll får laddas."}
        </p>
        <h2>{"Den här webbplatsen"}</h2>
        <p>
          {
            "Denna version använder inga analys- eller marknadsföringsverktyg. Bilder, typsnitt och övriga sidresurser serveras lokalt. Ditt integritetsval sparas i webbläsarens lokala lagring, under nyckeln primar-consent."
          }
        </p>
        <h2>{"Reco"}</h2>
        <p>
          {
            "Om du väljer att visa Recos omdömeswidget ansluter din webbläsare till widget.reco.se. Den externa tjänsten kan behandla uppgifter om anslutningen och använda sin egen lagring. Widgeten laddas först när du tillåter externt innehåll."
          }
        </p>
        <h2>{"Kontakt"}</h2>
        <p>
          {
            "Formuläret förbereder en förfrågan lokalt. Uppgifterna skickas inte av denna webbplats. När du väljer att öppna och skicka meddelandet används ditt eget e-postprogram."
          }
        </p>
        <h2>{"Ändra ditt val"}</h2>
        <p>
          {
            "Du kan när som helst ändra valet via Cookieinställningar längst ned på varje sida. Om du återkallar tillåtelsen tas widgeten bort; detta tar inte bort eventuell lagring som Reco redan har skapat."
          }
        </p>
        <button
          className="button primary"
          data-cookie-open={true}
          onClick={openCookies}
        >
          {"Öppna cookieinställningar"}
        </button>
        <p>
          {"Kontakt: "}
          <a href="mailto:info@primarelservice.se">
            {"info@primarelservice.se"}
          </a>
          {". Läs även "}
          <Link to="/dataskyddspolicy/">{"Primärs dataskyddspolicy"}</Link>
          {"."}
        </p>
      </section>
    </>
  );
}
export function DataskyddspolicySection1() {
  const { openCookies, requestReco } = useUI();
  return (
    <>
      <section className="wrap section legal">
        <p className="breadcrumb">
          <Link to="/">{"Start"}</Link>
          {" / Dataskyddspolicy"}
        </p>
        <p className="eyebrow">
          <span aria-hidden="true"></span>
          {"INTEGRITET"}
        </p>
        <h1>{"Dataskyddspolicy"}</h1>
        <p className="intro">
          {
            "Primär El-Services befintliga information om behandling av personuppgifter."
          }
        </p>
        <p>{"Så här hanterar vi dina personuppgifter"}</p>
        <p>
          {
            "För att kunna erbjuda dig våra tjänster/produkter behöver vi behandla vissa personuppgifter/data om dig eller ditt besök på vår webbplats."
          }
        </p>
        <p>
          {
            "Vi värnar självklart om din integritet & säkerhet och samlar därför inte in fler uppgifter än vi behöver. Uppgifterna säljs givetvis aldrig vidare till tredjepart."
          }
        </p>
        <p>
          {
            "För din skull är det viktigt att du läser igenom vår dataskyddspolicy innan du beställer eller använder någon av våra tjänster. Har du frågor eller funderingar är du välkommen att kontakta oss på: info@primarelservice.se"
          }
        </p>
        <p>{"Insamling & använding av data."}</p>
        <p>
          {
            "Vilken information samlar vi in?\nDenna dataskyddspolicy täcker all data som vi samlar in, till exempel från hemsida, sociala media, kontakt per telefon eller mail och på evenemang/mässor. Vi kan komma att kombinera personuppgifter som samlats in på ett sätt (t.ex. en webbplats) med personuppgifter som har samlats in på ett annat sätt."
          }
        </p>
        <p>
          {
            "Information du förser oss med\nDu kan direkt eller indirekt komma att ge oss information om dig, eller ditt företag på flera sätt, tex när du beställer våra tjänster/produkter eller kontaktar oss via formulär/mail från vår hemsida."
          }
        </p>
        <p>{"Denna information kan innefatta:"}</p>
        <p>
          {
            "Person- och kontaktinformation– namn, adressinformation, e-postadress, mobiltelefonnummer, din yrkesroll, din arbetsplats."
          }
        </p>
        <p>
          {
            "Betalningsinformation – fakturaadress, referensperson, annan faktureringsinformation."
          }
        </p>
        <p>
          {
            "Enhetsinformation – t.ex. IP-adress, språkinställningar, webbläsarinställningar, tidszon, operativsystem, plattform och skärmupplösning."
          }
        </p>
        <p>{"Geografisk information – din geografiska placering."}</p>
        <p>
          {
            "Information om varor/tjänster – detaljer angående de varor/tjänster du har köpt."
          }
        </p>
        <p>
          {
            "Informationen vi samlar in är nödvändig antingen för att ingå avtal med oss, handla i webbutik eller för att ställa ut offert/liknande."
          }
        </p>
        <p>{"Läs även mer om hur vi använder cookies i vår cookie policy."}</p>
        <p>
          {
            "Varför samlar vi in information & vad gör vi med informationen?\nVi samlar in data för att tillhandahålla, utföra & förbättra våra tjänster & produkter. Din information stannar hos oss!"
          }
        </p>
        <p>
          {
            "Vi kommer aldrig sälja eller delge din information till tredjepart utan din tillåtelse. Ibland delar vi personuppgifter till leverantörer eller underleverantörer för att kunna slutföra/leverera vårt åtagande gentemot dig. Alla våra partners ingår självfallet sekretessavtal & följer givetvis legala & tekniska krav för att din informations ska kunna hanteras säkert."
          }
        </p>
        <p>
          {
            "Var behandlar vi dina personuppgifter?\nVi strävar alltid efter att lagra dina personuppgifter inom Sverige/EU/EES. Vissa sällsynta situationer kan dock kräva att vissa uppgifter hanteras av tredjepart (tex av teknikleverantör/underleverantör) Vi kommer dock alltid vidta åtgärder för att data som skickas/lagras på detta sätt hanteras på samma säkerhetsnivå som inom EU/ESS."
          }
        </p>
        <p>
          {
            "Hur länge sparar vi dina personuppgifter?\nVi sparar data så länge som det är nödvändigt för att uppfylla det syfte för vilket informationen samlades in, eller för att utföra våra åtaganden och så länge det krävs enligt lagstadgade lagringstider, särskilt vad gäller redovisningskrav."
          }
        </p>
        <p>
          {
            "Dina rättigheter\nDu som är kund/registrerad hos oss av någon anledning har flera rättigheter du bör känna till."
          }
        </p>
        <p>
          {
            "Du har rätt att kostnadsfritt begära ut ett registerunderlag för vilka uppgifter om dig vi har sparade om dig/ditt företag."
          }
        </p>
        <p>
          {
            "Du har rätt att få dina uppgifter korrigerade om de är felaktiga, ofullständiga eller missvisande på något sätt. Du har även rätt att begränsa behandlingen av personuppgifter tills dess att de blivit uppdaterade."
          }
        </p>
        <p>
          {
            "Du har rätten att bli bortglömd. Radering av personuppgifter sker dock inte om de krävs för att slutföra vårt åtagande/avtal med dig, eller om annan svensk lag, myndighet eller domstol säger annat. Skulle du tycka att det inte finns berättigade skäl för detta har du självklart rätt att invända mot behandlingen av dina uppgifter. Rätt att lämna klagomål, dra in samtycke."
          }
        </p>
        <p>
          {
            "Ändring av dataskyddspolicyn\nVi kan komma att uppdatera/ändra denna policy. Ifall av ändring meddelar vi på vår webbplats. Vi kommer även upplysa vilka ändringar vi gjort i policyn vid ändringstillfället."
          }
        </p>
        <p>
          {
            "Du kan alltid kontakta oss om du vill ha tillgång till tidigare versioner."
          }
        </p>
        <p>
          {
            "Cookies & liknande tekniker\nVi använder cookies och liknande spårningstekniker för att leverera en skräddarsydd och smidig onlineupplevelse. För mer information om hur vi använder cookies och liknande, se vår Cookie policy."
          }
        </p>
        <p>
          {
            "Kontakta oss\nVi har en utsedd ansvarig person för dataskyddsfrågor. Vid frågor kring integritets- och dataskydd, vänligen kontakta oss på:"
          }
        </p>
        <p>{"info@primarelservice.se"}</p>
        <p>
          {
            "Begär ut registerunderlag\nVill du begära ut ett utdrag över vilka uppgifter vi har registrerade om dig, via vår webbplats kan du göra det. Du kan även begära att vi raderar uppgifter om dig som vi har sparade i våra system (om vi inte enligt lag eller myndighetsbeslut är skyldiga att spara dem) samt korrigera felaktiga uppgifter."
          }
        </p>
        <p>{"Förvaltarvägen 5\n169 68 Solna\nSverige"}</p>
        <p>{"08-400 201 08\ninfo@primarelservice.se"}</p>
        <p>
          {
            "Vi använder cookies. Genom att fortsätta surfa godkänner du vår Cookie Policy."
          }
        </p>
        <p>{"Cookie and Privacy Settings"}</p>
        <p>
          {
            "We may request cookies to be set on your device. We use cookies to let us know when you visit our websites, how you interact with us, to enrich your user experience, and to customize your relationship with our website."
          }
        </p>
        <p>
          {
            "Click on the different category headings to find out more. You can also change some of your preferences. Note that blocking some types of cookies may impact your experience on our websites and the services we are able to offer."
          }
        </p>
        <p>
          {
            "These cookies are strictly necessary to provide you with services available through our website and to use some of its features."
          }
        </p>
        <p>
          {
            "Because these cookies are strictly necessary to deliver the website, refusing them will have impact how our site functions. You always can block or delete cookies by changing your browser settings and force blocking all cookies on this website. But this will always prompt you to accept/refuse cookies when revisiting our site."
          }
        </p>
        <p>
          {
            "We fully respect if you want to refuse cookies but to avoid asking you again and again kindly allow us to store a cookie for that. You are free to opt out any time or opt in for other cookies to get a better experience. If you refuse cookies we will remove all set cookies in our domain."
          }
        </p>
        <p>
          {
            "We provide you with a list of stored cookies on your computer in our domain so you can check what we stored. Due to security reasons we are not able to show or modify cookies from other domains. You can check these in your browser security settings."
          }
        </p>
        <p>
          {
            "These cookies collect information that is used either in aggregate form to help us understand how our website is being used or how effective our marketing campaigns are, or to help us customize our website and application for you in order to enhance your experience."
          }
        </p>
        <p>
          {
            "If you do not want that we track your visit to our site you can disable tracking in your browser here:"
          }
        </p>
        <p>
          {
            "We also use different external services like Google Webfonts, Google Maps, and external Video providers. Since these providers may collect personal data like your IP address we allow you to block them here. Please be aware that this might heavily reduce the functionality and appearance of our site. Changes will take effect once you reload the page."
          }
        </p>
        <p>{"Google Webfont Settings:"}</p>
        <p>{"Google Map Settings:"}</p>
        <p>{"Google reCaptcha Settings:"}</p>
        <p>{"Vimeo and Youtube video embeds:"}</p>
        <p>
          {
            "The following cookies are also needed - You can choose if you want to allow them:"
          }
        </p>
        <p>
          {
            "You can read about our cookies and privacy settings in detail on our Privacy Policy Page."
          }
        </p>
        <p>
          {"Se även vår "}
          <Link to="/cookie-policy/">
            {"information om cookies i denna version av webbplatsen"}
          </Link>
          {"."}
        </p>
      </section>
    </>
  );
}
export function ElektrikerBrommaSection1() {
  const { openCookies, requestReco } = useUI();
  return (
    <>
      <section className="inner-hero">
        <div className="wrap">
          <p className="breadcrumb">
            <Link to="/">{"Start"}</Link>
            <span aria-hidden="true">{"/"}</span>
            {"Elektriker i Bromma."}
          </p>
          <div className="split">
            <div>
              <p className="eyebrow">
                <span aria-hidden="true"></span>
                {"ELINSTALLATION · SERVICE · ELJOUR"}
              </p>
              <h1>{"Elektriker i Bromma."}</h1>
              <p>
                {
                  "Behöver du hjälp med elen i din bostad eller fastighet i Bromma? Vi utför installationer, felsökning och service för både hem och verksamheter."
                }
              </p>
              <Link className="button primary" to="/kontakt/">
                {"Kontakta oss"}
              </Link>
            </div>
            <img
              className=""
              src="/assets/elektriker-bromma.webp"
              srcSet="/assets/elektriker-bromma-400.webp 400w, /assets/elektriker-bromma.webp 700w"
              sizes="(max-width: 700px) 100vw, 50vw"
              width="700"
              height="387"
              alt="Bild från Primär El-Services originalwebbplats"
              fetchPriority="high"
              decoding="async"
            />
          </div>
        </div>
      </section>
    </>
  );
}
export function ElektrikerBrommaSection2() {
  const { openCookies, requestReco } = useUI();
  return (
    <>
      <section className="wrap section content-section">
        <div>
          <h2>{"Elhjälp där du behöver den."}</h2>
          <p>
            {
              "Vi hjälper dig att planera arbetet och hitta en lösning utifrån dina behov. Samma kontakt kan hjälpa till med både löpande service och större installationer."
            }
          </p>
        </div>
        <ul className="clean-list">
          <li>{"Elinstallationer vid renovering och nyproduktion"}</li>
          <li>{"Felsökning och elservice"}</li>
          <li>{"Strömbrytare, dimrar, armaturer och elcentraler"}</li>
          <li>{"Serviceavtal för BRF"}</li>
          <li>{"Installation av luftvärmepump"}</li>
        </ul>
      </section>
    </>
  );
}
export function ElektrikerIJarfallaSection1() {
  const { openCookies, requestReco } = useUI();
  return (
    <>
      <section className="inner-hero">
        <div className="wrap">
          <p className="breadcrumb">
            <Link to="/">{"Start"}</Link>
            <span aria-hidden="true">{"/"}</span>
            {"Elektriker i Järfälla."}
          </p>
          <div className="split">
            <div>
              <p className="eyebrow">
                <span aria-hidden="true"></span>
                {"ELINSTALLATION · SERVICE · ELJOUR"}
              </p>
              <h1>{"Elektriker i Järfälla."}</h1>
              <p>
                {
                  "Primär El-Service utför elinstallationer och service för privatpersoner och företag i Järfälla. Kontakta oss om planerade arbeten eller ring vår eljour vid akuta problem."
                }
              </p>
              <Link className="button primary" to="/kontakt/">
                {"Kontakta oss"}
              </Link>
            </div>
            <img
              className=""
              src="/assets/referens17.webp"
              srcSet="/assets/referens17-400.webp 400w, /assets/referens17.webp 600w"
              sizes="(max-width: 700px) 100vw, 50vw"
              width="600"
              height="600"
              alt="Bild från Primär El-Services originalwebbplats"
              fetchPriority="high"
              decoding="async"
            />
          </div>
        </div>
      </section>
    </>
  );
}
export function ElektrikerNackaSection1() {
  const { openCookies, requestReco } = useUI();
  return (
    <>
      <section className="inner-hero">
        <div className="wrap">
          <p className="breadcrumb">
            <Link to="/">{"Start"}</Link>
            <span aria-hidden="true">{"/"}</span>
            {"Elektriker i Nacka."}
          </p>
          <div className="split">
            <div>
              <p className="eyebrow">
                <span aria-hidden="true"></span>
                {"ELINSTALLATION · SERVICE · ELJOUR"}
              </p>
              <h1>{"Elektriker i Nacka."}</h1>
              <p>
                {
                  "För hem, fastigheter och företag i Nacka utför vi elinstallationer och service. Vi erbjuder även eljour och installation av luftvärmepumpar."
                }
              </p>
              <Link className="button primary" to="/kontakt/">
                {"Kontakta oss"}
              </Link>
            </div>
            <img
              className=""
              src="/assets/referens17.webp"
              srcSet="/assets/referens17-400.webp 400w, /assets/referens17.webp 600w"
              sizes="(max-width: 700px) 100vw, 50vw"
              width="600"
              height="600"
              alt="Bild från Primär El-Services originalwebbplats"
              fetchPriority="high"
              decoding="async"
            />
          </div>
        </div>
      </section>
    </>
  );
}
export function ElektrikerSodermalmSection1() {
  const { openCookies, requestReco } = useUI();
  return (
    <>
      <section className="inner-hero">
        <div className="wrap">
          <p className="breadcrumb">
            <Link to="/">{"Start"}</Link>
            <span aria-hidden="true">{"/"}</span>
            {"Elektriker på Södermalm."}
          </p>
          <div className="split">
            <div>
              <p className="eyebrow">
                <span aria-hidden="true"></span>
                {"ELINSTALLATION · SERVICE · ELJOUR"}
              </p>
              <h1>{"Elektriker på Södermalm."}</h1>
              <p>
                {
                  "Vi hjälper kunder på Södermalm med elservice, installationer och renoveringar. Vid akuta elfel finns vår eljour tillgänglig dygnet runt."
                }
              </p>
              <Link className="button primary" to="/kontakt/">
                {"Kontakta oss"}
              </Link>
            </div>
            <img
              className=""
              src="/assets/referens17.webp"
              srcSet="/assets/referens17-400.webp 400w, /assets/referens17.webp 600w"
              sizes="(max-width: 700px) 100vw, 50vw"
              width="600"
              height="600"
              alt="Bild från Primär El-Services originalwebbplats"
              fetchPriority="high"
              decoding="async"
            />
          </div>
        </div>
      </section>
    </>
  );
}
export function ElektrikerSollentunaSection1() {
  const { openCookies, requestReco } = useUI();
  return (
    <>
      <section className="inner-hero">
        <div className="wrap">
          <p className="breadcrumb">
            <Link to="/">{"Start"}</Link>
            <span aria-hidden="true">{"/"}</span>
            {"Elektriker i Sollentuna."}
          </p>
          <div className="split">
            <div>
              <p className="eyebrow">
                <span aria-hidden="true"></span>
                {"ELINSTALLATION · SERVICE · ELJOUR"}
              </p>
              <h1>{"Elektriker i Sollentuna."}</h1>
              <p>
                {
                  "Vi hjälper privatpersoner, företag och BRF:er i Sollentuna med elarbeten – från service i lägenheter till renovering och nyproduktion."
                }
              </p>
              <Link className="button primary" to="/kontakt/">
                {"Kontakta oss"}
              </Link>
            </div>
            <img
              className=""
              src="/assets/elektriker-sollentuna.webp"
              srcSet="/assets/elektriker-sollentuna-400.webp 400w, /assets/elektriker-sollentuna.webp 700w"
              sizes="(max-width: 700px) 100vw, 50vw"
              width="700"
              height="387"
              alt="Bild från Primär El-Services originalwebbplats"
              fetchPriority="high"
              decoding="async"
            />
          </div>
        </div>
      </section>
    </>
  );
}
export function ElektrikerSolnaSection1() {
  const { openCookies, requestReco } = useUI();
  return (
    <>
      <section className="inner-hero">
        <div className="wrap">
          <p className="breadcrumb">
            <Link to="/">{"Start"}</Link>
            <span aria-hidden="true">{"/"}</span>
            {"Elektriker i Solna."}
          </p>
          <div className="split">
            <div>
              <p className="eyebrow">
                <span aria-hidden="true"></span>
                {"ELINSTALLATION · SERVICE · ELJOUR"}
              </p>
              <h1>{"Elektriker i Solna."}</h1>
              <p>
                {
                  "Vi utgår från Förvaltarvägen 5 i Solna och hjälper både bostadsägare, företag och bostadsrättsföreningar med fastighetens el."
                }
              </p>
              <Link className="button primary" to="/kontakt/">
                {"Kontakta oss"}
              </Link>
            </div>
            <img
              className=""
              src="/assets/elektriker-solna.webp"
              srcSet="/assets/elektriker-solna-400.webp 400w, /assets/elektriker-solna.webp 700w"
              sizes="(max-width: 700px) 100vw, 50vw"
              width="700"
              height="387"
              alt="Bild från Primär El-Services originalwebbplats"
              fetchPriority="high"
              decoding="async"
            />
          </div>
        </div>
      </section>
    </>
  );
}
export function ElektrikerSundbybergSection1() {
  const { openCookies, requestReco } = useUI();
  return (
    <>
      <section className="inner-hero">
        <div className="wrap">
          <p className="breadcrumb">
            <Link to="/">{"Start"}</Link>
            <span aria-hidden="true">{"/"}</span>
            {"Elektriker i Sundbyberg."}
          </p>
          <div className="split">
            <div>
              <p className="eyebrow">
                <span aria-hidden="true"></span>
                {"ELINSTALLATION · SERVICE · ELJOUR"}
              </p>
              <h1>{"Elektriker i Sundbyberg."}</h1>
              <p>
                {
                  "Primär El-Service hjälper kunder i Sundbyberg med elinstallationer, service och akuta elfel. Vårt kontor ligger i Solna."
                }
              </p>
              <Link className="button primary" to="/kontakt/">
                {"Kontakta oss"}
              </Link>
            </div>
            <img
              className=""
              src="/assets/elektriker-sundbyberg.webp"
              srcSet="/assets/elektriker-sundbyberg-400.webp 400w, /assets/elektriker-sundbyberg.webp 700w"
              sizes="(max-width: 700px) 100vw, 50vw"
              width="700"
              height="387"
              alt="Bild från Primär El-Services originalwebbplats"
              fetchPriority="high"
              decoding="async"
            />
          </div>
        </div>
      </section>
    </>
  );
}
export function ElektrikerTabySection1() {
  const { openCookies, requestReco } = useUI();
  return (
    <>
      <section className="inner-hero">
        <div className="wrap">
          <p className="breadcrumb">
            <Link to="/">{"Start"}</Link>
            <span aria-hidden="true">{"/"}</span>
            {"Elektriker i Täby."}
          </p>
          <div className="split">
            <div>
              <p className="eyebrow">
                <span aria-hidden="true"></span>
                {"ELINSTALLATION · SERVICE · ELJOUR"}
              </p>
              <h1>{"Elektriker i Täby."}</h1>
              <p>
                {
                  "För dig i Täby erbjuder vi hjälp med elinstallationer, service och felsökning. Vi arbetar med både mindre eljobb och större projekt."
                }
              </p>
              <Link className="button primary" to="/kontakt/">
                {"Kontakta oss"}
              </Link>
            </div>
            <img
              className=""
              src="/assets/elektriker-taby.webp"
              srcSet="/assets/elektriker-taby-400.webp 400w, /assets/elektriker-taby.webp 700w"
              sizes="(max-width: 700px) 100vw, 50vw"
              width="700"
              height="387"
              alt="Bild från Primär El-Services originalwebbplats"
              fetchPriority="high"
              decoding="async"
            />
          </div>
        </div>
      </section>
    </>
  );
}
export function ElinstallationerStockholmSection1() {
  const { openCookies, requestReco } = useUI();
  return (
    <>
      <section className="inner-hero">
        <div className="wrap">
          <p className="breadcrumb">
            <Link to="/">{"Start"}</Link>
            <span aria-hidden="true">{"/"}</span>
            {"Elinstallationer i Stockholm."}
          </p>
          <div className="split">
            <div>
              <p className="eyebrow">
                <span aria-hidden="true"></span>
                {"ELINSTALLATIONER"}
              </p>
              <h1>{"Elinstallationer i Stockholm."}</h1>
              <p>
                {
                  "En ny lampa, en renovering eller elen i ett helt nytt hus. Vi utför allt från mindre servicejobb till större elinstallationer."
                }
              </p>
              <Link className="button primary" to="/kontakt/">
                {"Kontakta oss"}
              </Link>
            </div>
            <img
              className=""
              src="/assets/referens17.webp"
              srcSet="/assets/referens17-400.webp 400w, /assets/referens17.webp 600w"
              sizes="(max-width: 700px) 100vw, 50vw"
              width="600"
              height="600"
              alt="Bild från Primär El-Services originalwebbplats"
              fetchPriority="high"
              decoding="async"
            />
          </div>
        </div>
      </section>
    </>
  );
}
export function ElinstallationerStockholmSection2() {
  const { openCookies, requestReco } = useUI();
  return (
    <>
      <section className="wrap section content-section">
        <div>
          <h2>{"Från detalj till helhet."}</h2>
          <p>
            {
              "Vi hjälper privatpersoner, företag och BRF:er att planera och genomföra elarbeten utifrån fastighetens och kundens behov."
            }
          </p>
        </div>
        <ul className="clean-list">
          <li>{"Nyproduktion av villor"}</li>
          <li>{"Renoveringar och tillbyggnationer"}</li>
          <li>{"Strömbrytare och dimrar"}</li>
          <li>{"Lampor och armaturer"}</li>
          <li>{"Byte av elcentraler"}</li>
          <li>{"Felsökning och elservice"}</li>
        </ul>
      </section>
    </>
  );
}
export function EljourStockholmSection1() {
  const { openCookies, requestReco } = useUI();
  return (
    <>
      <section className="inner-hero">
        <div className="wrap">
          <p className="breadcrumb">
            <Link to="/">{"Start"}</Link>
            <span aria-hidden="true">{"/"}</span>
            {"Eljour i Stockholm."}
            <br />
            {"Dygnet runt."}
          </p>
          <div className="split">
            <div>
              <p className="eyebrow">
                <span aria-hidden="true"></span>
                {"ELJOUR · 24/7"}
              </p>
              <h1>
                {"Eljour i Stockholm."}
                <br />
                {"Dygnet runt."}
              </h1>
              <p>
                {
                  "När strömmen går eller ett elfel behöver åtgärdas direkt finns vår eljour till hands. Ring oss för akut hjälp."
                }
              </p>
              <a className="button primary" href="tel:+46840020108">
                {"Ring eljour: 08-400 201 08"}
              </a>
            </div>
            <img
              className=""
              src="/assets/referens11.webp"
              srcSet="/assets/referens11-400.webp 400w, /assets/referens11.webp 600w"
              sizes="(max-width: 700px) 100vw, 50vw"
              width="600"
              height="600"
              alt="Bild från Primär El-Services originalwebbplats"
              fetchPriority="high"
              decoding="async"
            />
          </div>
        </div>
      </section>
    </>
  );
}
export function EljourStockholmSection2() {
  const { openCookies, requestReco } = useUI();
  return (
    <>
      <section className="wrap section content-section">
        <div>
          <h2>{"När något inte fungerar."}</h2>
          <p>
            {
              "Vi erbjuder jour i hela Stockholm och är oftast på plats inom en timme. Ring och beskriv problemet så kan vi ge besked om nästa steg och aktuell tillgänglighet."
            }
          </p>
        </div>
        <ul className="clean-list">
          <li>{"Strömlös lägenhet eller lokal"}</li>
          <li>{"Jordfelsbrytare som slår ifrån"}</li>
          <li>{"Säkring som inte går att återställa"}</li>
          <li>{"Ytterbelysning som orsakar strömproblem"}</li>
        </ul>
      </section>
    </>
  );
}
export function InstalleraFiberSection1() {
  const { openCookies, requestReco } = useUI();
  return (
    <>
      <section className="inner-hero">
        <div className="wrap">
          <p className="breadcrumb">
            <Link to="/">{"Start"}</Link>
            <span aria-hidden="true">{"/"}</span>
            {"Fiberinstallation"}
            <br />
            {"för hem och företag."}
          </p>
          <div className="split">
            <div>
              <p className="eyebrow">
                <span aria-hidden="true"></span>
                {"FIBERINSTALLATION"}
              </p>
              <h1>
                {"Fiberinstallation"}
                <br />
                {"för hem och företag."}
              </h1>
              <p>
                {
                  "Vi hjälper dig med fiberinstallation. Kontakta Primär El-Service för att gå igenom ditt behov och förutsättningarna i din fastighet."
                }
              </p>
              <Link className="button primary" to="/kontakt/">
                {"Kontakta oss"}
              </Link>
            </div>
            <img
              className=""
              src="/assets/chaitawat-fiber-optic-2749588_640.webp"
              srcSet="/assets/chaitawat-fiber-optic-2749588_640-400.webp 400w, /assets/chaitawat-fiber-optic-2749588_640.webp 640w"
              sizes="(max-width: 700px) 100vw, 50vw"
              width="640"
              height="427"
              alt="Bild från Primär El-Services originalwebbplats"
              fetchPriority="high"
              decoding="async"
            />
          </div>
        </div>
      </section>
    </>
  );
}
export function InstalleraFiberSection2() {
  const { openCookies, requestReco } = useUI();
  return (
    <>
      <section className="wrap section content-section">
        <div>
          <h2>{"Planera din installation."}</h2>
          <p>
            {
              "En genomgång av fastigheten och vad anslutningen ska användas till hjälper oss att planera arbetet. Berätta om ditt projekt så diskuterar vi upplägget."
            }
          </p>
        </div>
        <ul className="clean-list">
          <li>{"Fiberinstallation för privatpersoner"}</li>
          <li>{"Fiberinstallation för företag"}</li>
          <li>{"Installation utifrån fastighetens förutsättningar"}</li>
        </ul>
      </section>
    </>
  );
}
export function KontaktSection1() {
  const { openCookies, requestReco } = useUI();
  return (
    <>
      <section className="inner-hero">
        <div className="wrap">
          <p className="breadcrumb">
            <Link to="/">{"Start"}</Link>
            <span aria-hidden="true">{"/"}</span>
            {"Vi hörs."}
          </p>
          <div className="split">
            <div>
              <p className="eyebrow">
                <span aria-hidden="true"></span>
                {"KONTAKT"}
              </p>
              <h1>{"Vi hörs."}</h1>
              <p>
                {
                  "Planerar du ett elarbete eller behöver du hjälp med fastighetens el? Ring, mejla eller förbered en förfrågan här. Vid akuta problem: ring vår eljour."
                }
              </p>
              <a className="button primary" href="#kontakt">
                {"Till förfrågan"}
              </a>
            </div>
            <img
              className=""
              src="/assets/referens3.webp"
              srcSet="/assets/referens3-400.webp 400w, /assets/referens3.webp 600w"
              sizes="(max-width: 700px) 100vw, 50vw"
              width="600"
              height="600"
              alt="Bild från Primär El-Services originalwebbplats"
              fetchPriority="high"
              decoding="async"
            />
          </div>
        </div>
      </section>
    </>
  );
}
export function LuftvarmepumparSection1() {
  const { openCookies, requestReco } = useUI();
  return (
    <>
      <section className="inner-hero">
        <div className="wrap">
          <p className="breadcrumb">
            <Link to="/">{"Start"}</Link>
            <span aria-hidden="true">{"/"}</span>
            {"Luftvärmepump."}
            <br />
            {"Med hela installationen."}
          </p>
          <div className="split">
            <div>
              <p className="eyebrow">
                <span aria-hidden="true"></span>
                {"LUFTVÄRMEPUMPAR"}
              </p>
              <h1>
                {"Luftvärmepump."}
                <br />
                {"Med hela installationen."}
              </h1>
              <p>
                {
                  "Vi hjälper dig med installationen av luftvärmepump och kan även utföra det elarbete som behövs. Ett hembesök före montage är en del av erbjudandet."
                }
              </p>
              <Link className="button primary" to="/kontakt/">
                {"Kontakta oss"}
              </Link>
            </div>
            <img
              className=""
              src="/assets/luftvarmepump-stockholm.webp"
              srcSet="/assets/luftvarmepump-stockholm-400.webp 400w, /assets/luftvarmepump-stockholm.webp 700w"
              sizes="(max-width: 700px) 100vw, 50vw"
              width="700"
              height="387"
              alt="Bild från Primär El-Services originalwebbplats"
              fetchPriority="high"
              decoding="async"
            />
          </div>
        </div>
      </section>
    </>
  );
}
export function LuftvarmepumparSection2() {
  const { openCookies, requestReco } = useUI();
  return (
    <>
      <section className="wrap section content-section">
        <div>
          <h2>{"En kontakt, hela vägen."}</h2>
          <p>
            {
              "Originalets erbjudande omfattar installation, service, garanti och möjlighet till finansiering. Kontakta oss för aktuella modeller, priser och villkor."
            }
          </p>
        </div>
        <ul className="clean-list">
          <li>{"Hembesök innan montage"}</li>
          <li>{"Installation och nödvändigt elarbete"}</li>
          <li>{"Lager i Sverige"}</li>
          <li>{"Service"}</li>
          <li>
            {
              "Garanti: originalet anger 6 år, med förlängning upp till 14 år. Be oss bekräfta villkoren för vald modell."
            }
          </li>
          <li>{"Finansieringsmöjlighet – kontakta oss för villkor"}</li>
        </ul>
      </section>
    </>
  );
}
export function OmOssSection1() {
  const { openCookies, requestReco } = useUI();
  return (
    <>
      <section className="inner-hero">
        <div className="wrap">
          <p className="breadcrumb">
            <Link to="/">{"Start"}</Link>
            <span aria-hidden="true">{"/"}</span>
            {"Elservice med"}
            <br />
            {"kunden i centrum."}
          </p>
          <div className="split">
            <div>
              <p className="eyebrow">
                <span aria-hidden="true"></span>
                {"OM PRIMÄR"}
              </p>
              <h1>
                {"Elservice med"}
                <br />
                {"kunden i centrum."}
              </h1>
              <p>
                {
                  "Hos Primär El-Service är alla kunder prioriterade. Våra installatörer utgår från dina behov och hittar en lösning tillsammans med dig."
                }
              </p>
              <Link className="button primary" to="/kontakt/">
                {"Kontakta oss"}
              </Link>
            </div>
            <img
              className=""
              src="/assets/referens18.webp"
              srcSet="/assets/referens18-400.webp 400w, /assets/referens18.webp 600w"
              sizes="(max-width: 700px) 100vw, 50vw"
              width="600"
              height="600"
              alt="Bild från Primär El-Services originalwebbplats"
              fetchPriority="high"
              decoding="async"
            />
          </div>
        </div>
      </section>
    </>
  );
}
export function ReferenserSection1() {
  const { openCookies, requestReco } = useUI();
  return (
    <>
      <section className="inner-hero">
        <div className="wrap">
          <p className="breadcrumb">
            <Link to="/">{"Start"}</Link>
            <span aria-hidden="true">{"/"}</span>
            {"Ett urval av"}
            <br />
            {"våra arbeten."}
          </p>
          <div className="split">
            <div>
              <p className="eyebrow">
                <span aria-hidden="true"></span>
                {"REFERENSER"}
              </p>
              <h1>
                {"Ett urval av"}
                <br />
                {"våra arbeten."}
              </h1>
              <p>
                {
                  "Bilder från Primär El-Services befintliga referensgalleri. Från elcentraler och installationer till färdiga miljöer."
                }
              </p>
              <Link className="button primary" to="/kontakt/">
                {"Kontakta oss"}
              </Link>
            </div>
            <img
              className=""
              src="/assets/referens20.webp"
              srcSet="/assets/referens20-400.webp 400w, /assets/referens20.webp 600w"
              sizes="(max-width: 700px) 100vw, 50vw"
              width="600"
              height="600"
              alt="Bild från Primär El-Services originalwebbplats"
              fetchPriority="high"
              decoding="async"
            />
          </div>
        </div>
      </section>
    </>
  );
}
export function ReferenserSection2() {
  const { openCookies, requestReco } = useUI();
  return (
    <>
      <section className="wrap section">
        <div className="section-head">
          <div>
            <p className="eyebrow">
              <span aria-hidden="true"></span>
              {"FRÅN VÅR VARDAG"}
            </p>
            <h2>
              {"Riktigt arbete."}
              <br />
              {"Riktiga människor."}
            </h2>
          </div>
          <p>{"Bilder från Primär El-Services eget referensgalleri."}</p>
        </div>
        <div className="project-grid">
          <figure>
            <img
              className=""
              src="/assets/referens3.webp"
              srcSet="/assets/referens3-400.webp 400w, /assets/referens3.webp 600w"
              sizes="(max-width: 700px) 100vw, 50vw"
              width="600"
              height="600"
              alt="Montör vid elcentral"
              loading="lazy"
              decoding="async"
            />
            <figcaption>
              <span className="micro">{"Elservice"}</span>
              <h3>{"Människorna bakom arbetet"}</h3>
            </figcaption>
          </figure>
          <figure>
            <img
              className=""
              src="/assets/referens17.webp"
              srcSet="/assets/referens17-400.webp 400w, /assets/referens17.webp 600w"
              sizes="(max-width: 700px) 100vw, 50vw"
              width="600"
              height="600"
              alt="Belysning i kök"
              loading="lazy"
              decoding="async"
            />
            <figcaption>
              <span className="micro">{"Belysning"}</span>
              <h3>{"Detaljer som gör skillnad"}</h3>
            </figcaption>
          </figure>
          <figure>
            <img
              className=""
              src="/assets/referens20.webp"
              srcSet="/assets/referens20-400.webp 400w, /assets/referens20.webp 600w"
              sizes="(max-width: 700px) 100vw, 50vw"
              width="600"
              height="600"
              alt="Belyst verksamhetslokal"
              loading="lazy"
              decoding="async"
            />
            <figcaption>
              <span className="micro">{"Företag"}</span>
              <h3>{"El för hela verksamheten"}</h3>
            </figcaption>
          </figure>
          <figure>
            <img
              className=""
              src="/assets/referens1.webp"
              srcSet="/assets/referens1-400.webp 400w, /assets/referens1.webp 600w"
              sizes="(max-width: 700px) 100vw, 50vw"
              width="600"
              height="600"
              alt="Bild från Primär El-Services befintliga referensgalleri"
              loading="lazy"
              decoding="async"
            />
            <figcaption>
              <span className="micro">{"Referensgalleri"}</span>
              <h3>{"Ett urval av våra arbeten"}</h3>
            </figcaption>
          </figure>
          <figure>
            <img
              className=""
              src="/assets/referens2.webp"
              srcSet="/assets/referens2-400.webp 400w, /assets/referens2.webp 600w"
              sizes="(max-width: 700px) 100vw, 50vw"
              width="600"
              height="600"
              alt="Bild från Primär El-Services befintliga referensgalleri"
              loading="lazy"
              decoding="async"
            />
            <figcaption>
              <span className="micro">{"Referensgalleri"}</span>
              <h3>{"Ett urval av våra arbeten"}</h3>
            </figcaption>
          </figure>
          <figure>
            <img
              className=""
              src="/assets/referens4.webp"
              srcSet="/assets/referens4-400.webp 400w, /assets/referens4.webp 600w"
              sizes="(max-width: 700px) 100vw, 50vw"
              width="600"
              height="600"
              alt="Bild från Primär El-Services befintliga referensgalleri"
              loading="lazy"
              decoding="async"
            />
            <figcaption>
              <span className="micro">{"Referensgalleri"}</span>
              <h3>{"Ett urval av våra arbeten"}</h3>
            </figcaption>
          </figure>
          <figure>
            <img
              className=""
              src="/assets/referens5.webp"
              srcSet="/assets/referens5-400.webp 400w, /assets/referens5.webp 600w"
              sizes="(max-width: 700px) 100vw, 50vw"
              width="600"
              height="600"
              alt="Bild från Primär El-Services befintliga referensgalleri"
              loading="lazy"
              decoding="async"
            />
            <figcaption>
              <span className="micro">{"Referensgalleri"}</span>
              <h3>{"Ett urval av våra arbeten"}</h3>
            </figcaption>
          </figure>
          <figure>
            <img
              className=""
              src="/assets/referens6.webp"
              srcSet="/assets/referens6-400.webp 400w, /assets/referens6.webp 600w"
              sizes="(max-width: 700px) 100vw, 50vw"
              width="600"
              height="600"
              alt="Bild från Primär El-Services befintliga referensgalleri"
              loading="lazy"
              decoding="async"
            />
            <figcaption>
              <span className="micro">{"Referensgalleri"}</span>
              <h3>{"Ett urval av våra arbeten"}</h3>
            </figcaption>
          </figure>
          <figure>
            <img
              className=""
              src="/assets/referens7.webp"
              srcSet="/assets/referens7-400.webp 400w, /assets/referens7.webp 600w"
              sizes="(max-width: 700px) 100vw, 50vw"
              width="600"
              height="600"
              alt="Bild från Primär El-Services befintliga referensgalleri"
              loading="lazy"
              decoding="async"
            />
            <figcaption>
              <span className="micro">{"Referensgalleri"}</span>
              <h3>{"Ett urval av våra arbeten"}</h3>
            </figcaption>
          </figure>
          <figure>
            <img
              className=""
              src="/assets/referens8.webp"
              srcSet="/assets/referens8-400.webp 400w, /assets/referens8.webp 600w"
              sizes="(max-width: 700px) 100vw, 50vw"
              width="600"
              height="600"
              alt="Bild från Primär El-Services befintliga referensgalleri"
              loading="lazy"
              decoding="async"
            />
            <figcaption>
              <span className="micro">{"Referensgalleri"}</span>
              <h3>{"Ett urval av våra arbeten"}</h3>
            </figcaption>
          </figure>
          <figure>
            <img
              className=""
              src="/assets/referens9.webp"
              srcSet="/assets/referens9-400.webp 400w, /assets/referens9.webp 600w"
              sizes="(max-width: 700px) 100vw, 50vw"
              width="600"
              height="600"
              alt="Bild från Primär El-Services befintliga referensgalleri"
              loading="lazy"
              decoding="async"
            />
            <figcaption>
              <span className="micro">{"Referensgalleri"}</span>
              <h3>{"Ett urval av våra arbeten"}</h3>
            </figcaption>
          </figure>
          <figure>
            <img
              className=""
              src="/assets/referens10.webp"
              srcSet="/assets/referens10-400.webp 400w, /assets/referens10.webp 600w"
              sizes="(max-width: 700px) 100vw, 50vw"
              width="600"
              height="600"
              alt="Bild från Primär El-Services befintliga referensgalleri"
              loading="lazy"
              decoding="async"
            />
            <figcaption>
              <span className="micro">{"Referensgalleri"}</span>
              <h3>{"Ett urval av våra arbeten"}</h3>
            </figcaption>
          </figure>
          <figure>
            <img
              className=""
              src="/assets/referens11.webp"
              srcSet="/assets/referens11-400.webp 400w, /assets/referens11.webp 600w"
              sizes="(max-width: 700px) 100vw, 50vw"
              width="600"
              height="600"
              alt="Bild från Primär El-Services befintliga referensgalleri"
              loading="lazy"
              decoding="async"
            />
            <figcaption>
              <span className="micro">{"Referensgalleri"}</span>
              <h3>{"Ett urval av våra arbeten"}</h3>
            </figcaption>
          </figure>
          <figure>
            <img
              className=""
              src="/assets/referens12.webp"
              srcSet="/assets/referens12-400.webp 400w, /assets/referens12.webp 600w"
              sizes="(max-width: 700px) 100vw, 50vw"
              width="600"
              height="600"
              alt="Bild från Primär El-Services befintliga referensgalleri"
              loading="lazy"
              decoding="async"
            />
            <figcaption>
              <span className="micro">{"Referensgalleri"}</span>
              <h3>{"Ett urval av våra arbeten"}</h3>
            </figcaption>
          </figure>
          <figure>
            <img
              className=""
              src="/assets/referens13.webp"
              srcSet="/assets/referens13-400.webp 400w, /assets/referens13.webp 600w"
              sizes="(max-width: 700px) 100vw, 50vw"
              width="600"
              height="600"
              alt="Bild från Primär El-Services befintliga referensgalleri"
              loading="lazy"
              decoding="async"
            />
            <figcaption>
              <span className="micro">{"Referensgalleri"}</span>
              <h3>{"Ett urval av våra arbeten"}</h3>
            </figcaption>
          </figure>
          <figure>
            <img
              className=""
              src="/assets/referens14.webp"
              srcSet="/assets/referens14-400.webp 400w, /assets/referens14.webp 600w"
              sizes="(max-width: 700px) 100vw, 50vw"
              width="600"
              height="600"
              alt="Bild från Primär El-Services befintliga referensgalleri"
              loading="lazy"
              decoding="async"
            />
            <figcaption>
              <span className="micro">{"Referensgalleri"}</span>
              <h3>{"Ett urval av våra arbeten"}</h3>
            </figcaption>
          </figure>
          <figure>
            <img
              className=""
              src="/assets/referens15.webp"
              srcSet="/assets/referens15-400.webp 400w, /assets/referens15.webp 600w"
              sizes="(max-width: 700px) 100vw, 50vw"
              width="600"
              height="600"
              alt="Bild från Primär El-Services befintliga referensgalleri"
              loading="lazy"
              decoding="async"
            />
            <figcaption>
              <span className="micro">{"Referensgalleri"}</span>
              <h3>{"Ett urval av våra arbeten"}</h3>
            </figcaption>
          </figure>
          <figure>
            <img
              className=""
              src="/assets/referens16.webp"
              srcSet="/assets/referens16-400.webp 400w, /assets/referens16.webp 600w"
              sizes="(max-width: 700px) 100vw, 50vw"
              width="600"
              height="600"
              alt="Bild från Primär El-Services befintliga referensgalleri"
              loading="lazy"
              decoding="async"
            />
            <figcaption>
              <span className="micro">{"Referensgalleri"}</span>
              <h3>{"Ett urval av våra arbeten"}</h3>
            </figcaption>
          </figure>
          <figure>
            <img
              className=""
              src="/assets/referens18.webp"
              srcSet="/assets/referens18-400.webp 400w, /assets/referens18.webp 600w"
              sizes="(max-width: 700px) 100vw, 50vw"
              width="600"
              height="600"
              alt="Bild från Primär El-Services befintliga referensgalleri"
              loading="lazy"
              decoding="async"
            />
            <figcaption>
              <span className="micro">{"Referensgalleri"}</span>
              <h3>{"Ett urval av våra arbeten"}</h3>
            </figcaption>
          </figure>
          <figure>
            <img
              className=""
              src="/assets/referens19.webp"
              srcSet="/assets/referens19-400.webp 400w, /assets/referens19.webp 600w"
              sizes="(max-width: 700px) 100vw, 50vw"
              width="600"
              height="600"
              alt="Bild från Primär El-Services befintliga referensgalleri"
              loading="lazy"
              decoding="async"
            />
            <figcaption>
              <span className="micro">{"Referensgalleri"}</span>
              <h3>{"Ett urval av våra arbeten"}</h3>
            </figcaption>
          </figure>
        </div>
      </section>
    </>
  );
}
export function ServiceavtalSection1() {
  const { openCookies, requestReco } = useUI();
  return (
    <>
      <section className="inner-hero">
        <div className="wrap">
          <p className="breadcrumb">
            <Link to="/">{"Start"}</Link>
            <span aria-hidden="true">{"/"}</span>
            {"En elpartner för"}
            <br />
            {"hela fastigheten."}
          </p>
          <div className="split">
            <div>
              <p className="eyebrow">
                <span aria-hidden="true"></span>
                {"BRF · FASTIGHET · FÖRETAG"}
              </p>
              <h1>
                {"En elpartner för"}
                <br />
                {"hela fastigheten."}
              </h1>
              <p>
                {
                  "Löpande service, planerade elarbeten och större projekt. Primär hjälper bostadsrättsföreningar, fastighetsägare och företag."
                }
              </p>
              <Link className="button primary" to="/kontakt/">
                {"Kontakta oss"}
              </Link>
            </div>
            <img
              className=""
              src="/assets/referens20.webp"
              srcSet="/assets/referens20-400.webp 400w, /assets/referens20.webp 600w"
              sizes="(max-width: 700px) 100vw, 50vw"
              width="600"
              height="600"
              alt="Bild från Primär El-Services originalwebbplats"
              fetchPriority="high"
              decoding="async"
            />
          </div>
        </div>
      </section>
    </>
  );
}
export function ServiceavtalSection2() {
  const { openCookies, requestReco } = useUI();
  return (
    <>
      <section className="wrap section content-section">
        <div>
          <h2>{"Service som utgår från er."}</h2>
          <p>
            {
              "Med över tio års erfarenhet av service i fastigheter och lägenheter erbjuder vi serviceavtal för BRF:er och bostadsägare. Tillsammans går vi igenom vad er fastighet behöver."
            }
          </p>
        </div>
        <ul className="clean-list">
          <li>{"Elservice och felsökning"}</li>
          <li>{"Belysning, dimrar och strömbrytare"}</li>
          <li>{"Elcentraler och installationer"}</li>
          <li>{"Renoveringar och tillbyggnader"}</li>
        </ul>
      </section>
    </>
  );
}
export function ServiceavtalSection3() {
  const { openCookies, requestReco } = useUI();
  return (
    <>
      <section className="property section" id="foretag">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="eyebrow">
                <span aria-hidden="true"></span>
                {"FÖR FÖRETAG"}
              </p>
              <h2>{"En partner i ert nästa projekt."}</h2>
            </div>
            <p>
              {
                "Vi utför större serviceuppdrag och mer omfattande projekt åt företag. Vi samarbetar gärna med byggherrar och andra hantverkare kring nyproduktion, renovering och tillbyggnad."
              }
            </p>
          </div>
          <Link className="button primary" to="/kontakt/?service=Företag">
            {"Berätta om ert projekt"}
          </Link>
        </div>
      </section>
    </>
  );
}
export function TackSection1() {
  const { openCookies, requestReco } = useUI();
  return (
    <>
      <section className="wrap section legal">
        <p className="eyebrow">
          <span aria-hidden="true"></span>
          {"KONTAKT"}
        </p>
        <h1>{"Din förfrågan."}</h1>
        <p>
          {
            "En förfrågan från denna version skickas genom ditt e-postprogram. Kontrollera att du faktiskt har skickat mejlet. Vid akuta elfel ska du ringa vår eljour."
          }
        </p>
        <Link className="button primary" to="/kontakt/">
          {"Till kontakt"}
        </Link>
      </section>
    </>
  );
}
export function NotFoundSection() {
  const { openCookies, requestReco } = useUI();
  return (
    <>
      <h1>{"Sidan finns inte."}</h1>
    </>
  );
}
export function NotFoundSection2() {
  const { openCookies, requestReco } = useUI();
  return (
    <>
      <p>{"Vi hjälper dig gärna att hitta rätt."}</p>
    </>
  );
}
export function NotFoundSection3() {
  const { openCookies, requestReco } = useUI();
  return (
    <>
      <Link className="button primary" to="/">
        {"Till startsidan"}
      </Link>
    </>
  );
}

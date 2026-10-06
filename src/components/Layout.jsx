import { Link } from "react-router-dom";
import { useUI, RecoEmbed } from "./UIContext.jsx";
import ContactForm from "./ContactForm.jsx";
function SocialLinks({ className }) {
  return (
    <div className={className}>
      <a
        href="https://facebook.com/Primarelservice"
        target="_blank"
        rel="noopener"
        aria-label="Primär El-Service på Facebook"
        title="Facebook"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M14 6h3V2h-3c-2.76 0-5 2.24-5 5v2H7v4h2v9h4v-9h3l1-4h-4V7c0-.55.45-1 1-1z"
          />
        </svg>
      </a>
      <a
        href="https://instagram.com/Primarelservice"
        target="_blank"
        rel="noopener"
        aria-label="Primär El-Service på Instagram"
        title="Instagram"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect
            x="3"
            y="3"
            width="18"
            height="18"
            rx="5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <circle
            cx="12"
            cy="12"
            r="4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <circle cx="17.5" cy="6.5" r="1.25" fill="currentColor" />
        </svg>
      </a>
    </div>
  );
}
export function Header() {
  const {
    menuButton,
    menuRef,
    menuOpen,
    openMenu,
    closeMenu,
    cancelMenu,
    menuClosed,
    menuLinkClick,
    openCookies,
    requestReco,
  } = useUI();
  return (
    <>
      <a className="skip" href="#main">
        {"Hoppa till huvudinnehåll"}
      </a>
      <div className="topbar">
        <div className="wrap">
          <div className="topbar-brand">
            <a
              className="topbar-reco"
              href="https://www.reco.se/m-larsson-primar-el-service-ab"
              title="Rekommenderat företag på Reco 2021"
            >
              <img
                src="/assets/reco-badge-2021.svg"
                width="32"
                height="32"
                alt="Reco – rekommenderat företag 2021"
              />
            </a>
            <span>{"Elservice för hem, företag & BRF i Stockholm"}</span>
          </div>
          <a className="topbar-phone" href="tel:+46840020108">
            {"Eljour dygnet runt · 08-400 201 08"}
          </a>
          <SocialLinks className="topbar-social" />
        </div>
      </div>
      <header>
        <div className="wrap nav-wrap">
          <Link
            className="logo"
            aria-label="Primär El-Service – startsida"
            to="/"
          >
            <picture>
              <source
                media="(max-width:900px)"
                srcSet="/assets/primar-elservice-logo-vit.png"
              />
              <img
                src="/assets/primar-elservice-logo.png"
                width="273"
                height="100"
                alt="Primär El-Service"
              />
            </picture>
          </Link>
          <nav className="desktop-nav" aria-label="Huvudmeny">
            <Link to="/#tjanster">{"Tjänster"}</Link>
            <Link to="/eljour-stockholm/">
              {"Eljour "}
              <span className="nav-24">{"24/7"}</span>
            </Link>
            <Link to="/serviceavtal/">{"BRF & företag"}</Link>
            <Link to="/om-oss/">{"Om oss"}</Link>
          </nav>
          <Link className="button nav-contact" to="/kontakt/">
            {"Kontakta oss"}
          </Link>
          <button
            className="menu-toggle"
            aria-controls="mobile-nav"
            aria-haspopup="dialog"
            ref={menuButton}
            onClick={openMenu}
            aria-expanded={menuOpen}
          >
            {"Meny "}
            <span aria-hidden="true">{"☰"}</span>
          </button>
        </div>
      </header>
      <dialog
        id="mobile-nav"
        className="mobile-sheet"
        aria-label="Mobilmeny"
        ref={menuRef}
        onCancel={cancelMenu}
        onClose={menuClosed}
        onClick={menuLinkClick}
      >
        <div className="sheet-header">
          <Link
            className="sheet-logo"
            aria-label="Primär El-Service – startsida"
            to="/"
          >
            <img
              src="/assets/primar-elservice-logo-vit.png"
              width="273"
              height="100"
              alt="Primär El-Service"
            />
          </Link>
          <button
            className="sheet-close"
            type="button"
            onClick={() => closeMenu()}
          >
            {"Stäng "}
            <span aria-hidden="true">{"×"}</span>
          </button>
        </div>
        <div className="sheet-scroll">
          <nav className="sheet-links" aria-label="Mobilmenyns länkar">
            <Link className="sheet-main" to="/">
              {"Start"}
            </Link>
            <details className="sheet-group">
              <summary>
                {"Tjänster"}
                <span aria-hidden="true">{"+"}</span>
              </summary>
              <div className="sheet-subnav">
                <Link to="/elinstallationer-stockholm/">
                  {"Elinstallationer"}
                </Link>
                <Link to="/eljour-stockholm/">{"Eljour dygnet runt"}</Link>
                <Link to="/serviceavtal/">{"Service & BRF"}</Link>
                <Link to="/luftvarmepumpar-stockholm/">
                  {"Luftvärmepumpar"}
                </Link>
                <Link to="/installera-fiber/">{"Fiberinstallation"}</Link>
              </div>
            </details>
            <Link className="sheet-main" to="/eljour-stockholm/">
              {"Eljour "}
              <small>{"24/7"}</small>
            </Link>
            <details className="sheet-group">
              <summary>
                {"BRF & företag"}
                <span aria-hidden="true">{"+"}</span>
              </summary>
              <div className="sheet-subnav">
                <Link to="/serviceavtal/">
                  {"Serviceavtal för BRF & fastighet"}
                </Link>
                <Link to="/serviceavtal/#foretag">
                  {"För företag & byggprojekt"}
                </Link>
              </div>
            </details>
            <Link className="sheet-main" to="/om-oss/">
              {"Om oss"}
            </Link>
            <Link className="sheet-main" to="/referenser/">
              {"Våra arbeten"}
            </Link>
            <Link className="sheet-main" to="/kontakt/">
              {"Kontakt"}
            </Link>
            <details className="sheet-group">
              <summary>
                {"Våra områden"}
                <span aria-hidden="true">{"+"}</span>
              </summary>
              <div className="sheet-subnav">
                <Link to="/elektriker-stockholm/">{"Hela Stockholm"}</Link>
                <Link to="/elektriker-solna/">{"Solna"}</Link>
                <Link to="/elektriker-sundbyberg/">{"Sundbyberg"}</Link>
                <Link to="/elektriker-bromma/">{"Bromma"}</Link>
                <Link to="/elektriker-sollentuna/">{"Sollentuna"}</Link>
                <Link to="/elektriker-taby/">{"Täby"}</Link>
                <Link to="/elektriker-sodermalm/">{"Södermalm"}</Link>
                <Link to="/elektriker-nacka/">{"Nacka"}</Link>
                <Link to="/elektriker-i-jarfalla/">{"Järfälla"}</Link>
              </div>
            </details>
          </nav>
          <div className="sheet-contact">
            <div className="sheet-contact-row">
              <div>
                <p>{"ELJOUR DYGNET RUNT"}</p>
                <a className="sheet-phone" href="tel:+46840020108">
                  {"08-400 201 08"}
                </a>
              </div>
              <a
                className="sheet-reco"
                href="https://www.reco.se/m-larsson-primar-el-service-ab"
              >
                <img
                  src="/assets/reco-badge-2021.svg"
                  width="88"
                  height="88"
                  alt="Reco – rekommenderat företag 2021"
                />
              </a>
            </div>
            <a href="mailto:info@primarelservice.se">
              {"info@primarelservice.se"}
            </a>
          </div>
          <SocialLinks className="sheet-social" />
          <nav className="sheet-policies" aria-label="Villkor och integritet">
            <Link to="/dataskyddspolicy/">{"Dataskyddspolicy"}</Link>
            <Link to="/cookie-policy/">{"Cookies"}</Link>
          </nav>
        </div>
      </dialog>
    </>
  );
}
export function Footer() {
  const {
    menuButton,
    menuRef,
    menuOpen,
    openMenu,
    closeMenu,
    cancelMenu,
    menuClosed,
    menuLinkClick,
    openCookies,
    requestReco,
  } = useUI();
  return (
    <>
      <footer>
        <div className="wrap">
          <div className="footer-top">
            <div>
              <img
                className="footer-logo"
                src="/assets/primar-elservice-logo-vit.png"
                width="273"
                height="100"
                alt="Primär El-Service"
              />
              <p>
                {"Trygg elhjälp."}
                <br />
                {"Över hela Stockholm."}
              </p>
            </div>
            <div>
              <h2>{"Hör av dig"}</h2>
              <a className="footer-phone" href="tel:+46840020108">
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
            </div>
            <div>
              <h2>{"Upptäck Primär"}</h2>
              <Link to="/elinstallationer-stockholm/">
                {"Elinstallationer"}
              </Link>
              <Link to="/eljour-stockholm/">{"Eljour dygnet runt"}</Link>
              <Link to="/serviceavtal/">{"Service, BRF & företag"}</Link>
              <Link to="/luftvarmepumpar-stockholm/">{"Luftvärmepumpar"}</Link>
              <Link to="/installera-fiber/">{"Fiberinstallation"}</Link>
              <Link to="/referenser/">{"Våra arbeten"}</Link>
            </div>
          </div>
          <div className="footer-bottom">
            <span>{"© 2026 Primär El-Service AB"}</span>
            <div>
              <Link to="/dataskyddspolicy/">{"Dataskyddspolicy"}</Link>
              <Link to="/cookie-policy/">{"Cookies"}</Link>
              <button
                className="text-button"
                data-cookie-open={true}
                onClick={openCookies}
              >
                {"Cookieinställningar"}
              </button>
            </div>
          </div>
        </div>
      </footer>
      <div className="mobile-actions">
        <a href="tel:+46840020108">{"Ring oss "}</a>
        <Link to="/kontakt/">{"Kontakta oss "}</Link>
      </div>
    </>
  );
}

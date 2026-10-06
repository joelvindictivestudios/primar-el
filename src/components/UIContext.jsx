import { createContext, useContext, useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
const UIContext = createContext(null);
export const useUI = () => useContext(UIContext);
export function UIProvider({ children }) {
  const menuRef = useRef(null),
    menuButton = useRef(null),
    cookieRef = useRef(null),
    opener = useRef(null),
    timer = useRef(null),
    overflow = useRef("");
  const [menuOpen, setMenuOpen] = useState(false),
    [external, setExternal] = useState(false),
    [choice, setChoice] = useState(false),
    [requested, setRequested] = useState(false);
  const location = useLocation();
  useEffect(() => {
    try {
      setExternal(
        Boolean(JSON.parse(localStorage.getItem("primar-consent"))?.external),
      );
    } catch {}
  }, []);
  function finishClose() {
    clearTimeout(timer.current);
    menuRef.current?.classList.remove("is-closing");
    if (menuRef.current?.open) menuRef.current.close();
  }
  function closeMenu(animate = true) {
    if (!menuRef.current?.open) return;
    if (!animate || matchMedia("(prefers-reduced-motion:reduce)").matches) {
      finishClose();
      return;
    }
    menuRef.current.classList.add("is-closing");
    timer.current = setTimeout(finishClose, 300);
  }
  function openMenu() {
    clearTimeout(timer.current);
    menuRef.current.classList.remove("is-closing");
    overflow.current = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    menuRef.current.showModal();
    setMenuOpen(true);
    menuRef.current.querySelector(".sheet-close").focus();
  }
  function menuClosed() {
    clearTimeout(timer.current);
    setMenuOpen(false);
    document.documentElement.style.overflow = overflow.current;
    if (matchMedia("(max-width:900px)").matches)
      menuButton.current?.focus({ preventScroll: true });
  }
  function openCookies(event) {
    opener.current = event?.currentTarget || document.activeElement;
    setChoice(external);
    cookieRef.current.showModal();
  }
  function requestReco(event) {
    setRequested(true);
    if (!external) openCookies(event);
  }
  function saveConsent(value) {
    setExternal(value);
    try {
      localStorage.setItem(
        "primar-consent",
        JSON.stringify({ external: value, updated: new Date().toISOString() }),
      );
    } catch {}
    cookieRef.current.close();
  }
  useEffect(() => {
    setRequested(false);
    closeMenu(false);
  }, [location.pathname]);
  useEffect(() => {
    const media = matchMedia("(min-width:901px)");
    const resize = (e) => {
      if (e.matches) closeMenu(false);
    };
    media.addEventListener("change", resize);
    return () => {
      media.removeEventListener("change", resize);
      clearTimeout(timer.current);
      document.documentElement.style.overflow = overflow.current;
    };
  }, []);
  return (
    <UIContext.Provider
      value={{
        menuRef,
        menuButton,
        menuOpen,
        openMenu,
        closeMenu,
        menuClosed,
        cancelMenu: (e) => {
          e.preventDefault();
          closeMenu();
        },
        menuLinkClick: (e) => {
          if (e.target.closest("a")) closeMenu(false);
        },
        openCookies,
        requestReco,
        external,
        requested,
      }}
    >
      {children}
      <dialog
        id="cookies"
        ref={cookieRef}
        aria-labelledby="cookie-title"
        onClose={() => opener.current?.focus()}
      >
        <form method="dialog">
          <div className="dialog-head">
            <h2 id="cookie-title">Dina integritetsval</h2>
            <button aria-label="Stäng cookieinställningar" value="close">
              ×
            </button>
          </div>
          <p>
            Här används inga analys- eller marknadsföringscookies. Ditt val
            sparas på din enhet. Externt innehåll från Reco laddas bara om du
            tillåter det.
          </p>
          <label className="check" htmlFor="external-consent">
            <input
              id="external-consent"
              type="checkbox"
              checked={choice}
              onChange={(e) => setChoice(e.target.checked)}
            />{" "}
            Tillåt externt innehåll från Reco
          </label>
          <p>
            <Link
              to="/cookie-policy/"
              onClick={() => cookieRef.current.close()}
            >
              Läs om cookies och externa tjänster
            </Link>
          </p>
          <div className="dialog-actions">
            <button
              type="button"
              className="button outline"
              onClick={() => saveConsent(false)}
            >
              Endast nödvändigt
            </button>
            <button
              type="button"
              className="button primary"
              onClick={() => saveConsent(choice)}
            >
              Spara mitt val
            </button>
          </div>
        </form>
      </dialog>
    </UIContext.Provider>
  );
}
export function RecoEmbed() {
  const { external, requested } = useUI();
  return (
    <div id="reco-container">
      {external && requested && (
        <iframe
          src="https://widget.reco.se/v2/widget/4038376?mode=HORIZONTAL_QUOTE"
          title="Aktuella kundomdömen för Primär El-Service på Reco"
          loading="lazy"
        />
      )}
    </div>
  );
}

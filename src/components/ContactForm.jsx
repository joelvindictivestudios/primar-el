import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { buildDraft, validateInquiry } from "../contact.mjs";
export default function ContactForm() {
  const location = useLocation();
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Elinstallation",
    message: "",
  });
  const [errors, setErrors] = useState({}),
    [draft, setDraft] = useState("");
  const summary = useRef(null),
    result = useRef(null),
    focusErrors = useRef(false);
  const urgent = values.service === "Eljour";
  useEffect(() => {
    const query = new URLSearchParams(location.search).get("service");
    if (query === "BRF" || query === "Företag")
      setValues((v) => ({
        ...v,
        service: query === "BRF" ? "BRF / fastighet" : "Företagsservice",
      }));
  }, [location.search]);
  useEffect(() => {
    if (focusErrors.current) {
      summary.current?.focus();
      focusErrors.current = false;
    }
  }, [errors]);
  useEffect(() => {
    if (draft)
      result.current?.scrollIntoView({
        behavior: matchMedia("(prefers-reduced-motion:reduce)").matches
          ? "instant"
          : "smooth",
        block: "center",
      });
  }, [draft]);
  function change(e) {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    setDraft("");
    setErrors((old) => {
      const next = { ...old };
      delete next[name];
      return next;
    });
  }
  function submit(e) {
    e.preventDefault();
    if (urgent) return;
    const next = validateInquiry(values);
    focusErrors.current = Boolean(Object.keys(next).length);
    setErrors(next);
    setDraft(Object.keys(next).length ? "" : buildDraft(values));
  }
  function field(name, label, type = "text") {
    return (
      <div>
        <label htmlFor={name}>
          {label}{" "}
          <span>({name === "phone" ? "valfritt" : "obligatoriskt"})</span>
        </label>
        <input
          id={name}
          name={name}
          type={type}
          autoComplete={name === "phone" ? "tel" : name}
          required={name !== "phone"}
          value={values[name]}
          onChange={change}
          aria-invalid={Boolean(errors[name])}
          aria-describedby={name === "phone" ? undefined : name + "-error"}
        />
        {name !== "phone" && (
          <p
            id={name + "-error"}
            className="field-error"
            hidden={!errors[name]}
          >
            {errors[name]}
          </p>
        )}
      </div>
    );
  }
  return (
    <form id="contact-form" noValidate onSubmit={submit}>
      <p className="small">
        Fyll i din förfrågan och öppna den i ditt e-postprogram. Ingenting
        skickas automatiskt.
      </p>
      <div
        id="form-errors"
        className="error-summary"
        role="alert"
        tabIndex={-1}
        ref={summary}
        hidden={!Object.keys(errors).length}
      >
        <strong>Kontrollera din förfrågan:</strong>
        {Object.entries(errors).map(([name, message]) => (
          <a
            key={name}
            href={"#" + name}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById(name).focus();
            }}
          >
            {message}
          </a>
        ))}
      </div>
      <div className="form-grid">
        {field("name", "Namn")}
        {field("email", "E-post", "email")}
        {field("phone", "Telefon", "tel")}
        <div>
          <label htmlFor="service">Vad behöver du hjälp med?</label>
          <select
            id="service"
            name="service"
            value={values.service}
            onChange={change}
          >
            {[
              "Elinstallation",
              "Eljour",
              "BRF / fastighet",
              "Företagsservice",
              "Luftvärmepump",
              "Annat",
            ].map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </div>
      </div>
      <p id="service-urgent" className="urgent-note" hidden={!urgent}>
        För akuta elfel: <a href="tel:+46840020108">ring vår eljour</a>.
      </p>
      <label htmlFor="message">
        Meddelande <span>(obligatoriskt)</span>
      </label>
      <textarea
        id="message"
        name="message"
        rows={5}
        required
        value={values.message}
        onChange={change}
        aria-invalid={Boolean(errors.message)}
        aria-describedby="message-error"
      />
      <p id="message-error" className="field-error" hidden={!errors.message}>
        {errors.message}
      </p>
      <p className="small">
        Uppgifterna används för att besvara din förfrågan.{" "}
        <Link to="/dataskyddspolicy/">
          Så hanterar Primär dina personuppgifter
        </Link>
        .
      </p>
      <button className="button primary" type="submit" hidden={urgent}>
        Förbered förfrågan
      </button>
      <div id="form-result" role="status" ref={result} hidden={!draft}>
        <h3>Din förfrågan är klar att mejla.</h3>
        <p>
          Öppna ditt e-postprogram, kontrollera meddelandet och skicka det
          därifrån. Om det inte öppnas kan du kopiera texten och mejla till
          info@primarelservice.se.
        </p>
        <a
          id="email-draft"
          className="button primary"
          href={
            "mailto:info@primarelservice.se?subject=" +
            encodeURIComponent("Förfrågan: " + values.service) +
            "&body=" +
            encodeURIComponent(draft)
          }
        >
          Öppna i e-postprogram
        </a>
        <label htmlFor="draft-text">Din förfrågan</label>
        <textarea id="draft-text" readOnly rows={8} value={draft} />
      </div>
    </form>
  );
}

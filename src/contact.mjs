export function validateInquiry(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Ange ditt namn.";
  if (!values.email.trim()) errors.email = "Ange din e-postadress.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))
    errors.email = "Ange en giltig e-postadress, till exempel namn@exempel.se.";
  if (!values.message.trim())
    errors.message = "Beskriv vad du behöver hjälp med.";
  return errors;
}
export function buildDraft(values) {
  return `Namn: ${values.name.trim()}\nE-post: ${values.email.trim()}\nTelefon: ${values.phone.trim() || "Ej angivet"}\nTjänst: ${values.service}\n\n${values.message.trim()}`;
}

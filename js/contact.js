import { clinicConfig, buildWhatsappLink } from "./config.js";

function setError(field, message) {
  const wrapper = field.closest(".field");
  if (!wrapper) return;
  const slot = wrapper.querySelector(`[data-error-for="${field.name}"]`);
  if (slot) slot.textContent = message || "";
  wrapper.classList.toggle("is-invalid", Boolean(message));
}

function validate(form) {
  let firstInvalid = null;
  const fields = form.querySelectorAll("input[required], select[required], textarea[required]");
  fields.forEach((field) => {
    let message = "";
    if (field.type === "checkbox" && !field.checked) {
      message = "É necessário autorizar o contato.";
    } else if (!field.value.trim()) {
      message = "Este campo é obrigatório.";
    } else if (field.type === "tel" && field.value.replace(/\D/g, "").length < 10) {
      message = "Informe um telefone válido com DDD.";
    }
    setError(field, message);
    if (message && !firstInvalid) firstInvalid = field;
  });
  return firstInvalid;
}

function buildMessage(data) {
  return [
    "Olá, gostaria de receber mais informações.",
    "",
    `Nome do responsável: ${data.responsavel}`,
    `Telefone: ${data.telefone}`,
    data.crianca ? `Nome ou idade da criança: ${data.crianca}` : "",
    `Assunto: ${data.assunto}`,
    `Mensagem: ${data.mensagem}`
  ]
    .filter(Boolean)
    .join("\n");
}

export function initContactForm() {
  const form = document.getElementById("contact-form");
  const feedback = document.getElementById("contact-feedback");
  if (!form) return;

  form.addEventListener("input", (e) => {
    const field = e.target;
    if (field.matches("input, select, textarea")) setError(field, "");
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    feedback.textContent = "";
    feedback.classList.remove("is-error");

    const firstInvalid = validate(form);
    if (firstInvalid) {
      firstInvalid.focus();
      feedback.textContent = "Por favor, revise os campos destacados.";
      feedback.classList.add("is-error");
      return;
    }

    const data = {
      responsavel: form.responsavel.value.trim(),
      telefone: form.telefone.value.trim(),
      crianca: form.crianca.value.trim(),
      assunto: form.assunto.value,
      mensagem: form.mensagem.value.trim()
    };

    if (!clinicConfig.whatsapp) {
      feedback.textContent =
        "O contato direto ainda não foi configurado. Em breve este formulário direcionará para o WhatsApp da clínica.";
      feedback.classList.add("is-error");
      return;
    }

    const text = encodeURIComponent(buildMessage(data));
    const url = `https://wa.me/${clinicConfig.whatsapp}?text=${text}`;

    feedback.textContent = "Abrindo o WhatsApp em uma nova aba…";
    window.open(url, "_blank", "noopener");
    form.reset();
  });
}

export function initWhatsappFloating() {
  const link = document.getElementById("whatsapp-floating");
  if (!link) return;
  const url = buildWhatsappLink();
  if (!url) { link.hidden = true; return; }
  link.href = url;
  link.hidden = false;
}

export function initWhatsappCtas() {
  const url = buildWhatsappLink();
  if (!url) return;
  document.querySelectorAll('[data-cta="whatsapp"]').forEach((el) => {
    el.setAttribute("href", url);
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener");
  });
}

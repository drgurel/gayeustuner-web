"use client";

import { useState, type FormEvent } from "react";
import { trackFormSubmission } from "@/lib/analytics";

type FormStatus = "idle" | "loading" | "success" | "error";

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
}

const translations = {
  tr: {
    formTitle: "Randevu Formu",
    nameLabel: "Ad Soyad",
    namePlaceholder: "Adınız ve soyadınız",
    phoneLabel: "Telefon",
    phonePlaceholder: "05XX XXX XX XX",
    emailLabel: "E-posta",
    emailPlaceholder: "ornek@email.com",
    childAgeLabel: "Çocuğunuzun Yaşı",
    childAgePlaceholder: "Örn: 5 yaş",
    appointmentTypeLabel: "Randevu Türü",
    appointmentTypeDefault: "Seçiniz",
    messageLabel: "Mesajınız",
    messagePlaceholder: "Tedavi ile ilgili sorularınız veya notlarınız...",
    submit: "Randevu Talebi Gönder",
    sending: "Gönderiliyor...",
    successTitle: "Talebiniz İletildi",
    successDescription: "E-posta uygulamanız açılacaktır. En kısa sürede sizinle iletişime geçeceğiz.",
    newRequest: "Yeni Talep Oluştur",
    errorGeneral: "Bir hata oluştu. Lütfen tekrar deneyiniz veya doğrudan e-posta ile iletişime geçiniz.",
    formNote: "Randevu talebiniz bize e-posta olarak iletilecektir. En kısa sürede sizinle iletişime geçeceğiz.",
    options: {
      firstVisit: "İlk Diş Hekimi Muayenesi (0-3 Yaş)",
      checkup: "Kontrol Muayenesi",
      examination: "Muayene Randevusu",
      orthodontic: "Ortodontik Muayene",
    },
    errors: {
      nameMin: "Ad soyad en az 2 karakter olmalıdır.",
      phoneInvalid: "Geçerli bir telefon numarası giriniz. (05XX XXX XX XX)",
      emailInvalid: "Geçerli bir e-posta adresi giriniz.",
    },
    emailSubjectPrefix: "Randevu Talebi",
    bodyLabels: {
      name: "Ad Soyad",
      phone: "Telefon",
      email: "E-posta",
      childAge: "Çocuğun Yaşı",
      appointmentType: "Randevu Türü",
      message: "Mesaj",
      notSpecified: "Belirtilmedi",
      none: "Yok",
    },
  },
  en: {
    formTitle: "Appointment Form",
    nameLabel: "Full Name",
    namePlaceholder: "Your full name",
    phoneLabel: "Phone",
    phonePlaceholder: "+90 5XX XXX XX XX",
    emailLabel: "Email",
    emailPlaceholder: "example@email.com",
    childAgeLabel: "Child's Age",
    childAgePlaceholder: "e.g. 5 years old",
    appointmentTypeLabel: "Appointment Type",
    appointmentTypeDefault: "Select",
    messageLabel: "Your Message",
    messagePlaceholder: "Your questions or notes about the treatment...",
    submit: "Send Appointment Request",
    sending: "Sending...",
    successTitle: "Request Submitted",
    successDescription: "Your email app will open. We will contact you as soon as possible.",
    newRequest: "Create New Request",
    errorGeneral: "An error occurred. Please try again or contact us directly via email.",
    formNote: "Your appointment request will be sent to us via email. We will get back to you shortly.",
    options: {
      firstVisit: "First Dental Visit (0-3 Years)",
      checkup: "Check-up Appointment",
      examination: "General Examination",
      orthodontic: "Orthodontic Evaluation",
    },
    errors: {
      nameMin: "Full name must be at least 2 characters.",
      phoneInvalid: "Please enter a valid phone number.",
      emailInvalid: "Please enter a valid email address.",
    },
    emailSubjectPrefix: "Appointment Request",
    bodyLabels: {
      name: "Full Name",
      phone: "Phone",
      email: "Email",
      childAge: "Child's Age",
      appointmentType: "Appointment Type",
      message: "Message",
      notSpecified: "Not specified",
      none: "None",
    },
  },
  es: {
    formTitle: "Formulario de Cita",
    nameLabel: "Nombre Completo",
    namePlaceholder: "Su nombre y apellido",
    phoneLabel: "Teléfono",
    phonePlaceholder: "+90 5XX XXX XX XX",
    emailLabel: "Correo Electrónico",
    emailPlaceholder: "ejemplo@email.com",
    childAgeLabel: "Edad del Niño/a",
    childAgePlaceholder: "Ej: 5 años",
    appointmentTypeLabel: "Tipo de Cita",
    appointmentTypeDefault: "Seleccionar",
    messageLabel: "Su Mensaje",
    messagePlaceholder: "Sus preguntas o notas sobre el tratamiento...",
    submit: "Enviar Solicitud de Cita",
    sending: "Enviando...",
    successTitle: "Solicitud Enviada",
    successDescription: "Su aplicación de correo se abrirá. Nos pondremos en contacto con usted lo antes posible.",
    newRequest: "Crear Nueva Solicitud",
    errorGeneral: "Ocurrió un error. Por favor, inténtelo de nuevo o contáctenos directamente por correo electrónico.",
    formNote: "Su solicitud de cita se enviará por correo electrónico. Nos pondremos en contacto con usted a la brevedad.",
    options: {
      firstVisit: "Primera Visita Dental (0-3 Años)",
      checkup: "Cita de Control",
      examination: "Examen General",
      orthodontic: "Evaluación Ortodóntica",
    },
    errors: {
      nameMin: "El nombre completo debe tener al menos 2 caracteres.",
      phoneInvalid: "Por favor, introduzca un número de teléfono válido.",
      emailInvalid: "Por favor, introduzca una dirección de correo electrónico válida.",
    },
    emailSubjectPrefix: "Solicitud de Cita",
    bodyLabels: {
      name: "Nombre Completo",
      phone: "Teléfono",
      email: "Correo Electrónico",
      childAge: "Edad del Niño/a",
      appointmentType: "Tipo de Cita",
      message: "Mensaje",
      notSpecified: "No especificado",
      none: "Ninguno",
    },
  },
} as const;

interface ContactFormProps {
  locale?: "tr" | "en" | "es";
}

export default function ContactForm({ locale = "tr" }: ContactFormProps) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<FormErrors>({});
  const t = translations[locale];

  function validate(form: FormData): FormErrors {
    const errs: FormErrors = {};
    const name = (form.get("name") as string)?.trim();
    const phone = (form.get("phone") as string)?.trim();
    const email = (form.get("email") as string)?.trim();

    if (!name || name.length < 2) {
      errs.name = t.errors.nameMin;
    }
    if (!phone || !/^0?5\d{9}$/.test(phone.replace(/\s/g, ""))) {
      errs.phone = t.errors.phoneInvalid;
    }
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = t.errors.emailInvalid;
    }
    return errs;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const validationErrors = validate(form);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setStatus("loading");

    try {
      const name = form.get("name") as string;
      const phone = form.get("phone") as string;
      const email = form.get("email") as string;
      const childAge = form.get("childAge") as string;
      const appointmentType = form.get("appointmentType") as string;
      const message = form.get("message") as string;

      const bl = t.bodyLabels;
      const subject = encodeURIComponent(`${t.emailSubjectPrefix} - ${name}`);
      const body = encodeURIComponent(
        `${bl.name}: ${name}\n${bl.phone}: ${phone}\n${bl.email}: ${email || bl.notSpecified}\n${bl.childAge}: ${childAge || bl.notSpecified}\n${bl.appointmentType}: ${appointmentType || bl.notSpecified}\n\n${bl.message}:\n${message || bl.none}`
      );

      trackFormSubmission(appointmentType);

      window.location.href = `mailto:gayeustuner@gmail.com?subject=${subject}&body=${body}`;

      await new Promise((r) => setTimeout(r, 500));
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-[var(--color-surface-alt)] rounded-2xl p-8 text-center">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center">
          <svg className="w-8 h-8 text-[var(--color-accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-[var(--color-secondary)] mb-2">
          {t.successTitle}
        </h3>
        <p className="text-[var(--color-text-light)] mb-6">
          {t.successDescription}
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="px-6 py-2.5 border-2 border-[var(--color-border)] text-[var(--color-secondary)] font-semibold rounded-full hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors text-sm"
        >
          {t.newRequest}
        </button>
      </div>
    );
  }

  const quickContactTexts = {
    tr: { or: "veya hemen arayın", whatsapp: "WhatsApp ile yazın" },
    en: { or: "or call now", whatsapp: "Message on WhatsApp" },
    es: { or: "o llame ahora", whatsapp: "Escriba por WhatsApp" },
  } as const;
  const qc = quickContactTexts[locale];

  return (
    <div className="bg-[var(--color-surface-alt)] rounded-2xl p-8">
      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[var(--color-secondary)] mb-4">
        {t.formTitle}
      </h2>

      {/* Quick Contact Alternatives */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <a
          href="tel:+905472666204"
          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[var(--color-primary)] text-white font-medium rounded-xl hover:bg-[var(--color-primary-dark)] transition-colors text-sm"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
          </svg>
          {qc.or}
        </a>
        <a
          href="https://wa.me/905472666204"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#25D366] text-white font-medium rounded-xl hover:bg-[#20BD5A] transition-colors text-sm"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          {qc.whatsapp}
        </a>
      </div>

      {status === "error" && (
        <div role="alert" className="mb-5 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm">
          {t.errorGeneral}
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-[var(--color-text)] mb-1.5">
            {t.nameLabel} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={`w-full px-4 py-3 rounded-xl border bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20 focus:border-[var(--color-primary)] transition-colors text-sm ${errors.name ? "border-red-400" : "border-[var(--color-border)]"}`}
            placeholder={t.namePlaceholder}
          />
          {errors.name && (
            <p id="name-error" role="alert" className="mt-1.5 text-xs text-red-600">{errors.name}</p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-[var(--color-text)] mb-1.5">
            {t.phoneLabel} <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            inputMode="tel"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className={`w-full px-4 py-3 rounded-xl border bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20 focus:border-[var(--color-primary)] transition-colors text-sm ${errors.phone ? "border-red-400" : "border-[var(--color-border)]"}`}
            placeholder={t.phonePlaceholder}
          />
          {errors.phone && (
            <p id="phone-error" role="alert" className="mt-1.5 text-xs text-red-600">{errors.phone}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-[var(--color-text)] mb-1.5">
            {t.emailLabel}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            inputMode="email"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={`w-full px-4 py-3 rounded-xl border bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20 focus:border-[var(--color-primary)] transition-colors text-sm ${errors.email ? "border-red-400" : "border-[var(--color-border)]"}`}
            placeholder={t.emailPlaceholder}
          />
          {errors.email && (
            <p id="email-error" role="alert" className="mt-1.5 text-xs text-red-600">{errors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="childAge" className="block text-sm font-medium text-[var(--color-text)] mb-1.5">
            {t.childAgeLabel}
          </label>
          <input
            type="text"
            id="childAge"
            name="childAge"
            inputMode="numeric"
            className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20 focus:border-[var(--color-primary)] transition-colors text-sm"
            placeholder={t.childAgePlaceholder}
          />
        </div>

        <div>
          <label htmlFor="appointmentType" className="block text-sm font-medium text-[var(--color-text)] mb-1.5">
            {t.appointmentTypeLabel}
          </label>
          <select
            id="appointmentType"
            name="appointmentType"
            className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20 focus:border-[var(--color-primary)] transition-colors text-sm"
          >
            <option value="">{t.appointmentTypeDefault}</option>
            <option value="ilk-muayene">{t.options.firstVisit}</option>
            <option value="kontrol">{t.options.checkup}</option>
            <option value="muayene">{t.options.examination}</option>
            <option value="ortodonti">{t.options.orthodontic}</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-[var(--color-text)] mb-1.5">
            {t.messageLabel}
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20 focus:border-[var(--color-primary)] transition-colors text-sm resize-none"
            placeholder={t.messagePlaceholder}
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full px-8 py-3.5 bg-[var(--color-primary)] text-white font-semibold rounded-full hover:bg-[var(--color-primary-dark)] transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {status === "loading" ? (
            <>
              <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              {t.sending}
            </>
          ) : (
            t.submit
          )}
        </button>

        <p className="text-xs text-[var(--color-text-muted)] text-center">
          {t.formNote}
        </p>
      </form>
    </div>
  );
}

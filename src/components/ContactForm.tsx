"use client";

import { useState, type FormEvent } from "react";

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
} as const;

interface ContactFormProps {
  locale?: "tr" | "en";
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

  return (
    <div className="bg-[var(--color-surface-alt)] rounded-2xl p-8">
      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[var(--color-secondary)] mb-6">
        {t.formTitle}
      </h2>

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

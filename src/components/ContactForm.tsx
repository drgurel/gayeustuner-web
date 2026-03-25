"use client";

import { useState, type FormEvent } from "react";

type FormStatus = "idle" | "loading" | "success" | "error";

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
}

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<FormErrors>({});

  function validate(form: FormData): FormErrors {
    const errs: FormErrors = {};
    const name = (form.get("name") as string)?.trim();
    const phone = (form.get("phone") as string)?.trim();
    const email = (form.get("email") as string)?.trim();

    if (!name || name.length < 2) {
      errs.name = "Ad soyad en az 2 karakter olmalıdır.";
    }
    if (!phone || !/^0?5\d{9}$/.test(phone.replace(/\s/g, ""))) {
      errs.phone = "Geçerli bir telefon numarası giriniz. (05XX XXX XX XX)";
    }
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = "Geçerli bir e-posta adresi giriniz.";
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
      // mailto fallback — form verilerini e-posta olarak yönlendir
      const name = form.get("name") as string;
      const phone = form.get("phone") as string;
      const email = form.get("email") as string;
      const childAge = form.get("childAge") as string;
      const appointmentType = form.get("appointmentType") as string;
      const message = form.get("message") as string;

      const subject = encodeURIComponent(`Randevu Talebi - ${name}`);
      const body = encodeURIComponent(
        `Ad Soyad: ${name}\nTelefon: ${phone}\nE-posta: ${email || "Belirtilmedi"}\nÇocuğun Yaşı: ${childAge || "Belirtilmedi"}\nRandevu Türü: ${appointmentType || "Belirtilmedi"}\n\nMesaj:\n${message || "Yok"}`
      );

      window.location.href = `mailto:gayeustuner@gmail.com?subject=${subject}&body=${body}`;

      // Kısa gecikme sonrası başarılı göster
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
          Talebiniz İletildi
        </h3>
        <p className="text-[var(--color-text-light)] mb-6">
          E-posta uygulamanız açılacaktır. En kısa sürede sizinle iletişime geçeceğiz.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="px-6 py-2.5 border-2 border-[var(--color-border)] text-[var(--color-secondary)] font-semibold rounded-full hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors text-sm"
        >
          Yeni Talep Oluştur
        </button>
      </div>
    );
  }

  return (
    <div className="bg-[var(--color-surface-alt)] rounded-2xl p-8">
      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[var(--color-secondary)] mb-6">
        Randevu Formu
      </h2>

      {status === "error" && (
        <div role="alert" className="mb-5 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm">
          Bir hata oluştu. Lütfen tekrar deneyiniz veya doğrudan e-posta ile iletişime geçiniz.
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-[var(--color-text)] mb-1.5">
            Ad Soyad <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={`w-full px-4 py-3 rounded-xl border bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20 focus:border-[var(--color-primary)] transition-colors text-sm ${errors.name ? "border-red-400" : "border-[var(--color-border)]"}`}
            placeholder="Adınız ve soyadınız"
          />
          {errors.name && (
            <p id="name-error" role="alert" className="mt-1.5 text-xs text-red-600">{errors.name}</p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-[var(--color-text)] mb-1.5">
            Telefon <span className="text-red-500">*</span>
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
            placeholder="05XX XXX XX XX"
          />
          {errors.phone && (
            <p id="phone-error" role="alert" className="mt-1.5 text-xs text-red-600">{errors.phone}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-[var(--color-text)] mb-1.5">
            E-posta
          </label>
          <input
            type="email"
            id="email"
            name="email"
            inputMode="email"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={`w-full px-4 py-3 rounded-xl border bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20 focus:border-[var(--color-primary)] transition-colors text-sm ${errors.email ? "border-red-400" : "border-[var(--color-border)]"}`}
            placeholder="ornek@email.com"
          />
          {errors.email && (
            <p id="email-error" role="alert" className="mt-1.5 text-xs text-red-600">{errors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="childAge" className="block text-sm font-medium text-[var(--color-text)] mb-1.5">
            Çocuğunuzun Yaşı
          </label>
          <input
            type="text"
            id="childAge"
            name="childAge"
            inputMode="numeric"
            className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20 focus:border-[var(--color-primary)] transition-colors text-sm"
            placeholder="Örn: 5 yaş"
          />
        </div>

        <div>
          <label htmlFor="appointmentType" className="block text-sm font-medium text-[var(--color-text)] mb-1.5">
            Randevu Türü
          </label>
          <select
            id="appointmentType"
            name="appointmentType"
            className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20 focus:border-[var(--color-primary)] transition-colors text-sm"
          >
            <option value="">Seçiniz</option>
            <option value="ilk-muayene">İlk Diş Hekimi Muayenesi (0-3 Yaş)</option>
            <option value="kontrol">Kontrol Muayenesi</option>
            <option value="muayene">Muayene Randevusu</option>
            <option value="ortodonti">Ortodontik Muayene</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-[var(--color-text)] mb-1.5">
            Mesajınız
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20 focus:border-[var(--color-primary)] transition-colors text-sm resize-none"
            placeholder="Tedavi ile ilgili sorularınız veya notlarınız..."
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
              Gönderiliyor...
            </>
          ) : (
            "Randevu Talebi Gönder"
          )}
        </button>

        <p className="text-xs text-[var(--color-text-muted)] text-center">
          Randevu talebiniz bize e-posta olarak iletilecektir. En kısa sürede sizinle iletişime geçeceğiz.
        </p>
      </form>
    </div>
  );
}

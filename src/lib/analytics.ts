type GTagEvent = {
  action: string;
  category: string;
  label?: string;
  value?: number;
};

export function trackEvent({ action, category, label, value }: GTagEvent) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value,
    });
  }
}

export function trackFormSubmission(appointmentType: string) {
  trackEvent({
    action: "form_submit",
    category: "appointment",
    label: appointmentType || "not_specified",
  });
}

export function trackPhoneClick(location: string) {
  trackEvent({
    action: "phone_click",
    category: "contact",
    label: location,
  });
}

export function trackEmailClick(location: string) {
  trackEvent({
    action: "email_click",
    category: "contact",
    label: location,
  });
}

export function trackWhatsAppClick(location: string) {
  trackEvent({
    action: "whatsapp_click",
    category: "contact",
    label: location,
  });
}

export function trackCTAClick(ctaName: string, page: string) {
  trackEvent({
    action: "cta_click",
    category: "engagement",
    label: `${ctaName}_${page}`,
  });
}

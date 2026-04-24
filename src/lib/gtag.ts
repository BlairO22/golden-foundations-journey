declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

export const GA_ID = "G-JKGMHNVTDG";

export function trackEvent(eventName: string, params?: Record<string, string | number | boolean>) {
  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }
}

export function trackCTA(buttonText: string, location: string, destination?: string) {
  trackEvent("cta_click", {
    button_text: buttonText,
    click_location: location,
    destination: destination || "",
  });
}

export function trackFormSubmission(formName: string, details?: string) {
  trackEvent("form_submission", {
    form_name: formName,
    form_details: details || "",
  });
}

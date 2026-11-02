export function trackEvent(name: string, params: Record<string, string> = {}) {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", name, params);
}

declare global {
  interface Window { gtag?: (command: string, eventName: string, params?: Record<string, string>) => void; }
}

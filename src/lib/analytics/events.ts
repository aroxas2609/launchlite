type GtagFn = (...args: unknown[]) => void;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: GtagFn;
  }
}

export function trackEvent(name: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined") return;

  const { gtag } = window;
  if (typeof gtag !== "function") return;

  gtag("event", name, params ?? {});
}

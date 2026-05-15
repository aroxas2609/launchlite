"use client";

import Script from "next/script";
import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics/events";

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim();
const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID?.trim();

export function Analytics() {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const el = target.closest("[data-analytics]");
      if (!(el instanceof HTMLElement)) return;

      const name = el.getAttribute("data-analytics");
      if (!name) return;

      const href =
        el instanceof HTMLAnchorElement ? el.href : el.getAttribute("href");

      trackEvent(name, href ? { href } : undefined);
    }

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  if (!GA_ID && !CLARITY_ID) return null;

  return (
    <>
      {GA_ID ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_ID)}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}', { anonymize_ip: true });
            `}
          </Script>
        </>
      ) : null}

      {CLARITY_ID ? (
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${CLARITY_ID}");
          `}
        </Script>
      ) : null}
    </>
  );
}

"use client";
/* eslint-disable */

import { useEffect, useState } from "react";
import Script from "next/script";
import Cookies from "js-cookie";

export default function Analytics() {
  const [consentGranted, setConsentGranted] = useState(false);

  useEffect(() => {
    const hasConsent = Cookies.get("cookieConsent") === "true";
    if (hasConsent) {
      setConsentGranted(true);
    }

    const handleConsent = () => setConsentGranted(true);
    window.addEventListener("cookiesAccepted", handleConsent);
    return () => window.removeEventListener("cookiesAccepted", handleConsent);
  }, []);

  if (!consentGranted) return null;

  const GTM_ID = "GTM-WTB84WRR";

  return (
    <Script id="google-analytics" strategy="afterInteractive">
      {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');
`}
    </Script>
  );
}

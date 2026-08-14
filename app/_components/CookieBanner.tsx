"use client";
/* eslint-disable */

import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { Dictionary } from "@/lib/getDictionaries";

interface CookieBannerProps {
  dict: Dictionary;
}

export default function CookieBanner({ dict }: CookieBannerProps) {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    if (!Cookies.get("cookieConsent")) setShowBanner(true);
  }, []);

  const acceptCookies = () => {
    Cookies.set("cookieConsent", "true", { expires: 365 });
    window.dispatchEvent(new Event("cookiesAccepted"));
    setShowBanner(false);
  };

  const declineCookies = () => {
    Cookies.set("cookieConsent", "false", { expires: 365 });
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed justify-self-center bottom-10 w-2xl shadow-2xl rounded-2xl bg-neutral-600 text-dtext p-4 flex justify-between items-center z-50">
      <p>{dict.UI.cookie}</p>
      <div className="flex gap-2">
        <button
          onClick={declineCookies}
          className="px-4 py-2 bg-gray-700  rounded-2xl"
        >
          {dict.UI.decline}
        </button>
        <button
          onClick={acceptCookies}
          className="px-4 font-semibold py-2 bg-dtext text-gray-700 rounded-2xl"
        >
          {dict.UI.accept}
        </button>
      </div>
    </div>
  );
}

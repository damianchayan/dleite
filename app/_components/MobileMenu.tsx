"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dictionary } from "@/lib/getDictionaries";
import { getLocalizedRoute } from "@/config/routes";

interface MobileMenuProps {
  featureLinks: { label: string; targetId: string }[];
  dict: Dictionary;
  locale: "en" | "es" | "gl";
}

export default function MobileMenu({
  featureLinks,
  dict,
  locale,
}: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // 1. Obtenemos la ruta base traducida de los productos (ej: "/es/products")
  const targetPath = getLocalizedRoute(locale, "products");

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string,
  ) => {
    setIsOpen(false);

    // 2. Comparamos contra la ruta traducida, no contra la estática
    if (pathname === targetPath) {
      e.preventDefault();

      const cleanHash = targetId.replace("#", "");
      const element = document.getElementById(cleanHash);

      if (element) {
        element.scrollIntoView({ behavior: "smooth" });

        // 3. Actualizamos la URL usando la ruta traducida
        window.history.replaceState(null, "", `${targetPath}#${cleanHash}`);
      }
    }
  };

  return (
    <div className="md:hidden content-center">
      <button
        className="text-white p-2 active:bg-white/10 rounded-lg transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>
      <div
        className={`absolute top-14 left-0 w-full bg-dleite border-b border-green-900 flex flex-col justify-center items-center shadow-xl -z-10 transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen
            ? "max-h-125 opacity-100 py-4 pointer-events-auto"
            : "max-h-0 opacity-0 py-0 pointer-events-none border-transparent"
        }`}
      >
        <Link
          href={`/${locale}`}
          onClick={() => setIsOpen(false)}
          className="text-white text-lg font-bold py-2"
        >
          {dict.Navigation.home}
        </Link>

        <Link
          href={targetPath}
          onClick={() => setIsOpen(false)}
          className="text-white text-lg font-bold py-2"
        >
          {dict.Navigation.products}
        </Link>

        <div className="flex flex-col -mt-2 pl-6 gap-0.5">
          {featureLinks.map((link) => (
            <Link
              key={link.targetId}
              // 5. Construimos el href dinámico con la ruta traducida y el hash
              href={`${targetPath}#${link.targetId.replace("#", "")}`}
              onClick={(e) => handleScroll(e, link.targetId)}
              className="text-white/80 hover:text-white text-sm py-1 "
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href={getLocalizedRoute(locale, "about")}
          onClick={() => setIsOpen(false)}
          className="text-white text-lg font-bold py-2"
        >
          {dict.Navigation.aboutUs}
        </Link>
      </div>
    </div>
  );
}

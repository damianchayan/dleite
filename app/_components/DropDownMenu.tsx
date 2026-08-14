"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface DropdownItem {
  label: string;
  targetId: string;
}

interface DropdownProps {
  title: string;
  id: string; // ej: "products"
  items: DropdownItem[];
  styles?: string;
}

export default function Dropdown({ title, items, styles, id }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname(); // Ahora devuelve cosas como "/es/products" o "/gl"

  // 1. Extraemos el idioma actual de la ruta (si existe)
  const pathSegments = pathname.split("/").filter(Boolean);
  const supportedLocales = ["en", "es", "gl"];
  const currentLocale = supportedLocales.includes(pathSegments[0])
    ? `/${pathSegments[0]}`
    : "";

  const targetPath = `${currentLocale}/${id}`;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string,
  ) => {
    setIsOpen(false);

    if (pathname === targetPath) {
      e.preventDefault();

      const cleanHash = targetId.replace("#", "");
      const element = document.getElementById(cleanHash);

      if (element) {
        element.scrollIntoView({ behavior: "smooth" });

        // Force the URL to be perfectly clean in the browser history
        window.history.replaceState(null, "", `${targetPath}#${cleanHash}`);
      }
    }
  };

  return (
    <div className="relative z-100 content-center w-max" ref={dropdownRef}>
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className={styles}
      >
        {title}
        <svg
          className={`hidden md:inline w-4 h-4 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={4}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute left-0 z-50 flex flex-col py-2 mt-1 bg-white border border-gray-100 rounded-lg shadow-lg min-w-40 top-full">
          {items.map((item) => {
            const cleanHash = item.targetId.replace("#", "");

            return (
              <Link
                key={item.targetId}
                href={`${targetPath}#${cleanHash}`}
                onClick={(e) => handleScroll(e, item.targetId)}
                className="px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100"
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

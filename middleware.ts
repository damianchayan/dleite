import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

const locales = ["en", "es", "gl"];
const defaultLocale = "en"; // Inglés por defecto

// Diccionario inverso para el middleware: URL visible -> Carpeta real
const pathTranslations: Record<string, Record<string, string>> = {
  es: {
    "/nosotros": "/about",
    "/productos": "/products", // <-- Añadido
  },
  gl: {
    "/sobre-nos": "/about",
    "/produtos": "/products", // <-- Añadido
  },
};

function getLocale(request: NextRequest): string {
  const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value;
  if (cookieLocale && locales.includes(cookieLocale)) return cookieLocale;
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages();
  return matchLocale(languages, locales, defaultLocale);
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.includes(".") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api")
  ) {
    return;
  }

  const currentLocale = locales.find(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  // 1. Si no hay idioma en la URL, redirigir añadiendo el detectado o el default (en)
  if (!currentLocale) {
    const locale = getLocale(request);
    request.nextUrl.pathname = `/${locale}${pathname}`;
    return NextResponse.redirect(request.nextUrl);
  }

  // 2. Si la URL está en español o gallego, reescribir a las carpetas base (en inglés)
  const pathWithoutLocale = pathname.replace(`/${currentLocale}`, "") || "/";
  const internalPath = pathTranslations[currentLocale]?.[pathWithoutLocale];

  if (internalPath) {
    return NextResponse.rewrite(
      new URL(`/${currentLocale}${internalPath}`, request.url),
    );
  }

  return NextResponse.next();
}

type RouteKeys = "home" | "about" | "products";

export const routeTranslations: Record<string, Record<RouteKeys, string>> = {
  en: { home: "/", about: "/about", products: "/products" },
  es: { home: "/", about: "/nosotros", products: "/productos" },
  gl: { home: "/", about: "/sobre-nos", products: "/produtos" },
};

export function getLocalizedRoute(locale: string, key: RouteKeys) {
  const path = routeTranslations[locale]?.[key] || "/";
  return path === "/" ? `/${locale}` : `/${locale}${path}`;
}

import "server-only";

import esDict from "../dictionaries/es.json";

// TypeScript lee el archivo y crea la interfaz completa por ti
export type Dictionary = typeof esDict;

const dictionaries = {
  en: () => import("@/dictionaries/en.json").then((module) => module.default),
  es: () => import("@/dictionaries/es.json").then((module) => module.default),
  gl: () => import("@/dictionaries/gl.json").then((module) => module.default),
};

export const getDictionary = async (locale: "en" | "es" | "gl") =>
  dictionaries[locale]() as Promise<Dictionary>;

import { Dictionary } from "@/lib/getDictionaries";

export interface MenuItem {
  name: string;
  desc: string;
  price: string;
}

export interface MenuSubcategory {
  title: string;
  items: MenuItem[];
}

export const buildTartasData = (dict: Dictionary): MenuSubcategory[] => {
  const t = dict.Menu.tartas;

  return [
    {
      title: t.tartas_de_queso.title,
      items: [
        { ...t.tartas_de_queso.tradicional, price: "6€ / 20€ / 30€" },
        { ...t.tartas_de_queso.oreo, price: "7€ / 22€ / 35€" },
        { ...t.tartas_de_queso.cabrona, price: "7€ / 23€ / 36€" },
        { ...t.tartas_de_queso.kinder_lotus, price: "8€ / 25€ / 38€" },
        { ...t.tartas_de_queso.pistacho, price: "10€ / 30€ / 42€" },
      ],
    },
    {
      title: t.tartas_de_corte.title,
      items: [
        { ...t.tartas_de_corte.fresas, price: "25€ / 38€ / 70€" },
        { ...t.tartas_de_corte.frutas, price: "25€ / 38€ / 70€" },
        { ...t.tartas_de_corte.ferrero_kinder, price: "25€ / 35€ / 65€" },
        { ...t.tartas_de_corte.pistacho, price: "28€ / 40€ / 78€" },
        { ...t.tartas_de_corte.red_velvet, price: "38.50€" },
        { ...t.tartas_de_corte.carrot_cake, price: "38.50€" },
      ],
    },
    {
      title: t.tarta_semifria.title,
      items: [
        { ...t.tarta_semifria.tres_chocolates, price: "25€ / 40€" },
        { ...t.tarta_semifria.semifrio_mix, price: "22€ / 40€" },
        { ...t.tarta_semifria.semifrio_pistacho, price: "28€ / 45€" },
      ],
    },
    {
      title: t.tartaletas.title,
      items: [
        { ...t.tartaletas.lemon_pie, price: "22€" },
        { ...t.tartaletas.frutos_rojos, price: "22€" },
        { ...t.tartaletas.choco_naranja, price: "25€" },
        { ...t.tartaletas.banoffee, price: "25€" },
      ],
    },
  ];
};

export const buildEmpanadasData = (dict: Dictionary): MenuSubcategory[] => {
  const e = dict.Menu.empanadas;

  return [
    {
      title: e.nuestras_empanadas.title,
      items: [
        { ...e.nuestras_empanadas.atun, price: "25€ / 40€" },
        { ...e.nuestras_empanadas.carne, price: "25€ / 40€" },
        { ...e.nuestras_empanadas.mejillon, price: "26.50€ / 42€" },
        { ...e.nuestras_empanadas.setas, price: "26.50€ / 42€" },
      ],
    },
  ];
};

export const buildOtrosData = (dict: Dictionary): MenuSubcategory[] => {
  const o = dict.Menu.otros;

  return [
    {
      title: o.quiche.title,
      items: [
        { ...o.quiche.salmon, price: "22€" },
        { ...o.quiche.bacon, price: "20€" },
      ],
    },
    {
      title: o.dulces.title,
      items: [
        { ...o.dulces.rosca, price: "26€ / 20€" },
        { ...o.dulces.flan, price: "12€" },
        { ...o.dulces.milhojas, price: "3€" },
        { ...o.dulces.canitas, price: "1.80€" },
      ],
    },
    {
      title: o.brownie.title,
      items: [
        { ...o.brownie.tradicional, price: "25€" },
        { ...o.brownie.nutella, price: "25€" },
      ],
    },
    {
      title: o.cookies.title,
      items: [
        { ...o.cookies.tiernitas, price: "4€" },
        { ...o.cookies.pepitas, price: "2€" },
        { ...o.cookies.rellenas, price: "3€" },
      ],
    },
  ];
};

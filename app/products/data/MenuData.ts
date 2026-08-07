// Tipos para tu página en Next.js
export type ProductItem = {
  name: string;
  price: string;
  description: string; // Ahora todos tienen una descripción
};

export type SubCategory = {
  title: string;
  items: ProductItem[];
};

export type SuperCategory = {
  id: string;
  title: string;
  subcategories: SubCategory[];
};

// El objeto de datos estructurado con descripciones añadidas
export const menuData: SuperCategory[] = [
  {
    id: "tartas",
    title: "Tartas",
    subcategories: [
      {
        title: "Tartas de Queso",
        items: [
          {
            name: "Tradicional",
            price: "6€ / 20€ / 30€",
            description:
              "Nuestra clásica tarta de queso horneada, extracremosa y con base de galleta artesanal.",
          },
          {
            name: "Oreo, Dino y cacahuete",
            price: "7€ / 22€ / 35€",
            description:
              "Una explosión de sabor con galletas Oreo, Filipinos y un toque irresistible de crema de cacahuete.",
          },
          {
            name: "Cabrona",
            price: "7€ / 23€ / 36€",
            description:
              "Para los más atrevidos: tarta de queso intenso de cabra que no te dejará indiferente.",
          },
          {
            name: "Kinder bueno y Lotus",
            price: "8€ / 25€ / 38€",
            description:
              "La combinación perfecta entre el dulzor del Kinder y el toque caramelizado de la galleta Lotus.",
          },
          {
            name: "Pistacho",
            price: "10€ / 30€ / 42€",
            description:
              "Elaborada con auténtica crema de pistacho tostado 100% natural. Un lujo para el paladar.",
          },
        ],
      },
      {
        title: "Tartas de Corte",
        items: [
          {
            name: "Fresas con Nata",
            price: "25€ / 38€ / 70€",
            description:
              "Bizcocho esponjoso calado en almíbar, relleno de nata montada fresca y fresas de temporada.",
          },
          {
            name: "Frutas variadas",
            price: "25€ / 38€ / 70€",
            description:
              "Un clásico refrescante y colorido, coronado con una selección de las mejores frutas frescas.",
          },
          {
            name: "Ferrero o Kinder",
            price: "25€ / 35€ / 65€",
            description:
              "Para los amantes del chocolate: elige entre la intensidad de avellana del Ferrero o la suavidad del Kinder.",
          },
          {
            name: "Pistacho",
            price: "28€ / 40€ / 78€",
            description:
              "Capas de bizcocho suave intercaladas con una intensa y sedosa crema de pistacho.",
          },
          {
            name: "Red velvet",
            price: "38.50€",
            description:
              "El icónico bizcocho aterciopelado de cacao rojo, contrastado con nuestro suave frosting de queso crema.",
          },
          {
            name: "Carrot cake",
            price: "38.50€",
            description:
              "Bizcocho húmedo de zanahoria, especias cálidas, nueces picadas y una cobertura generosa de frosting de queso.",
          },
        ],
      },
      {
        title: "Tarta Semifría",
        items: [
          {
            name: "Tres Chocolates",
            price: "25€ / 40€",
            description:
              "Tres capas perfectamente definidas de chocolate negro, con leche y blanco sobre base crujiente.",
          },
          {
            name: "Semifrío kinder, oreo o lotus",
            price: "22€ / 40€",
            description:
              "Textura tipo mousse helada, a elegir con tus chocolatinas o galletas favoritas. Ideal para refrescar.",
          },
          {
            name: "Semifrío de Pistacho",
            price: "28€ / 45€",
            description:
              "La versión más ligera y fresca de nuestro postre estrella, con todo el sabor del pistacho natural.",
          },
        ],
      },
      {
        title: "Tartaletas",
        items: [
          {
            name: "Lemon pie",
            price: "22€",
            description:
              "Masa quebrada crujiente rellena de una ácida crema de limón y coronada con merengue italiano tostado.",
          },
          {
            name: "Frutos rojos",
            price: "22€",
            description:
              "Base de masa dulce con crema pastelera suave y una corona rebosante de frutos del bosque frescos.",
          },
          {
            name: "Choco-naranja",
            price: "25€",
            description:
              "La clásica y elegante combinación de ganache de chocolate negro intenso con mermelada de naranja amarga.",
          },
          {
            name: "Banoffee",
            price: "25€",
            description:
              "Base de galleta triturada, dulce de leche, rodajas de plátano fresco y abundante nata montada.",
          },
        ],
      },
    ],
  },
  {
    id: "empanadas",
    title: "Empanadas",
    subcategories: [
      {
        title: "Nuestras Empanadas",
        items: [
          {
            name: "Atún",
            price: "25€ / 40€",
            description:
              "Elaborada con atún de primera calidad, pimientos asados y sofrito casero. *Opción disponible con masa de maíz.",
          },
          {
            name: "Carne",
            price: "25€ / 40€",
            description:
              "Relleno jugoso de carne picada estofada a fuego lento con especias tradicionales. *Opción disponible con masa de maíz.",
          },
          {
            name: "Mejillón",
            price: "26.50€ / 42€",
            description:
              "Sabor a mar en cada bocado, con mejillones seleccionados y un sofrito con un toque de pimentón. *Opción disponible con masa de maíz.",
          },
          {
            name: "Setas",
            price: "26.50€ / 42€",
            description:
              "Una opción vegetariana deliciosa con una mezcla de setas de temporada y cebolla pochada. *Opción disponible con masa de maíz.",
          },
        ],
      },
    ],
  },
  {
    id: "otros",
    title: "Otros",
    subcategories: [
      {
        title: "Quiche Lorraine",
        items: [
          {
            name: "Salmón con queso de cabra",
            price: "22€",
            description:
              "Tarta salada francesa con crema, huevos, trozos de salmón ahumado y medallones de queso de cabra.",
          },
          {
            name: "Bacon con queso",
            price: "20€",
            description:
              "La receta original de quiche con panceta ahumada crujiente y abundante queso fundido.",
          },
        ],
      },
      {
        title: "Dulces y Postres",
        items: [
          {
            name: "Rosca/Larpeira",
            price: "26€ / 20€",
            description:
              "Masa dulce y esponjosa, empapada en un almíbar ligero y decorada con crema y azúcar escarchado.",
          },
          {
            name: "Flan Parisien",
            price: "12€",
            description:
              "Tarta de crema pastelera horneada sobre hojaldre, con una costra tostada y un interior denso y vainillado.",
          },
          {
            name: "Milhojas Individuales",
            price: "3€",
            description:
              "Capas crujientes y caramelizadas de hojaldre intercaladas con nuestra mejor crema pastelera.",
          },
          {
            name: "Cañitas Rellenas",
            price: "1.80€",
            description:
              "Tradicional masa frita crujiente en forma de tubo, rellena al momento de crema o nata.",
          },
        ],
      },
      {
        title: "Brownie",
        items: [
          {
            name: "Brownie Tradicional",
            price: "25€",
            description:
              "Denso, oscuro y lleno de chocolate por dentro, con esa característica capa crujiente por fuera. (Topping a elegir por 3€ extra).",
          },
          {
            name: "Brownie Nutella",
            price: "25€",
            description:
              "Nuestro brownie clásico, elevado a otro nivel con un núcleo fundido de Nutella. (Topping a elegir por 3€ extra).",
          },
        ],
      },
      {
        title: "Cookies",
        items: [
          {
            name: "Tiernitas (6 unid)",
            price: "4€",
            description:
              "Pack de galletas suaves y abizcochadas, perfectas para mojar en la leche.",
          },
          {
            name: "Cookie pepitas de chocolate",
            price: "2€",
            description:
              "La clásica galleta americana: bordes crujientes, centro tierno y grandes pepitas de chocolate.",
          },
          {
            name: "Cookies rellenas",
            price: "3€",
            description:
              "Galletas de tamaño XL con un corazón líquido y sorprendente que se funde en la boca.",
          },
        ],
      },
    ],
  },
];

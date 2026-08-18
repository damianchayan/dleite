"use client";

import { useRef } from "react";
import { Card } from "./Card";

interface CarouselItem {
  name: string;
  desc: string;
  price: string;
}

interface CardCarouselProps {
  items: CarouselItem[];
  titleSection?: string;
}

export default function Carousel({ items, titleSection }: CardCarouselProps) {
  const carouselRef = useRef<HTMLUListElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = direction === "left" ? -320 : 320;
      carouselRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full py-8 bg-white dark:bg-white">
      {/* Título centrado (o a la izquierda si lo prefieres) */}
      {titleSection && (
        <h2 className="text-3xl font-bold text-dtext mb-6  xl:px-48  md:px-24 px-12  text-center md:text-left">
          {titleSection}
        </h2>
      )}

      {/* 1. CONTENEDOR RELATIVO: Mantiene a las flechas pegadas a los lados del carrusel */}
      <div className="relative w-full group">
        {/* Flecha Izquierda */}
        <button
          onClick={() => scroll("left")}
          className="absolute hidden  left-2 md:left-6 top-1/2 -translate-y-1/2 z-10 sm:flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 backdrop-blur-sm text-dtext shadow-lg border border-gray-200 hover:bg-dleite hover:text-white transition-all duration-200"
          aria-label="Desplazar a la izquierda"
        >
          <svg
            className="w-6 h-6 md:w-8 md:h-8 pr-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Carrusel */}
        <ul
          ref={carouselRef}
          className="flex overflow-x-auto gap-6 px-15 md:px-12 pb-6 pt-2 snap-x snap-mandatory scrollbar-none scrollbar-thumb-dleite"
        >
          {items.map((item, index) => (
            <div key={index} className="snap-center shrink-0 w-70 md:w-[320px]">
              <Card className="border-0 pb-5 shadow-none bg-dleite/0 h-full">
                <Card.Image src="/cinamon.jpg" alt={item.name} />
                <Card.Title>{item.name}</Card.Title>
                <Card.Description>{item.desc}</Card.Description>
              </Card>
            </div>
          ))}
        </ul>

        {/* Flecha Derecha */}
        <button
          onClick={() => scroll("right")}
          className="absolute hidden right-2 md:right-6 top-1/2 -translate-y-1/2 z-10 sm:flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 backdrop-blur-sm text-dtext shadow-lg border border-gray-200 hover:bg-dleite hover:text-white transition-all duration-200"
          aria-label="Desplazar a la derecha"
        >
          <svg
            className="w-6 h-6 md:w-8 md:h-8 pl-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

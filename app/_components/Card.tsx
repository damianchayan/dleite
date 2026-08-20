import Image from "next/image";
import { ReactNode } from "react";

interface CardRootProps {
  children: ReactNode;
  className?: string;
}

// 1. Contenedor Principal (Root)
function CardRoot({ children, className = "" }: CardRootProps) {
  // hover:-translate-y-1 hover:shadow-xl
  const defaultStyle =
    "flex flex-col justify-center  items-center rounded-xl border border-dtext shadow-lg transition-all duration-300 max-w-90 overflow-hidden";

  return <li className={`${defaultStyle} ${className}`}>{children}</li>;
}

// 2. Subcomponente para el Título
function CardTitle({ children }: { children: ReactNode }) {
  return <h3 className="text-xl font-semibold text-dtext py-3">{children}</h3>;
}

// 3. Subcomponente para la Descripción
function CardDescription({ children }: { children: ReactNode }) {
  return <p className="text-gray-700   px-4 text-sm">{children}</p>;
}

// 4. Subcomponente para el Precio
function CardPrice({ children }: { children: ReactNode }) {
  return (
    <p className="font-extrabold dark:text-gray-950 p-3 text-lg">{children}</p>
  );
}

// 5. Subcomponente para la Imagen
function CardImage({ src, alt = "Card Image" }: { src: string; alt?: string }) {
  return (
    // hover:-translate-y-1 hover:shadow-xl
    <Image
      className="border border-dtext rounded-full m-3 p-0.5  transition-all duration-300"
      src={src}
      alt={alt}
      width={250}
      height={250}
    />
  );
}

// 6. Ensamblamos el componente compuesto
export const Card = Object.assign(CardRoot, {
  Title: CardTitle,
  Description: CardDescription,
  Price: CardPrice,
  Image: CardImage,
});

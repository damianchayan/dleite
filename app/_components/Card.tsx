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
  return <h1 className="text-xl font-semibold text-dtext py-3">{children}</h1>;
}

// 3. Subcomponente para la Descripción
function CardDescription({ children }: { children: ReactNode }) {
  return (
    <h3 className="text-gray-950 dark:text-gray-300 px-4 text-sm">
      {children}
    </h3>
  );
}

// 4. Subcomponente para el Precio
function CardPrice({ children }: { children: ReactNode }) {
  return (
    <h2 className="font-extrabold dark:text-white p-3 text-lg">{children}</h2>
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

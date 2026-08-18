import { ReactNode } from "react";

interface InfoRootProps {
  children: ReactNode;
  className?: string;
}

// 1. Contenedor Principal (Root)
function InfoRoot({ children, className = "" }: InfoRootProps) {
  return (
    <div
      className={`flex flex-col md:flex-row gap-8 w-full max-w-6xl mx-auto bg-white dark:bg-white  p-6 md:p-10 rounded-2xlborder ${className}`}
    >
      {children}
    </div>
  );
}

// 2. Contenedor para el texto y botones (suele ir a un lado)
function InfoDetails({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex flex-col gap-5 w-full md:w-1/2 ${className}`}>
      {children}
    </div>
  );
}

// 3. Título de la sección
function InfoTitle({ children }: { children: ReactNode }) {
  return <h2 className="text-3xl font-bold text-dtext mb-2">{children}</h2>;
}

// 4. Dirección con icono
function InfoAddress({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-start gap-3 text-gray-700 ">
      <svg
        className="w-6 h-6 text-dleite shrink-0 mt-0.5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
      <span className="text-lg leading-relaxed">{children}</span>
    </div>
  );
}

// 5. Teléfono con icono
function InfoPhone({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-3 text-gray-700 ">
      <svg
        className="w-6 h-6 text-dleite shrink-0"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
      <span className="text-lg font-medium tracking-wide">{children}</span>
    </div>
  );
}

// 6. Contenedor para los botones
function InfoActions({ children }: { children: ReactNode }) {
  return <div className="flex md:flex-col w-fit gap-4 mt-4">{children}</div>;
}

// 7. Contenedor para el Mapa (ocupa la otra mitad en escritorio)
function InfoMap({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`w-full md:w-1/2 min-h-75 bg-gray-100 rounded-xl overflow-hidden border border-gray-200 relative shadow-inner ${className}`}
    >
      {children}
    </div>
  );
}

// Ensamblamos el componente compuesto
export const Info = Object.assign(InfoRoot, {
  Details: InfoDetails,
  Title: InfoTitle,
  Address: InfoAddress,
  Phone: InfoPhone,
  Actions: InfoActions,
  Map: InfoMap,
});

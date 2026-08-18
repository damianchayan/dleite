import Link from "next/link";

interface ButtonProps {
  to: string;
  message: string;
  className?: string;
}

export default function Button({
  to,
  message,
  className = "bg-dleite",
}: ButtonProps) {
  return (
    <Link
      href={to}
      className={`inline-flex items-center justify-center px-6 py-3  text-white font-bold hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 rounded-lg shadow-md hover:bg-opacity-90 transition-all duration-200 ${className}`}
    >
      {message}
    </Link>
  );
}

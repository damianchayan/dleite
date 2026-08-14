import Link from "next/link";

interface ButtonProps {
  to: string;
  message: string;
}

export default function Button({ to, message }: ButtonProps) {
  return (
    <Link
      href={to}
      className="inline-flex items-center justify-center px-6 py-3 bg-dleite text-white font-bold rounded-lg shadow-md hover:bg-opacity-90 transition-all duration-200"
    >
      {message}
    </Link>
  );
}

import Image from "next/image";

interface CardProps {
  title: string;
  description: string;
  price: string;
}

export default function Card({ title, description, price }: CardProps) {
  const cardStyle = ` flex flex-col justify-center items-center   rounded-xl border border-dtext shadow-lg b-dtext hover:-translate-y-1 hover:shadow-xl transition-all duration-300 max-w-90`;
  const tituloTarjeta = "text-xl font-semibold text-dtext py-3 ";
  const desTarjeta = "text-black dark:text-white px-4 text-sm";
  const priceStyle = `font-extrabold text-white p-3`;
  return (
    <li className={cardStyle}>
      <h1 className={tituloTarjeta}>{title}</h1>
      <h3 className={desTarjeta}>{description}</h3>
      <h2 className={priceStyle}>{price}</h2>
      <Image
        className="border border-dtext rounded-full m-3 p-0.5 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
        src={"/cinamon.jpg"}
        alt="Quiche Image"
        width={250}
        height={250}
      />
    </li>
  );
}

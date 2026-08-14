import Image from "next/image";
import Button from "../_components/Button";
import Carousel from "../_components/Carousel";
import { getDictionary } from "@/lib/getDictionaries";
import { buildTartasData } from "./products/data/MenuData";
import { getLocalizedRoute } from "@/config/routes";

export default async function Page({
  params,
}: {
  params: Promise<{ locale: "en" | "es" | "gl" }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const data = buildTartasData(dict);
  const itemsParaCarrusel = data.flatMap((sub) => sub.items); //TODO aleatorizar?
  return (
    <>
      <div className="min-h-11/12  relative ">
        <Image
          loading="eager"
          src={"/tarta3.jpg"}
          alt="Full screen background"
          fill
          sizes="100vw"
          className="object-cover  -z-20 "
        ></Image>
      </div>
      <div className=" flex min-h-15  lg:text-5xl md:text-3xl  text-2xl font-bold justify-center items-center  w-full  bg-dleite text-dtext  shadow-2xl tracking-wider italic ">
        Donde todo esta muuuy rico
      </div>
      <section id="carousel" className="flex flex-col items-center ">
        <Carousel titleSection="Nuestros Productos" items={itemsParaCarrusel} />
        <Button
          to={getLocalizedRoute(locale, "products")}
          message="Ve todos nuestros productos"
        />
      </section>

      <div>Tartas</div>

      <div>Visitanos</div>
      <Button to="/products" message="Hola" />
      <h1></h1>
    </>
  );
}

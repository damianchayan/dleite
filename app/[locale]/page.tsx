import Image from "next/image";
import Button from "../_components/Button";
import Carousel from "../_components/Carousel";
import { getDictionary } from "@/lib/getDictionaries";
import { buildTartasData } from "./products/data/MenuData";
import { getLocalizedRoute } from "@/config/routes";
import Visitanos from "../_components/Visitanos";
import Tarta from "../_components/Tarta";
import BgImage from "../../public/tarta3.jpg";

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
          src={BgImage}
          alt="Full screen background"
          fill
          sizes="100vw"
          className="object-cover  -z-20 "
          placeholder="blur"
          priority
        ></Image>
      </div>
      <h1 className=" flex min-h-15  lg:text-5xl md:text-3xl  text-2xl font-bold justify-center items-center  w-full  bg-dleite text-dtext  shadow-2xl tracking-wider italic z-10 ">
        {dict.UI.slogan}
      </h1>
      <section
        id={dict.UI.sliderId}
        aria-label={dict.UI.sliderTitle}
        className="flex flex-col items-center"
      >
        <Carousel
          titleSection={dict.UI.sliderTitle}
          items={itemsParaCarrusel}
        />
        <Button
          to={getLocalizedRoute(locale, "products")}
          message={dict.UI.sliderButton}
          className="bg-dleite border-2 border-dtext "
        />
      </section>

      <Tarta id={dict.UI.cakeId} dict={dict} locale={locale} />

      <Visitanos id={dict.UI.visitUsId} dict={dict} />
    </>
  );
}

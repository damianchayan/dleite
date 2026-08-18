import { Dictionary } from "@/lib/getDictionaries";
import Image from "next/image";
import Button from "./Button";
import { getLocalizedRoute } from "@/config/routes";

interface TartaProps {
  id: string;
  locale: string;
  dict: Dictionary;
}

export default function Tarta({ id, locale, dict }: TartaProps) {
  return (
    <section
      id={id}
      className="bg-dleite  flex  xl:px-48  md:px-24 px-12 flex-col py-10 md:flex-row md:gap-8 h-fit w-full mt-10 md:items-start"
    >
      <div className=" md:w-1/2 m-10 flex gap-4 flex-col ">
        <h2 className="text-3xl  font-bold text-center text-white tracking-wide">
          {dict.UI.cakeTitle}
        </h2>

        <h3 className="text-lg italic text-center text-gray-400">
          {dict.UI.cakeDescription}
        </h3>
        <Button
          to={getLocalizedRoute(locale, "products")}
          message={dict.UI.cakeButton}
          className="bg-dtext mt-5 self-center "
        />
      </div>
      <Image
        className="rounded-xl border border-dtext shadow-lg self-center    w-75 h-75 md:w-100 md:h-100"
        src="/goodlookingCake.jpg"
        alt="Good looking cake"
        width={250}
        height={250}
      ></Image>
    </section>
  );
}

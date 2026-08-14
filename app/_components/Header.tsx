import Image from "next/image";
import Link from "next/link";
import Dropdown from "./DropDownMenu";
import MobileMenu from "./MobileMenu";
import { Dictionary } from "@/lib/getDictionaries";
import { formatId } from "@/lib/formatters";
import { getLocalizedRoute } from "@/config/routes";

interface HeaderProps {
  dict: Dictionary;
  locale: "en" | "es" | "gl"; // Aquí recibimos el diccionario desde el RootLayout
}

function Header({ dict, locale }: HeaderProps) {
  const linkStyle =
    "text-md md:text-lg text-white hover:text-dtext font-bold  content-center tracking-wide transition-colors md:xl";

  const featureLinks = [
    {
      label: dict.Menu.tartas.title,
      targetId: formatId(dict.Menu.tartas.title),
    },
    {
      label: dict.Menu.empanadas.title,
      targetId: formatId(dict.Menu.empanadas.title),
    },
    { label: dict.Menu.otros.title, targetId: formatId(dict.Menu.otros.title) },
  ];

  return (
    <header className="shrink-0 z-50 bg-dleite flex  justify-between  gap-20 border-b border-green-900 min-h-15 ">
      <h1 className="text-lg font-semibold justify ">
        <Link
          className="absolute w-24 h-24 rounded-full overflow-visible border-4 border-white object-cover shadow-md hover:border-dtext"
          href={`/${locale}`}
        >
          <Image
            className="rounded-full "
            loading="eager"
            src={"/icon.jpg"}
            alt="Logo icon if the web"
            width={300}
            height={300}
          />
        </Link>
      </h1>
      <div className="hidden md:flex gap-5 content-center  justify-end  px-5 md:px-20 transition-all">
        <Link className={linkStyle} href={getLocalizedRoute(locale, "home")}>
          {dict.Navigation.home}
        </Link>
        <Dropdown
          id={formatId(dict.Navigation.products)}
          title={dict.Navigation.products}
          items={featureLinks}
          styles={linkStyle}
        />
        <Link className={linkStyle} href={getLocalizedRoute(locale, "about")}>
          {dict.Navigation.aboutUs}
        </Link>
      </div>
      <MobileMenu featureLinks={featureLinks} dict={dict} locale={locale} />
    </header>
  );
}

export default Header;

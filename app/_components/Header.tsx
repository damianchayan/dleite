import Image from "next/image";
import Link from "next/link";
import Dropdown from "./DropDownMenu";
import MobileMenu from "./MobileMenu";

function Header() {
  const linkStyle =
    "text-md md:text-lg text-white hover:text-dtext font-bold  content-center tracking-wide transition-colors md:xl";

  const featureLinks = [
    { label: "Tartas", targetId: "tartas" },
    { label: "Empanadas", targetId: "empanadas" },
    { label: "Otros", targetId: "otros" },
  ];

  return (
    <header className="shrink-0 z-50 bg-dleite flex  justify-between  gap-20 border-b border-green-900 min-h-15 ">
      <h1 className="text-lg font-semibold justify ">
        <Link
          className="absolute w-24 h-24 rounded-full overflow-visible border-4 border-white object-cover shadow-md hover:border-dtext"
          href={"/"}
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
        <Link className={linkStyle} href={"/"}>
          Home
        </Link>
        <Dropdown
          id="products"
          title="Products"
          items={featureLinks}
          styles={linkStyle}
        />
        <Link className={linkStyle} href={"/about"}>
          About Us
        </Link>
      </div>
      <MobileMenu featureLinks={featureLinks} />
    </header>
  );
}

export default Header;

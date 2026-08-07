import Image from "next/image";
import Link from "next/link";
import Dropdown from "./DropDownMenu";

function Header() {
  const linkStyle =
    "text-xl text-white hover:text-dtext font-bold  content-center tracking-wide transition-colors";

  const featureLinks = [
    { label: "Tartas", targetId: "tartas" },
    { label: "Empanadas", targetId: "empanadas" },
    { label: "Otros", targetId: "otros" },
  ];

  return (
    <header className="fixed left-0 top-0 z-50 bg-dleite flex w-full justify-between gap-8 border-b border-green-900 min-h-15 ">
      <h1 className="text-lg font-semibold justify ">
        <Link
          className="absolute w-24 h-24 rounded-full border-4 border-white object-cover shadow-md"
          href={"/"}
        >
          <Image
            className=""
            loading="eager"
            src={"/icon.jpg"}
            alt="Logo icon if the web"
            width={300}
            height={300}
            style={{
              borderRadius: "50%",
              border: "1px solid #fff",
              width: "100px",
              height: "auto",
            }}
          />
        </Link>
      </h1>
      <div className="flex gap-5 content-center px-20">
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

        <Link className={linkStyle} href={"/contact"}>
          Contact Us
        </Link>
      </div>
    </header>
  );
}

export default Header;

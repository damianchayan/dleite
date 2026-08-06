import Image from "next/image";
import Link from "next/link";

function Header() {
  const linkStyle =
    "text-xl text-neutral-400 hover:text-white font-bold  content-center tracking-wide";
  return (
    <header className="sticky top-0 z-50 bg-[#254632] flex  justify-between gap-8 border-b border-green-900 min-h-15 mb-10">
      <h1 className="text-lg font-semibold justify ">
        <Link
          className="absolute w-24 h-24 rounded-full border-4 border-white object-cover shadow-md"
          href={"/"}
        >
          <Image
            className=""
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
        <Link className={linkStyle} href={"/products"}>
          Products
        </Link>
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

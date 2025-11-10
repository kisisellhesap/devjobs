import Image from "next/image";
import ThemeChanger from "./toggleBtn";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-between items-center content mt-11 ">
      <Link href={"/"} className="relative w-[115px] h-8">
        <Image
          src={"/assets/desktop/logo.svg"}
          alt=""
          fill
          className="object-contain"
        />
      </Link>
      <ThemeChanger />
    </header>
  );
};

export default Header;

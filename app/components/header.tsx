import Image from "next/image";
import ThemeChanger from "./toggleBtn";

const Header = () => {
  return (
    <header className="flex justify-between items-center content mt-11 ">
      <div className="relative w-[115px] h-8">
        <Image
          src={"/assets/desktop/logo.svg"}
          alt=""
          fill
          className="object-contain"
        />
      </div>
      <ThemeChanger />
    </header>
  );
};

export default Header;

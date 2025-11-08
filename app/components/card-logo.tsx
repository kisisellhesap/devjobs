import Image from "next/image";

const Logo = () => {
  return (
    <div className="relative w-10 h-10">
      <Image
        src={"/assets/logos/scoot.svg"}
        alt={""}
        className="rounded-md object-contain"
        fill
      />
    </div>
  );
};

export default Logo;

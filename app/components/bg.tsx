import Image from "next/image";

const Bg = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-40 -z-10">
      <div className="relative w-full h-40">
        <Image
          src={"/assets/desktop/bg-pattern-header.svg"}
          alt="bg-pattern-header"
          fill
        />
      </div>
    </div>
  );
};

export default Bg;

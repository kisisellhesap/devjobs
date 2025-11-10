import Image from "next/image";

interface LogoProps {
  src: string;
  company: string;
}
const Logo = ({ src, company }: LogoProps) => {
  return (
    <div className="relative w-10 h-10">
      <Image
        src={src}
        alt={company}
        className="rounded-md object-contain"
        fill
      />
    </div>
  );
};

export default Logo;

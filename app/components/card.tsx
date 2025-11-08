import Link from "next/link";
import Logo from "./card-logo";

const Card = () => {
  return (
    <div className="px-8  bg-Neutral-0 dark:bg-Slate-900 rounded-md max-w-[350px]">
      <div className="flex flex-col gap-6 relative bottom-6">
        <div className="relative w-[50px] h-[50px] rounded-2xl flex items-center justify-center bg-red-400">
          <Logo />
        </div>

        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <p className="text-Slate-500 text-preset-4-regular">
              20h ago <span>Part Time</span>
            </p>

            <Link
              href={"/jobs/1"}
              className="text-Slate-900 dark:text-Neutral-0 hover:text-Slate-500 text-preset-3 cursor-pointer line-clamp-1"
            >
              Haskell and PureScript Dev
            </Link>

            <span className="text-Slate-500 text-preset-4-regular">Blogr</span>
          </div>

          <span className="text-Indigo-500 text-preset-5">United States</span>
        </div>
      </div>
    </div>
  );
};

export default Card;

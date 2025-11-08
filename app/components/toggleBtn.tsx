"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { IoSunny } from "react-icons/io5";
import { AiFillMoon } from "react-icons/ai";

const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <div
      className="text-cyan-500 flex items-center gap-4"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <IoSunny className="text-Neutral-0 text-2xl" />
      <div className="w-12 h-6 bg-Neutral-0 p-1.5 rounded-xl cursor-pointer">
        <div
          className={`w-3.5 h-3.5 bg-Indigo-500 rounded-full ${
            theme === "dark" ? "translate-x-[22px]" : "translate-x-0"
          }`}
        ></div>
      </div>
      <AiFillMoon className="text-Neutral-0 text-2xl" />
    </div>
  );
};
export default ThemeChanger;

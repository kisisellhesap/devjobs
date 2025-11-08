"use client";
import Input from "./input";
import { FiSearch } from "react-icons/fi";
import { FaLocationDot } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";
import Button from "./button";
import { useState } from "react";

const SearchBar = () => {
  const [isFullTime, setIsFullTime] = useState<boolean>(false);
  const handleFullTimeToggle = () => {
    setIsFullTime((prev) => !prev);
  };
  return (
    <div className="bg-Neutral-0 dark:bg-Slate-900 rounded-md flex items-center h-20 px-6  ">
      <div className="border-r border-Slate-900/10 dark:border-Slate-500/20  flex items-center flex-1 max-w-[450px] h-full ">
        <Input
          icon={<FiSearch className="text-Indigo-500 text-2xl" />}
          placeholder="Filter by title, companies, expertise…"
          name="search"
        />
      </div>

      <div className=" flex  h-full">
        <div className="border-r  border-Slate-900/10  dark:border-Slate-500/20 flex items-center flex-1 max-w-[300px] pl-[33px]">
          <Input
            icon={<FaLocationDot className="text-Indigo-500 text-2xl" />}
            placeholder="Filter by location…"
            name="location"
          />
        </div>

        <div className="flex gap-4 items-center pl-[33px]">
          <button
            className={`w-6 h-6 rounded-sm  cursor-pointer outline-none flex items-center justify-center ${
              isFullTime
                ? "bg-Indigo-500"
                : "bg-Slate-900/10 dark:bg-Neutral-0/10"
            }`}
            onClick={handleFullTimeToggle}
          >
            {isFullTime && <FaCheck className="text-xl text-Neutral-0" />}
          </button>
          <span className="text-preset-4 text-Slate-900 dark:text-Neutral-0">
            Full Time Only
          </span>
        </div>
      </div>

      <Button text="Search" buttonStyle={1} />
    </div>
  );
};

export default SearchBar;

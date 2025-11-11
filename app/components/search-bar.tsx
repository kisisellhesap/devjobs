"use client";
import Input from "./input";
import { FiSearch } from "react-icons/fi";
import { FaLocationDot, FaCheck } from "react-icons/fa6";
import Button from "./button";
import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import { FaFilter, FaSearch } from "react-icons/fa";
import { useGlobal } from "../context/globalContext";
import { useRouter, useSearchParams } from "next/navigation";

const SearchBar = () => {
  const [isFilter, setIsFilter] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [searchLocation, setLocation] = useState("");
  const { setFilterForm, filterForm } = useGlobal();
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const urlSearch = searchParams.get("search");
    const urlLocation = searchParams.get("location");

    setSearchInput(urlSearch || "");
    setLocation(urlLocation || "");
  }, [searchParams, setLocation, setSearchInput]);

  const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const handleChangeLocation = (e: ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
  };

  const handleFullTimeToggle = () => {
    const params = new URLSearchParams(searchParams.toString());
    const newFullTime = !filterForm.isFullTime;

    if (newFullTime) params.set("fullTime", "true");
    else params.delete("fullTime");

    router.push(`/jobs${params.toString() ? `?${params}` : ""}`);
    setFilterForm({ ...filterForm, isFullTime: newFullTime });
  };

  const handleFilterToggle = () => {
    setIsFilter((prev) => !prev);
  };

  const handleSearch = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams.toString());

    if (searchInput.trim()) params.set("search", searchInput.trim());
    else params.delete("search");

    if (searchLocation.trim()) params.set("location", searchLocation.trim());
    else params.delete("location");

    const queryString = params.toString();
    router.push(`/jobs${queryString ? `?${queryString}` : ""}`);

    setFilterForm({ ...filterForm, searchInput, searchLocation });
  };

  return (
    <div className="bg-Neutral-0 dark:bg-Slate-900 rounded-md flex items-center h-20 px-6">
      <div className="border-r border-Slate-900/10 dark:border-Slate-500/20 flex items-center flex-1 max-w-[450px] max-md:max-w-full min-w-[150px] h-full pr-5 ">
        <Input
          icon={<FiSearch className="text-Indigo-500 text-2xl max-md:hidden" />}
          placeholder="Filter by title, companies, expertise…"
          name="search"
          handleChange={handleChangeSearch}
          value={searchInput}
        />
      </div>

      {/* Filtre paneli */}
      <div
        onClick={() => setIsFilter(false)}
        className={`h-full max-md:absolute max-md:inset-0 max-md:bg-Neutral-950/40 max-md:z-10 max-md:backdrop-blur-sm max-md:items-center max-md:justify-center ${
          isFilter ? "max-md:flex" : "max-md:hidden"
        }`}
      >
        <div
          className="flex items-center h-full bg-Neutral-0 dark:bg-Slate-900 max-md:h-fit max-md:flex-col max-md:items-start max-md:rounded-md"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="border-r h-full border-Slate-900/10 max-md:border-b max-md:border-r-0 dark:border-Slate-500/20 flex items-center flex-1 max-w-[300px] min-w-[150px] pl-[33px] max-md:p-5 pr-5">
            <Input
              icon={<FaLocationDot className="text-Indigo-500 text-2xl" />}
              placeholder="Filter by location…"
              name="location"
              value={searchLocation}
              handleChange={handleChangeLocation}
            />
          </div>

          <div className="flex gap-4 items-center pl-[33px] max-md:p-5 max-md:w-full">
            <button
              className={`w-6 h-6 rounded-sm cursor-pointer outline-none flex items-center justify-center ${
                filterForm.isFullTime
                  ? "bg-Indigo-500"
                  : "bg-Slate-900/10 dark:bg-Neutral-0/10"
              }`}
              onClick={handleFullTimeToggle}
            >
              {filterForm.isFullTime && (
                <FaCheck className="text-xl text-Neutral-0" />
              )}
            </button>
            <span className="text-preset-4 text-Slate-900 dark:text-Neutral-0">
              Full Time Only
            </span>
          </div>

          <div className="ml-8 max-md:ml-0 max-md:p-4 max-md:w-full max-md:grid max-md:grid-cols-1">
            <Button text="Search" buttonStyle={1} handleSearch={handleSearch} />
          </div>
        </div>
      </div>

      {/* Mobile filtre ve arama butonları */}
      <button
        className="hidden max-md:block ml-4 cursor-pointer"
        onClick={handleFilterToggle}
      >
        <FaFilter className="dark:text-Neutral-0 text-Slate-500 text-2xl" />
      </button>

      <button
        className="hidden max-md:block ml-4 cursor-pointer rounded-md bg-Indigo-500 hover:bg-Indigo-300 p-3"
        onClick={handleSearch}
      >
        <FaSearch className="text-Neutral-0 text-xl" />
      </button>
    </div>
  );
};

export default SearchBar;

import Card from "@/app/components/card";
import Header from "@/app/components/header";
import SearchBar from "@/app/components/search-bar";

const Jobs = () => {
  return (
    <div className="flex flex-col gap-14 content">
      <SearchBar />
      <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1  gap-[30px]">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Jobs;

"use client";
import { useEffect, useState } from "react";
import { useGlobal } from "@/app/context/globalContext";
import Card from "@/app/components/card";
import SearchBar from "@/app/components/search-bar";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/app/firebase";
import { Job } from "@/app/types";

const Jobs = () => {
  const { data, setData, filterForm } = useGlobal();
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const querySnapshot = await getDocs(collection(db, "jobs"));
      let temp: Job[] = [];

      querySnapshot.forEach((doc) => {
        temp.push({ ...(doc.data() as Job) });
      });

      const filtered = temp.filter((item) => {
        const search = filterForm.searchInput
          ? item.position
              .toLowerCase()
              .includes(filterForm.searchInput.toLowerCase()) ||
            item.company
              .toLowerCase()
              .includes(filterForm.searchInput.toLowerCase())
          : temp;
        const location = filterForm.searchLocation
          ? item.location.toLowerCase().includes(filterForm.searchLocation)
          : temp;

        const fullTime = filterForm.isFullTime
          ? item.contract.toLowerCase().includes("full time")
          : temp;

        return search && location && fullTime;
      });

      console.log(filtered);

      setData(filtered);
      setLoading(false);
    };
    fetchData();
  }, [setData, filterForm]);

  console.log(data);

  return (
    <div className="flex flex-col gap-14 content">
      <SearchBar />
      <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1  gap-[30px]">
        {loading ? (
          <p>loading</p>
        ) : data && data.length > 0 ? (
          data?.map((job) => <Card key={job.id} job={job} />)
        ) : (
          <p>burada iş yok</p>
        )}
      </div>
    </div>
  );
};

export default Jobs;

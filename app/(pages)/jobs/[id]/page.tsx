"use client";

import Button from "@/app/components/button";
import RequirementsContent from "@/app/components/requirements-content";
import RoleContent from "@/app/components/role-content";
import { db } from "@/app/firebase";
import { Job } from "@/app/types";
import { doc, getDoc } from "firebase/firestore";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const Id = () => {
  const { id } = useParams();
  const [job, setJob] = useState<Job | null>(null);
  const customLogo = String(job?.logo.replace(".", ""));

  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, "jobs", String(id));
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setJob(docSnap.data() as Job);
      } else {
        console.log("No such document!");
      }
    };

    fetchData();
  }, []);

  if (!job)
    return (
      <div className="min-h-100 flex items-center justify-center">
        <div className="loader"></div>
      </div>
    );
  return (
    <div className="flex flex-col">
      <div className="flex flex-col mx-10">
        <header className="bg-Neutral-0 dark:bg-Slate-900 max-w-[730px] mx-auto w-full ">
          <div className="flex gap-10 max-md:flex-col max-md:items-center max-md:-translate-y-6 ">
            <div
              className=" relative w-[140px] h-[140px] max-md:w-[100px] max-md:h-[100px] max-md:rounded-md"
              style={{ backgroundColor: `${job.logoBackground}` }}
            >
              <Image
                src={customLogo}
                fill
                className="object-contain p-8 max-md:p-2"
                alt=""
              />
            </div>

            <div className="flex justify-between items-center max-md:flex-col max-md:gap-10 max-md:pr-0  flex-1 pr-10">
              <div className="flex flex-col gap-1.5">
                <h4 className="text-preset-2 text-Slate-900 dark:text-Neutral-0">
                  {job.company}
                </h4>
                <span className="text-preset-4-regular text-Slate-500">
                  {job.website}
                </span>
              </div>
              <Button text="Company Site" buttonStyle={2} />
            </div>
          </div>
        </header>

        <div className="flex flex-col gap-10 p-11 max-w-[730px] mx-auto w-full bg-Neutral-0 dark:bg-Slate-900 mt-11 ">
          <header className="flex items-center justify-between max-md:grid max-md:grid-cols-1 max-md:gap-10">
            <div className="flex flex-col gap-3">
              <p className="text-Slate-500 dark:text-Slate-300 text-preset-4-regular">
                {job.postedAt} | <span>{job.contract}</span>
              </p>

              <h3 className="text-Slate-900 dark:text-Neutral-0 hover:text-Slate-500 text-preset-1 ">
                {job.position}
              </h3>

              <span className="text-Indigo-500 text-preset-5">
                {job.location}
              </span>
            </div>

            <Button text="Apply Now" buttonStyle={1} />
          </header>

          <div className="flex flex-col gap-11">
            <p className="text-Slate-500  dark:text-Slate-300 text-preset-4-regular">
              {job.description}
            </p>

            <div className="flex flex-col gap-6">
              <h3 className="text-preset-3 text-Slate-900 dark:text-Neutral-0">
                Requirements
              </h3>
              <p className="text-Slate-500 dark:text-Slate-300 text-preset-4-regular">
                {job.requirements.content}
              </p>

              <div className="flex flex-col gap-2">
                {job.requirements.items.map((item, i) => (
                  <RequirementsContent key={i} article={item} />
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <h3 className="text-preset-3 text-Slate-900 dark:text-Neutral-0">
                What You Will Do
              </h3>
              <p className="text-Slate-500 dark:text-Slate-300 text-preset-4-regular">
                {job.role.content}
              </p>

              <div className="flex flex-col gap-2">
                {job.role.items.map((item, i) => (
                  <RoleContent key={i} article={item} index={i} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-Neutral-0 dark:bg-Slate-900 h-24 flex items-center  mt-20 px-10">
        <div className=" max-w-[730px] mx-auto w-full flex items-center justify-between max-md:grid max-md:grid-cols-1">
          <div className="flex flex-col gap-2 max-md:hidden ">
            <h3 className="text-preset-3 text-Slate-900 dark:text-Neutral-0">
              {job.position}
            </h3>
            <span className="text-preset-4-regular text-Slate-500">
              {job.company}
            </span>
          </div>
          <Button text="Apply Now" buttonStyle={1} />
        </div>
      </div>
    </div>
  );
};

export default Id;

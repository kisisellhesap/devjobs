import Link from "next/link";
import Logo from "./card-logo";
import { Job } from "../types";

interface CardProps {
  job: Job;
}
const Card = ({ job }: CardProps) => {
  return (
    <div className="px-8  bg-Neutral-0 dark:bg-Slate-900 rounded-md  ">
      <div className="flex flex-col gap-6 relative bottom-6">
        <div
          className={`relative w-[50px] h-[50px] rounded-2xl flex items-center justify-center`}
          style={{ backgroundColor: `${job.logoBackground}` }}
        >
          <Logo src={job.logo} company={job.company} />
        </div>

        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <p className="text-Slate-500 text-preset-4-regular">
              {job.postedAt} | <span>{job.contract}</span>
            </p>

            <Link
              href={`/jobs/${job.id}`}
              className="text-Slate-900 dark:text-Neutral-0 hover:text-Slate-500 text-preset-3 cursor-pointer line-clamp-1"
            >
              {job.position}
            </Link>

            <span className="text-Slate-500 text-preset-4-regular">
              {job.company}
            </span>
          </div>

          <span className="text-Indigo-500 text-preset-5">{job.location}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;

import React from "react";

interface RequirementsContentProps {
  article: string;
}

const RequirementsContent = ({ article }: RequirementsContentProps) => {
  return (
    <div className="flex items-center gap-4">
      <div className="w-2 h-2 shrink-0 rounded-full bg-Indigo-500"></div>
      <p className="text-Slate-500 dark:text-Slate-300 text-preset-4-regular pl-5">
        {article}
      </p>
    </div>
  );
};

export default RequirementsContent;

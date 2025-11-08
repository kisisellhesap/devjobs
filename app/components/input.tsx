import React from "react";

interface Input {
  icon: React.ReactNode;
  placeholder: string;
  name?: string;
}

const Input = ({ icon, placeholder, name }: Input) => {
  return (
    <div className="flex items-center gap-4 flex-1">
      {icon}
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        className="outline-none w-full  text-preset-4-regular text-Slate-900 dark:text-Neutral-0/50"
        autoComplete="off"
      />
    </div>
  );
};

export default Input;

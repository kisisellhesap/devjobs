import React, { ChangeEvent } from "react";

interface Input {
  icon: React.ReactNode;
  placeholder: string;
  name?: string;
  value: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ icon, placeholder, name, handleChange, value }: Input) => {
  return (
    <div className="flex items-center gap-4 flex-1">
      {icon}
      <input
        type="search"
        name={name}
        defaultValue={value}
        placeholder={placeholder}
        className="outline-none w-full  text-preset-4-regular text-Slate-900 dark:text-Neutral-0/50"
        autoComplete="off"
        onChange={handleChange}
      />
    </div>
  );
};

export default Input;

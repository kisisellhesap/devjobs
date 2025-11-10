interface RoleContentProps {
  article: string;
  index: number;
}
const RoleContent = ({ article, index }: RoleContentProps) => {
  return (
    <div className="flex items-center gap-4">
      <span className="text-Indigo-500 text-preset-4">{index + 1}</span>
      <p className="text-Slate-500 dark:text-Slate-300 text-preset-4-regular pl-5">
        {article}
      </p>
    </div>
  );
};

export default RoleContent;

import type { statsProps } from "@/assets/types";

const StatsComponent = ({
  icon,
  title,
  data,
  description1,
  description2,
  className
}: statsProps) => {
  return (
    <div className={`${className}`}>
      <span className="flex gap-1 items-center">
        {icon}
        <p className="textColor6 font-bold text-sm">{title}</p>
      </span>
      <p className="mt-3 textColor6 font-bold text-xs">{data}</p>
      <div className="flex justify-between mt-4">
        <p className="text-[10px] textColor6 font-bold ">{description1}</p>
        <p className="text-[8px] text-green-500">{description2 || ""}</p>
      </div>
    </div>
  );
};

export default StatsComponent
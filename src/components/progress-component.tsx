import React from "react";
import type { ProgressProp } from "@/assets/types";
const ProgressComponent = ({value,max,className} : ProgressProp) => {
  return (
    <progress
      value={value.toString()}
      max={max.toString()}
      className={`${className}`}
    />
  );
};

export default ProgressComponent;

import React from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  date: string;
  className?: string;
};

const TimeLineRigthPane = (props: Props) => {
  return (
    <div className="h-fit">
      <p
        className={twMerge(
          props.className,
          "text-2xl tablet:text-base  mobile:text-[0.75rem] font-bold text-accent"
        )}>
        {props.date}
      </p>
    </div>
  );
};

export default TimeLineRigthPane;

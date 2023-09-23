import React from "react";

type Props = {
  id: number;
};

const TimelineCenter = (props: Props) => {
  return (
    <div className="flex mobile:hidden items-center flex-col gap-1">
      <div className="rounded-full w-20 aspect-square bg-main-gradient flex items-center justify-center text-3xl font-bold relative timeline">
        {props.id}
      </div>
    </div>
  );
};

export const TimelineCenterMobile = ({ id }: Props) => {
  return (
    <div className="flex w-fit items-center flex-col gap-1">
      <div className="rounded-full w-10 aspect-square bg-main-gradient flex items-center justify-center text-[0.75] font-bold relative">
        {id}
      </div>
    </div>
  );
};

export default TimelineCenter;

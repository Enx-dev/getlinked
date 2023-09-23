"use client";
import React, { useEffect, useState } from "react";
import TimelineLeftPane from "./TimelineLeftPane";
import TimelineCenter, { TimelineCenterMobile } from "./TimelineCenter";
import TimeLineRigthPane from "./TimeLineRigthPane";
import { twMerge } from "tailwind-merge";

type Props = {
  item: {
    id: number;
    title: string;
    content: string;
    date: string;
  };
};

const TimelineItemWrapper = ({ item: { id, title, content, date } }: Props) => {
  const [left, setLeft] = useState(
    <TimelineLeftPane title={title} content={content} />
  );
  const [right, setRight] = useState(<TimeLineRigthPane date={date} />);
  useEffect(() => {
    if (id % 2 == 0) {
      setLeft(<TimeLineRigthPane className="text-right" date={date} />);
      setRight(<TimelineLeftPane title={title} content={content} />);
    }
  }, []);

  return (
    <>
      <div className="flex tablet:hidden items-center justify-between mt-24 h-32 min-h-fit">
        <div
          className={twMerge(
            "w-[28rem]",
            id % 2 == 0 ? "text-left" : "text-right"
          )}>
          {left}
        </div>
        <div className="w-[16rem] flex-shrink">
          <TimelineCenter id={id} />
        </div>
        <div className={twMerge("w-[28rem]")}>{right}</div>
      </div>
      <div className="hidden min-w-[80%] tablet:max-w-lg tablet:min-w-0 tablet:flex h-36 gap-1 flex-row-reverse items-stretch justify-['left']">
        <div className="flex flex-col justify-between pb-2">
          <TimelineLeftPane title={title} content={content} />
          <TimeLineRigthPane date={date} />
        </div>
        <div className="flex gap-2  flex-col h-full items-center">
          <div className="h-full w-[0.2rem] bg-primary" />
          <TimelineCenterMobile id={id} />
        </div>
      </div>
    </>
  );
};

export default TimelineItemWrapper;

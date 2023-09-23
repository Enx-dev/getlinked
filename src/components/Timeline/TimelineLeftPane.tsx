import React from "react";

type Props = {
  title: string;
  content: string;
};

const TimelineLeftPane = (props: Props) => {
  return (
    <>
      <div className="min-w-[200px]">
        <h1 className="text-subheading mobile:text-[0.75rem] tablet:text-base font-bold text-accent">
          {props.title}
        </h1>
        <p className="text-body mobile:text-[0.75rem] leading-7">
          {props.content}
        </p>
      </div>
    </>
  );
};

export default TimelineLeftPane;

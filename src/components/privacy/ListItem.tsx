import React from "react";

type Props = {
  content: string;
};

const ListItem = (props: Props) => {
  return (
    <div className="flex items-start mobile:gap-4 gap-8">
      <div className="p-[0.5rem] rounded-[50%] bg-green-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#fff"
          className="w-4 h-4">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12.75l6 6 9-13.5"
          />
        </svg>
      </div>
      <p className="text-body leading-7">{props.content}</p>
    </div>
  );
};

export default ListItem;

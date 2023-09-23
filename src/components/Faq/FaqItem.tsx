"use client";

import Image from "next/image";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

interface IFaqItem {
  title: string;
  content: string;
  open: boolean;
  id: number;
  handleOpen: (id: number) => void;
}
const FaqItem: React.FC<IFaqItem> = ({
  id,
  handleOpen,
  open,
  content,
  title,
}) => {
  return (
    <div className="text-left">
      <div className="py-4 items-center border-b-[1px] w-fit flex gap-8  border-accent">
        <h1 className="text-base font-semibold leading-7">{title}</h1>
        <Image
          onClick={() => handleOpen(id)}
          className={twMerge(
            open ? "rotate-45" : "rotate-0",
            "cursor-pointer transition-all duration-300 ease-in-out"
          )}
          src="/images/small_star.svg"
          width={16}
          height={16}
          alt="accodian icon"
        />
      </div>
      {open && (
        <div className="animate__slideInDown">
          <p className="text-sm font-light leading-7 max-w-[32rem] m-4 p-4 border-l-[1px] border-primary/25 ">
            {content}
          </p>
        </div>
      )}
    </div>
  );
};

export default FaqItem;

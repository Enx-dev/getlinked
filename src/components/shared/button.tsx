import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";

type Props = {};

const buttonVariants = cva(
  "p-[1px] transition-all duration-150 ease-out focus-within:bg-main-gradient focus:bg-main-gradient cursor-pointer focus-visible:bg-main-gradient  rounded-md w-fit h-fit",
  {
    variants: {
      variant: {
        default: "",
        withHover:
          "pointer-events-none hover:bg-main-gradient hover:[&>*]:from-background hover:[&>*]:to-background",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  label: string;
  onClick?: () => void;
  link?: string;
}

const Button = ({ label, variant, className, link, ...props }: ButtonProps) => {
  return (
    <div tabIndex={1} className={cn(buttonVariants({ variant, className }))}>
      <button
        tabIndex={0}
        onClick={props.onClick}
        className="bg-gradient-to-r text-white w-full focus-within:outline-none pointer-events-auto from-accent to-primary rounded-md px-12 py-4 min-w-[8rem] items-start justify-center  focus-within:from-background focus-within:to-background transition-all duration-300 ease-in-out ">
        {label}
      </button>
    </div>
  );
};

export default Button;

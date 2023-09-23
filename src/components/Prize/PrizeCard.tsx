import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import Image from "next/image";
import React from "react";

const cardVariants = cva(
  "rounded-md grid grid-flow-row items-center p-8 sm_tablet:p-4 border-2 mobile:p-2  relative w-100% min-h-fit ",
  {
    variants: {
      variant: {
        default:
          "bg-main-accent/25 border-accent [&>#img]:scale-150 mobile:[&>#img]:scale-100  [&>#text>#highlight]:text-accent",
        gold: "bg-main-purple/25 h-[110%] mobile:[&>#img]:scale-150 z-20 border-primary [&>#img]:scale-[2.1] [&>#text>#highlight]:text-primary",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface IPrice extends VariantProps<typeof cardVariants> {
  image: string;
  position: string;
  prize: string;
}

export const PrizeCard = ({ variant, image, position, prize }: IPrice) => {
  return (
    <div className={cn(cardVariants({ variant }))}>
      <div
        id="img"
        className="relative w-full  translate-y-[-70%] aspect-square">
        <Image
          className="absolute"
          src={image}
          alt={`${position}_prize`}
          fill
          sizes="100%"
        />
      </div>
      <div id="text" className="self-end justify-center text-center h-full ">
        <h1 className="text-cardHeading font-bold">{position}</h1>
        <p className="text-cardLabel font-bold">Runner</p>
        <p id="highlight" className="text-cardLabel mt-4  font-bold ">
          N{prize}
        </p>
      </div>
    </div>
  );
};

export default PrizeCard;

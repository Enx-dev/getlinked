import PrizeCard from "@/components/Prize/PrizeCard";
import Image from "next/image";
import React from "react";

type Props = {};
// PrizeCard,
const PrizeSection = (props: Props) => {
  return (
    <section className="min-h-screen relative laptop:flex-col flex-row py-24 laptop:py-12 sm_mobile:py-8 items-center flex w-full  bg-footer px-24 sm_tablet:px-8 laptop:px-12 mobile:gap-16 overflow-x-clip  laptop:gap-44">
      <div
        id="pane2"
        className="relative  aspect-square max-w-[40rem] flex-shrink-0 h-full w-full">
        <Image
          className="h-full absolute z-10"
          src="/images/trophy.svg"
          alt="Ideas"
          fill
        />
      </div>
      <div
        id="pane1"
        className="w-full mobile:max-w-xs gap-4 max-w-xl sm_tablet:gap-2 z-10 items-center grid grid-flow-col">
        <PrizeCard image="/images/silver.svg" position="2nd" prize="200,000" />
        <PrizeCard
          image="/images/gold.svg"
          position="1st"
          prize="400,000"
          variant="gold"
        />
        <PrizeCard image="/images/bronze.svg" position="3rd" prize="150,000" />
      </div>

      <div className="absolute flex sm_tablet:flex-col justify-between z-10 inset-0">
        <div className=" max-w-[600px] min-w-[300px] w-[70vw] aspect-square opacity-20 sm_tablet:translate-x-[-30%] sm_tablet:translate-y-[20%] bg-gradient blur-2xl -z-10 rounded-full" />
        <div className="translate-x-[60%] translate-y-[30%] tablet:translate-y-[50%] mobile:translate-x-[50%] max-w-[600px] min-w-[300px] w-[70vw]  aspect-square opacity-20 bg-gradient blur-2xl  rounded-full" />
      </div>
    </section>
  );
};

export default PrizeSection;

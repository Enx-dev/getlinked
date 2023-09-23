import { clashDisplay } from "@/Fonts/font";
import Grid from "@/components/Pas/Grid";
import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";

type Props = {};

const PaSSection = (props: Props) => {
  return (
    <section className="min-h-[90vh] relative gap-12  py-12 flex flex-col w-full items-center laptop:px-12  px-24 mobile:px-8">
      <div
        id="pane1"
        className="space-y-8 w-fit mobile:flex mobile:flex-col mobile:items-center">
        <div className="space-y-4 max-w-max text-center">
          <div className="space-y-4">
            <h1
              className={twMerge(
                "text-subheading font-bold",
                clashDisplay.className
              )}>
              Partners and Sponsors
            </h1>
            <p className="text-body leading-7 max-w-[32rem]">
              Getlinked Hackathon 1.0 is honored to have the following major
              companies as its partners and sponsors
            </p>
          </div>
        </div>
      </div>
      <div
        id="pane2"
        className="border-[0.5px] p-16 tablet:p-0 flex justify-center items-center rounded-md border-main-purple  min-h-[100vh] h-[70vh] mobile:min-h-full mobile:h-72 w-full">
        <Grid />
      </div>
      <div className="absolute flex sm_tablet:flex-col justify-between z-10 inset-0">
        <div className=" max-w-[600px] min-w-[300px] w-[70vw] aspect-square opacity-20 sm_tablet:translate-x-[-30%] sm_tablet:translate-y-[20%] bg-gradient blur-2xl -z-10 rounded-full" />
        <div className="translate-x-[60%] translate-y-[30%] tablet:translate-y-[50%] mobile:translate-x-[50%] max-w-[600px] min-w-[300px] w-[70vw]  aspect-square opacity-20 bg-gradient blur-2xl  rounded-full" />
      </div>
    </section>
  );
};

export default PaSSection;

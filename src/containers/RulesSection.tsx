import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";
import { clashDisplay } from "@/Fonts/font";

type Props = {};

const RulesSection = (props: Props) => {
  return (
    <section className="h-[90vh] z-20 relative mobile:h-auto mobile:flex-col-reverse flex-row gap-12  py-12 flex w-full items-center justify-between mobile:px-8 laptop:px-12 px-24 border-b-2 border-neutral-500/25 overflow-x-clip">
      <div
        id="pane1"
        className="space-y-8 w-fit mobile:flex mobile:items-center">
        <div className="space-y-4 max-w-max mobile:text-center">
          <h1
            className={twMerge(
              "text-subheading font-bold",
              clashDisplay.className
            )}>
            Rules and
            <span className="text-accent block">Guidelines</span>
          </h1>
          <p className="text-body leading-7 max-w-[70rem]">
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </p>
        </div>
      </div>
      <div id="pane2" className="relative mobile:h-96 h-full w-full">
        <Image
          src="/images/rules.svg"
          alt="Ideas"
          fill
          loading="lazy"
          sizes="(max-width: 392px) 300px, 500px"
        />
      </div>
      <div className="absolute flex sm_tablet:flex-col justify-between z-10 inset-0">
        <div className=" max-w-[600px] min-w-[300px] w-[70vw] aspect-square opacity-20 sm_tablet:translate-x-[-30%] sm_tablet:translate-y-[20%] bg-gradient blur-2xl -z-10 rounded-full" />
        <div className="translate-x-[60%] translate-y-[30%] tablet:translate-y-[50%] mobile:translate-x-[50%] max-w-[600px] min-w-[300px] w-[70vw]  aspect-square opacity-20 bg-gradient blur-2xl  rounded-full" />
      </div>
    </section>
  );
};

export default RulesSection;

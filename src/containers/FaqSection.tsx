import { clashDisplay } from "@/Fonts/font";
import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";
import Accodion from "@/components/Faq/Accodion";

type Props = {};

const FaqSection = (props: Props) => {
  return (
    <section id="faq" className="min-h-screen mobile:h-auto mobile:flex-col flex-row gap-12  py-12 flex w-full items-center justify-between mobile:px-8 px-24 border-b-2 laptop:px-12 border-neutral-500/25">
      <div
        id="pane1"
        className="space-y-8 mobile:w-fit w-full mobile:flex mobile:flex-col mobile:items-center">
        <div className="space-y-4 max-w-max mobile:text-center">
          <div className="space-y-4">
            <h1
              className={twMerge(
                "text-subheading font-bold",
                clashDisplay.className
              )}>
              Frequently Asked
              <span className="text-accent block">Questions</span>
            </h1>
            <p className="text-body leading-7 max-w-[32rem]">
              We got answers to the questions that you might want to ask about
              getlinked Hackathon 1.0
            </p>
          </div>
          <Accodion />
        </div>
      </div>
      <div id="pane2" className="relative aspect-square w-full">
        <Image src="/images/faq.svg" alt="Ideas" fill />
      </div>
    </section>
  );
};

export default FaqSection;

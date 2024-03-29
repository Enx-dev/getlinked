import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { clashDisplay } from "@/Fonts/font";

type Props = {};

const AboutSection = (props: Props) => {
  return (
    <section className="min-h-[90vh] mobile:h-auto mobile:flex-col-reverse flex-row-reverse gap-12  py-12 flex w-full items-center justify-between mobile:px-8 laptop:px-12 px-24 border-b-2 border-neutral-500/25">
      <div
        id="pane1"
        className="space-y-8 w-fit mobile:flex mobile:items-center">
        <div className="space-y-4 max-w-max mobile:text-center">
          <h1
            className={twMerge(
              "text-subheading font-bold",
              clashDisplay.className
            )}>
            Introduction to getlinked
            <span className="text-accent block">tech Hackathon 1.0</span>
          </h1>
          <p className="text-body leading-7 max-w-[70rem]">
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you&apos;re a
            coding genius, a design maverick, or a concept wizard, you&apos;ll
            have the chance to transform your ideas into reality. Solving
            real-world problems, pushing the boundaries of technology, and
            creating solutions that can change the world, that&apos;s what
            we&apos;re all about!
          </p>
        </div>
      </div>
      <div
        id="pane2"
        className="relative  tablet:max-w-lg aspect-square w-full">
        <Image
          className="h-full"
          src="/images/The_big_idea.svg"
          alt="Ideas"
          fill
        />
      </div>
    </section>
  );
};

export default AboutSection;

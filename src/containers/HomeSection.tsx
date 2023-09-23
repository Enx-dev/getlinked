import React from "react";
import Image from "next/image";
import { clashDisplay } from "@/Fonts/font";
import Button from "@/components/shared/button";
import { Unica_One } from "next/font/google";
import { twMerge } from "tailwind-merge";
import Link from "next/link";

type Props = {};

const unicaOne = Unica_One({
  weight: "400",
  subsets: ["latin"],
});

const HomeSection = (props: Props) => {
  return (
    <section className="min-h-screen relative flex gap-8 flex-col pt-12 w-full mobile:px-8 sm_mobile:px-2 tablet:gap-20 pl-24 laptop:pl-12  border-b-2 border-neutral-500/25 overflow-x-clip">
      <div
        id="Home_label"
        className="pr-24 laptop:pr-12 sm_tablet:pr-0 flex flex-col items-end sm_tablet:items-center">
        <p className="sm_tablet:text-base sm_tablet:text-center text-label text-end italic font-bold">
          Igniting a Revolution in{" "}
          <span className="line_cap  relative">HR Innovation</span>
        </p>
      </div>
      <div className="flex sm_tablet:flex-col gap-0 sm_tablet:gap-4 flex-row items-center justify-between">
        <div
          id="pane1"
          className="space-y-10 sm_tablet:flex flex-col sm_tablet:items-center w-full">
          <div>
            <div className="text-heading mobile:leading-3 sm_tablet:text-center text-left space-y-4 font-bold sm_tablet:flex flex-col items-center">
              <h1 className={clashDisplay.className}>
                getLinked Te
                <p className="inline-flex relative bulb">c</p>h
              </h1>

              <div className="flex items-center mobile:w-full tablet:w-fit">
                <h1
                  className={twMerge(clashDisplay.className, "flex-shrink-0")}>
                  Hackaton <span className="text-accent">1.0</span>
                </h1>
                <Image
                  className="block sm_tablet:hidden"
                  src="/images/chain.svg"
                  alt="chain"
                  width={100}
                  height={100}
                />
                <Image
                  className="sm_tablet:block hidden"
                  src="/images/chain.svg"
                  alt="chain"
                  width={30}
                  height={30}
                />
                <Image
                  className="block sm_tablet:hidden"
                  src="/images/boom.svg"
                  alt="boom"
                  width={100}
                  height={100}
                />
                <Image
                  className="sm_tablet:block hidden"
                  src="/images/boom.svg"
                  alt="boom"
                  width={30}
                  height={30}
                />
              </div>
            </div>
            <p className="text-body sm_tablet:text-center leading-9 max-w-[32rem]">
              Participate in getlinked tech Hackathon 2023 stand a chance to win
              a Big prize
            </p>
          </div>
          <Link className="sm_tablet:hidden tablet:block mt-4" href="/register">
            <Button variant="withHover" label="Register" />
          </Link>
          <div
            className={twMerge(
              unicaOne.className,
              "flex sm_tablet:pt-4 pt-8 gap-10"
            )}>
            <span className="flex items-baseline">
              <p className={twMerge(unicaOne.className, "text-5xl")}>00</p>
              <span className="text-xs">h</span>
            </span>
            <span className="flex items-baseline">
              <p className="text-5xl">00</p>
              <span className="text-xs">m</span>
            </span>
            <span className="flex items-baseline">
              <p className="text-5xl">00</p>
              <span className="text-xs">s</span>
            </span>
          </div>
        </div>
        <div
          id="pane2"
          className="relative sm_tablet:max-w-lg aspect-square w-full">
          <Image
            className="bg-blend-hard-light"
            src="/images/hero_img.png"
            fill
            alt="Hero_Image"
            loading="eager"
          />
        </div>
      </div>
      <div className="absolute flex sm_tablet:flex-col justify-between inset-0 -z-10">
        <div className=" max-w-[500px] min-w-[300px] w-[70vw] aspect-square opacity-20 translate-y-[-10%] translate-x-[20%] bg-gradient blur-2xl -z-10 rounded-full" />
        <div className="translate-x-[60%] translate-y-[50%] tablet:translate-y-[50%] mobile:translate-x-[60%] max-w-[600px] min-w-[300px] w-[70vw]  aspect-square opacity-20 bg-gradient blur-2xl  rounded-full" />
      </div>
    </section>
  );
};

export default HomeSection;

import { clashDisplay } from "@/Fonts/font";
import ListItem from "@/components/privacy/ListItem";
import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";

type Props = {};

const PrivacySection = (props: Props) => {
  return (
    <section className="tablet:h-auto tablet:flex-col flex-row gap-12  py-12 flex w-full items-center justify-between mobile:px-8 laptop:px-12 px-24 border-b-2 border-neutral-500/25">
      <div
        id="pane1"
        className="space-y-8 w-fit tablet:flex tablet:flex-col tablet:items-center">
        <div className="space-y-4 max-w-max tablet:text-center">
          <div className="space-y-4">
            <h1
              className={twMerge(
                "text-subheading font-bold",
                clashDisplay.className
              )}>
              Privacy Policy and
              <span className="text-accent block">Terms</span>
            </h1>
            <h2 className="text-white/50 text-body leading-7">
              Last updated on September 12, 2023
            </h2>
            <p className="text-body leading-7 max-w-[32rem]">
              Below are our privacy & policy, which outline a lot of goodies.
              it’s our aim to always take of our participant
            </p>
          </div>
        </div>
        <div className="px-12 tablet:px-4 tablet:pt-8 tablet:pb-24 pt-12 pb-32 bg-primary/10 border-[0.5px] rounded-sm border-primary max-w-3xl">
          <p className="text-body leading-7">
            At getlinked tech Hackathon 1.0, we value your privacy and are
            committed to protecting your personal information. This Privacy
            Policy outlines how we collect, use, disclose, and safeguard your
            data when you participate in our tech hackathon event. By
            participating in our event, you consent to the practices described
            in this policy.
          </p>
          <div className="my-8">
            <h1 className="text-accent font-bold my-2">Licensing Policy</h1>
            <p className="text-body font-bold">
              Here are terms of our Standard License:
            </p>
          </div>
          <ul className="space-y-6">
            <ListItem content="The Standard License grants you a non-exclusive right to navigate and register for our event" />
            <ListItem content="You are licensed to use the item available at any free source sites, for your project developement" />
          </ul>
        </div>
      </div>
      <div id="pane2" className="relative tablet:max-w-lg aspect-square w-full">
        <Image
          className="scale-105"
          src="/images/privacy.svg"
          alt="Ideas"
          fill
        />
      </div>
      {/* <div className="absolute w-[500px] left-0 aspect-square opacity-20 bg-gradient blur-2xl -z-10 rounded-full translate-y-[50%]" /> */}
    </section>
  );
};

export default PrivacySection;

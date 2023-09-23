import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const FooterSection = (props: Props) => {
  return (
    <footer className="bg-footer gap-12 tablet:gap-8 py-12 px-24 mobile:px-8 min-h-[60vh] flex flex-col laptop:px-12 tablet:items-center mobile:items-start justify-between">
      <div className="flex tablet:flex-col gap-4 mobile:items-start justify-between items-center">
        <div className="flex flex-col space-y-8 tablet:mb-12 justify-between tablet:items-center mobile:items-start w-full h-full">
          <div className="tablet:flex mobile:block items-center flex-col">
            <Image src="/images/logo.svg" alt="logo" width={150} height={150} />
            <p className="text-body mobile:text-start tablet:text-center mt-4 max-w-md text-white/50 leading-7">
              Getlinked Tech Hackathon is a technology innovation program
              established by a group of organizations with the aim of showcasing
              young and talented individuals in the field of technology
            </p>
          </div>
          <div className="flex items-center justify-between w-fit text-body">
            <span className="relative side_line pr-4">Terms of Use</span>
            <span className="pl-4">Privacy Policy</span>
          </div>
        </div>

        <div className="flex mobile:flex-col mobile:gap-8 items-start justify-between w-full">
          <div>
            <h4 className="text-accent text-body mb-4 font-semibold">
              Usefull Links
            </h4>
            <ul className="space-y-2 text-body leading-7">
              <li className="hover:bg-main-gradient pointer-events-none bg-clip-text">
                <Link
                  className="hover:text-transparent pointer-events-auto scale-105"
                  href="#timeline">
                  Timeline
                </Link>
              </li>
              <li className="hover:bg-main-gradient pointer-events-none bg-clip-text">
                <Link
                  className="hover:text-transparent pointer-events-auto scale-105"
                  href="#info">
                  Overview
                </Link>
              </li>
              <li className="hover:bg-main-gradient pointer-events-none bg-clip-text">
                <Link
                  className="hover:text-transparent pointer-events-auto scale-105"
                  href="#faq">
                  FAQ's
                </Link>
              </li>
              <li className="hover:bg-main-gradient pointer-events-none bg-clip-text">
                <Link
                  className="hover:text-transparent pointer-events-auto scale-105"
                  href="#contact">
                  Contact
                </Link>
              </li>
              <li>
                <div className="flex items-center gap-4">
                  <p className="text-accent">Follow us</p>
                  <div className="flex items-center gap-4">
                    <Image
                      src="/images/icons/insta.svg"
                      alt="insta"
                      width={18}
                      height={18}
                    />
                    <Image
                      src="/images/icons/x.svg"
                      alt="x"
                      width={18}
                      height={18}
                    />
                    <Image
                      className="object-contain h-5"
                      src="/images/icons/fb.svg"
                      alt="fb"
                      width={18}
                      height={18}
                    />
                    <Image
                      src="/images/icons/linkedin.svg"
                      alt="linkedin"
                      width={18}
                      height={18}
                    />
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-accent text-body mb-4 font-semibold">
              Contact us
            </h4>
            <ul className="space-y-2 text-body leading-6">
              <li>
                <div className="">
                  <Link
                    className=" [&>*]:cursor-pointer flex gap-8 items-start"
                    href="tel:+23467981819">
                    <Image
                      src="/images/icons/phone.svg"
                      alt="phone"
                      width={18}
                      height={18}
                    />
                    <p>+234 679 81819</p>
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex gap-8 items-start">
                  <Image
                    src="/images/icons/locate.svg"
                    alt="locate"
                    width={18}
                    height={18}
                  />
                  <p className="max-w-xs">
                    27,Alara Street <br /> Yaba 100012 <br /> Lagos State
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <p className="text-center w-full">
          All rights reserved. © getlinked Ltd.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;

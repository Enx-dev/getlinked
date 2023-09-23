"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./shared/button";
import { useState } from "react";

type Props = {};

const NavBar = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="mobile:px-4  scroll-smooth laptop:px-12 px-24 py-12 bg-transparent flex h-16 items-center justify-between shadow-md ">
      <Link href="/">
        <Image
          src="/images/logo.svg"
          alt="Brand logo"
          width={150}
          height={100}
        />
      </Link>
      <div
        onClick={() => setIsOpen(true)}
        className="sm_tablet:block cursor-pointer hidden">
        <Image
          src="/images/icons/menu.svg"
          alt="Hamburger icon"
          width={30}
          height={30}
        />
      </div>
      {isOpen && <DropDown setIsOpen={setIsOpen} />}
      <ul className="sm_tablet:hidden flex gap-16 tablet:gap-8 text-base  [&>*]:cursor-pointer">
        <li className="hover:bg-main-gradient pointer-events-none bg-clip-text">
          <Link
            className="hover:text-transparent scroll-smooth pointer-events-auto scale-105"
            href="/#timeline">
            Timeline
          </Link>
        </li>
        <li className="hover:bg-main-gradient pointer-events-none bg-clip-text">
          <Link
            className="hover:text-transparent scroll-smooth pointer-events-auto scale-105"
            href="/#info">
            Overview
          </Link>
        </li>
        <li className="hover:bg-main-gradient pointer-events-none bg-clip-text">
          <Link
            className="hover:text-transparent scroll-smooth pointer-events-auto scale-105"
            href="/#faq">
            FAQ's
          </Link>
        </li>
        <li className="hover:bg-main-gradient pointer-events-none bg-clip-text">
          <Link
            className="hover:text-transparent pointer-events-auto scale-105"
            href="/contact">
            Contact
          </Link>
        </li>
      </ul>
      <Button
        className="sm_tablet:hidden tablet:block"
        variant="withHover"
        label="Register"
      />
    </div>
  );
};

interface IProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DropDown = ({ setIsOpen }: IProps) => {
  function handleKeyPress(e: React.KeyboardEvent<HTMLDivElement>) {
    if (e.key === "Escape") {
      setIsOpen(false);
    }
  }
  return (
    <>
      <div
        onKeyDown={(e) => handleKeyPress(e)}
        className="fixed hidden bg-background shadow-md top-0 right-0 w-[70%] min-h-fit h-[70vh] sm_tablet:flex flex-col justify-between items-start p-8 rounded-md z-20">
        <div
          onClick={() => setIsOpen(false)}
          className="cursor-pointer self-end relative">
          <Image
            src="/images/icons/close.svg"
            width={15}
            height={15}
            alt="close icon"
          />
        </div>

        <ul className="flex flex-col gap-8 text-lg font-semibold [&>*]:cursor-pointer">
          <li>Timeline</li>
          <li>Overview</li>
          <li>FAQ's</li>
          <li>Contact</li>
        </ul>
        <Button variant="withHover" label="Register" />
      </div>
      <div
        onKeyDown={(e) => handleKeyPress(e)}
        onClick={() => setIsOpen(false)}
        className="fixed z-10 inset-0 bg-background opacity-50"></div>
    </>
  );
};

export default NavBar;

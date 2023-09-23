"use client";
import Form from "@/components/register/Form";
import Image from "next/image";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="p-12 tablet:px-0 py-24 flex tablet:flex-col items-center justify-between">
      <div className="relative tablet:hidden w-full h-[90vh]">
        <Image src="/images/register.svg" alt="register" fill />
      </div>
      <div className="w-full ">
        <Form />
      </div>
    </div>
  );
};

export default page;

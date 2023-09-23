import Form from "@/components/contact/Form";
import Image from "next/image";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <main className="px-40 py-24 tablet:px-0 flex items-center justify-between">
      <div className=" tablet:hidden space-y-4 w-full">
        <h1 className="text-accent text-3xl">Get in touch</h1>
        <p>
          Contact <br /> Information
        </p>
        <p>
          27,Alara Street <br /> Yaba 100012 <br /> Lagos State
        </p>
        <p>Call Us : 07067981819</p>
        <p>
          we are open from Monday-Friday <br /> 08:00am - 05:00pm
        </p>
        <div>
          <p className="text-accent text-sm pb-2">Share on</p>
          <div className="flex items-center gap-4">
            <Image
              src="/images/icons/insta.svg"
              alt="insta"
              width={18}
              height={18}
            />
            <Image src="/images/icons/x.svg" alt="x" width={18} height={18} />
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
      </div>
      <div className="w-full">
        <Form />
      </div>
    </main>
  );
};

export default page;

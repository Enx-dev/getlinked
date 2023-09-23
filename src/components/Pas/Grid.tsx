import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";

type Props = {};

const Grid = (props: Props) => {
  return (
    <div className="grid grid-cols-3 grid-flow-row w-3/4 h-3/4 gap-4 mobile:gap-2">
      <GridItem className="side_line bottom_line ">
        <Image
          className="object-contain static"
          src="/images/logo/liberty.svg"
          alt="pay"
          width={150}
          height={150}
        />
      </GridItem>
      <GridItem className="side_line bottom_line ">
        <Image
          className="object-contain static"
          src="/images/logo/pay.svg"
          alt="pay"
          width={150}
          height={150}
          quality={100}
        />
      </GridItem>
      <GridItem className="bottom_line ">
        <Image
          className="object-contain static"
          src="/images/logo/winwise.svg"
          alt="pay"
          width={150}
          height={150}
        />
      </GridItem>
      <GridItem className="side_line">
        <Image
          className="object-contain static"
          src="/images/logo/whisper.svg"
          alt="pay"
          width={150}
          height={150}
        />
      </GridItem>
      <GridItem className="side_line">
        <Image
          className="object-contain static"
          src="/images/logo/pay_box.svg"
          alt="pay"
          width={150}
          height={150}
        />
      </GridItem>
      <GridItem className="">
        <Image
          className="object-contain static"
          src="/images/logo/Vuzual.svg"
          alt="pay"
          width={150}
          height={150}
        />
      </GridItem>
    </div>
  );
};

interface IGridItem {
  className: string;
  children: React.ReactNode;
}

const GridItem = ({ children, className }: IGridItem) => {
  return (
    <div
      className={twMerge(
        "relative  object-contain p-8 mobile:p-2 grid place-content-center",
        className
      )}>
      {children}
    </div>
  );
};

export default Grid;

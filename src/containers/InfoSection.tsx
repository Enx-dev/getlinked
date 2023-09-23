import { clashDisplay } from "@/Fonts/font";
import Button from "@/components/shared/button";
import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";

type Props = {};

const data = [
  {
    id: 0,
    title: "Innovation and Creativity",
    content:
      "Evaluate the uniqueness and creativity of thesolution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features.",
  },
  {
    id: 1,
    title: "Functionality",
    content:
      "Assess how well the solution works. Does it perform its intended functions effectively and without major issues? Judges would consider the completeness and robustness of the solution.",
  },
  {
    id: 2,
    title: "Impact and Relevance",
    content:
      "Determine the potential impact of the solution in the real world. Does it address a significant problem, and is it relevant to the target audience? Judges would assess the potential social, economic, or environmental benefits.",
  },
  {
    id: 3,
    title: "Technical Complexity",
    content:
      "Evaluate the technical sophistication of the solution. Judges would consider the complexity of the code, the use of advanced technologies or algorithms, and the scalability of the solution.",
  },
  {
    id: 4,
    title: "Adherence to Hackathon Rules",
    content:
      "Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any other competition-specific requirements.",
  },
];

const InfoSection = (props: Props) => {
  return (
    <section
      id="info"
      className="min-h-screen overflow-clip relative tablet:h-auto tablet:flex-col-reverse flex-row-reverse gap-12  py-12 flex w-full items-center justify-between  laptop:px-12 px-24 border-b-2 border-neutral-500/25">
      <div
        id="pane1"
        className="space-y-8 w-fit tablet:flex tablet:flex-col tablet:items-center">
        <div className="space-y-4 max-w-max tablet:text-center">
          <h1
            className={twMerge(
              "text-subheading font-bold",
              clashDisplay.className
            )}>
            Judging Criteria
            <span className="text-accent block">Key attributes</span>
          </h1>
          <ul className="space-y-8 tablet:max-w-lg tablet:space-y-4">
            {data.map((item) => (
              <li key={item.id}>
                <ListItem title={item.title} content={item.content} />
              </li>
            ))}
          </ul>
        </div>
        <Button label="Read more" variant="withHover" className="mt-4" />
      </div>
      <div
        id="pane2"
        className="relative  tablet:max-w-lg aspect-square w-full">
        <Image
          className="h-full"
          src="/images/info.svg"
          alt="Ideas"
          fill
          loading="lazy"
        />
      </div>
      <div className="absolute flex sm_tablet:flex-col justify-between -z-10 inset-0">
        <div className=" hidden sm_mobile:block max-w-[600px] min-w-[300px] w-[70vw] aspect-square opacity-20 sm_tablet:translate-x-[-30%] sm_tablet:translate-y-[20%] bg-gradient blur-2xl -z-10 rounded-full" />
        <div className="translate-x-[170%]  self-end translate-y-[30%] tablet:translate-y-[30%] mobile:translate-x-[50%] max-w-[600px] min-w-[300px] w-[70vw]  aspect-square opacity-20 bg-gradient blur-2xl  rounded-full" />
      </div>
    </section>
  );
};

export default InfoSection;

interface IListItem {
  title: string;
  content: string;
}

const ListItem = ({ title, content }: IListItem) => {
  return (
    <p className="text-body leading-5">
      <span className="text-secondary font-semibold">{title}: </span>
      {content}
    </p>
  );
};

import { clashDisplay } from "@/Fonts/font";
import TimelineItemWrapper from "@/components/Timeline/TimelineItemWrapper";
import React from "react";
import { twMerge } from "tailwind-merge";
type Props = {};

const data = [
  {
    id: 1,
    title: "Hackathon Announcement",
    content:
      "Interested teams can now show their interest in thegetlinked tech hackathon 1.0 2023 by proceeding to register",
    date: "November 18, 2023",
  },
  {
    id: 2,
    title: "Teams Registration begins",
    content:
      "Interested teams can now show their interest in thegetlinked tech hackathon 1.0 2023 by proceeding to register",
    date: "November 18, 2023",
  },
  {
    id: 3,
    title: "Teams Registration ends",
    content: "Interested Participants are no longer Allowed to register",
    date: "November 18, 2023",
  },
  {
    id: 4,
    title: "Announcement of the accepted teams and ideas",
    content:
      "All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced",
    date: "November 18, 2023",
  },
  {
    id: 5,
    title: "Getlinked Hackathon 1.0 Offically Begins",
    content:
      "Accepted teams can now proceed to build theirground breaking skill driven solutions",
    date: "November 18, 2023",
  },
  {
    id: 6,
    title: "Demo Day",
    content:
      "Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day",
    date: "November 18, 2023",
  },
];

function TimelineSection({}: Props) {
  return (
    <section
      id="timeline"
      className="min-h-[90vh]  gap-12 sm_tablet:px-4 laptop:px-12  py-12 flex flex-col w-full items-center">
      <div id="pane1" className="space-y-8 text-center">
        <div className="space-y-4 max-w-max">
          <div className="space-y-4">
            <h1
              className={twMerge(
                "text-3xl  font-bold",
                clashDisplay.className
              )}>
              Timeline
            </h1>
            <p className="text-sm leading-7 max-w-[32rem]">
              Here is the breakdown of the time we anticipate using for the
              upcoming event.
            </p>
          </div>
        </div>
      </div>
      <div
        id="pane2"
        className="tablet:flex w-full tablet:self-start flex-col tablet:gap-4 sm_tablet:items-start items-center max-w-[70%] sm_tablet:max-w-none">
        {data.map((item) => (
          <TimelineItemWrapper key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

export default TimelineSection;

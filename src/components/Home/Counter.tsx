"use client";
import { Unica_One } from "next/font/google";
import React, { useRef, useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";
type Props = {};
const unicaOne = Unica_One({
  weight: "400",
  subsets: ["latin"],
});

function useCountdown() {
  const [{ hours, minutes, seconds }, setTimer] = useState<{
    hours: string | number;
    minutes: string | number;
    seconds: string | number;
  }>({
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const getTimeRemaining = (e: any) => {
    const total = Date.parse(e) - Date.parse(String(new Date()));
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);
    return {
      total,
      hours,
      minutes,
      seconds,
    };
  };

  const startTimer = (e: any) => {
    let { total, hours, minutes, seconds } = getTimeRemaining(e);
    if (total >= 0) {
      setTimer({
        hours: hours > 9 ? hours : "0" + hours,
        minutes: minutes > 9 ? minutes : "0" + minutes,
        seconds: seconds > 9 ? seconds : "0" + seconds,
      });
    }
  };

  const clearTimer = (e: any) => {
    // If you adjust it you should also need to
    // adjust the Endtime formula we are about
    // to code next
    setTimer({
      hours: "24",
      minutes: "00",
      seconds: "00",
    });

    // If you try to remove this line the
    // updating of timer Variable will be
    // after 1000ms or 1sec
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
  };

  const getDeadTime = () => {
    let deadline = new Date();
    deadline.setHours(deadline.getHours() + 24);
    return deadline;
  };

  useEffect(() => {
    clearTimer(getDeadTime());
  }, []);

  const onClickReset = () => {
    clearTimer(getDeadTime());
  };
  return { hours, minutes, seconds };
}

const Counter = (props: Props) => {
  const { hours, minutes, seconds } = useCountdown();

  return (
    <div
      className={twMerge(
        unicaOne.className,
        "flex sm_tablet:pt-4 pt-8 gap-10"
      )}>
      <span className="flex items-baseline">
        <p className={twMerge(unicaOne.className, "text-5xl")}>{hours}</p>
        <span className="text-xs">h</span>
      </span>
      <span className="flex items-baseline">
        <p className="text-5xl">{minutes}</p>
        <span className="text-xs">m</span>
      </span>
      <span className="flex items-baseline">
        <p className="text-5xl">{seconds}</p>
        <span className="text-xs">s</span>
      </span>
    </div>
  );
};

export default Counter;

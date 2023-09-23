"use client";
import { Unica_One } from "next/font/google";
import React, { useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { useEffect } from "react";
type Props = {};
const unicaOne = Unica_One({
  weight: "400",
  subsets: ["latin"],
});

const Counter = (props: Props) => {
  const Ref = useRef(null);
  const [sec, setSec] = useState<string | number>("00");
  const [min, setMin] = useState<string | number>("00");
  const [hr, sethr] = useState<string | number>("00");

  const getTimeRemaining = (e) => {
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
  const startTimer = (e) => {
    let { total, hours, minutes, seconds } = getTimeRemaining(e);
    if (total >= 0) {
      sethr(hours > 9 ? hours : "0" + hours);
      setMin(minutes > 9 ? minutes : "0" + minutes);
      setSec(seconds > 9 ? seconds : "0" + seconds);
    }
  };
  const clearTimer = (e) => {
    sethr("24");
    setMin("00");
    setSec("00");

    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
  };
  const getDeadTime = () => {
    let deadline = new Date();
    deadline.setHours(deadline.getHours() + 24);
    return deadline;
  };
  useEffect(() => {
    clearTimer(getDeadTime());
  }, []);

  // Another way to call the clearTimer() to start
  // the countdown is via action event from the
  // button first we create function to be called
  // by the button
  const onClickReset = () => {
    clearTimer(getDeadTime());
  };

  return (
    <div
      className={twMerge(
        unicaOne.className,
        "flex sm_tablet:pt-4 pt-8 gap-10"
      )}>
      <span className="flex items-baseline">
        <p className={twMerge(unicaOne.className, "text-5xl")}>{hr}</p>
        <span className="text-xs">h</span>
      </span>
      <span className="flex items-baseline">
        <p className="text-5xl">{min}</p>
        <span className="text-xs">m</span>
      </span>
      <span className="flex items-baseline">
        <p className="text-5xl">{sec}</p>
        <span className="text-xs">s</span>
      </span>
    </div>
  );
};

export default Counter;

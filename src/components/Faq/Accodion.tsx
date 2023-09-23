"use client";
import React, { useState } from "react";
import FaqItem from "./FaqItem";

type Props = {};
const data = [
  {
    id: 0,
    title: "Can I work on a project I started before the hackathon?",
    content:
      "Yes, you can work on a project you started before the hackathon. However, you must submit your project to Devpost during the hackathon weekend.",
  },
  {
    id: 1,
    title: "Can I work on a project I started before the hackathon?",
    content:
      "Yes, you can work on a project you started before the hackathon. However, you must submit your project to Devpost during the hackathon weekend.",
  },
  {
    id: 2,
    title: "Can I work on a project I started before the hackathon?",
    content:
      "Yes, you can work on a project you started before the hackathon. However, you must submit your project to Devpost during the hackathon weekend.",
  },
  {
    id: 3,
    title: "Can I work on a project I started before the hackathon?",
    content:
      "Yes, you can work on a project you started before the hackathon. However, you must submit your project to Devpost during the hackathon weekend.",
  },
  {
    id: 4,
    title: "Can I work on a project I started before the hackathon?",
    content:
      "Yes, you can work on a project you started before the hackathon. However, you must submit your project to Devpost during the hackathon weekend.",
  },
];
const Accodion = (props: Props) => {
  const [active, setActive] = useState(-1);

  const handleOpen = (id: number) => {
    if (active == id) {
      setActive(-1);
    } else {
      setActive(id);
    }
  };
  return (
    <ul className="space-y-4">
      {data.map((item) => (
        <li key={item.id}>
          <FaqItem
            handleOpen={handleOpen}
            id={item.id}
            open={item.id == active}
            title={item.title}
            content={item.content}
          />
        </li>
      ))}
    </ul>
  );
};

export default Accodion;

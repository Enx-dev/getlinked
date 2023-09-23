"use client";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "../ui/dialog";
import React from "react";
import { DialogHeader } from "../ui/dialog";
import Image from "next/image";
import Button from "../shared/button";

type Props = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
};

const Success = ({ open, setIsOpen }: Props) => {
  return (
    <Dialog open={open} onOpenChange={setIsOpen}>
      <DialogContent className="w-[80vw] bg-transparent backdrop-blur">
        <DialogHeader>
          <DialogTitle className="relative w-full aspect-square max-h-[50vh] tablet:max-h-[30vh]">
            <Image
              src="/images/congratulation.png"
              alt="congratulations"
              fill
              sizes="(max-width: 390px) 50%, 100%"
            />
          </DialogTitle>
          <DialogDescription className="space-y-4">
            <h1 className="text-3xl tablet:text-xl font-bold text-white text-center">
              Congratulations <br />
              You have successfully registered
            </h1>
            <p className="text-white text-body text-center">
              yes it was easy and you did it <br />
              check you mail box for the next step
            </p>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            className="w-full"
            onClick={() => setIsOpen(false)}
            label="back"
          />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Success;

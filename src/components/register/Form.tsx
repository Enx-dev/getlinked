"use client";

import React, { useState } from "react";
import Button from "../shared/button";
import {
  Form,
  FormControl,
  FormItem,
  FormField,
  FormLabel,
  useFormField,
  FormMessage,
} from "../ui/form";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "../ui/textarea";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import axios from "axios";
import { Toaster, toast } from "sonner";
import { cn } from "@/lib/utils";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectItem,
  SelectLabel,
  SelectValue,
} from "../ui/select";
import { Checkbox } from "../ui/checkbox";
import Success from "./Success";

type Props = {};

const RegisterForm = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const formSchema = z.object({
    teamName: z
      .string()
      .min(2, {
        message: "Username must be at least 2 characters.",
      })
      .max(20, {
        message: "Username must be at most 20 characters.",
      }),
    email: z.string().email("enter a valid mail"),
    phone: z
      .string()
      .min(2, {
        message: "Username must be at least 2 characters.",
      })
      .max(200, {
        message: "Username must be at most 200 characters.",
      }),
    projectTopic: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    category: z.enum(["1", "2"], {
      required_error: "Please select a category",
    }),
    groupSize: z.enum(["3", "5", "10"], {
      required_error: "Please select a group size",
    }),
    privacy: z.boolean({ required_error: "Please accept the privacy policy" }),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      teamName: "",
      email: "",
      phone: "",
      projectTopic: "",
      category: "2",
      groupSize: "3",
      privacy: false,
    },
  });
  async function onSubmit(values: z.infer<typeof formSchema>) {
    const baseUrl = "https://backend.getlinked.ai";
    try {
      await axios
        .post(`https://backend.getlinked.ai/hackathon/registration`, {
          email: values.email,
          phone_number: values.phone,
          team_name: values.teamName,
          group_size: Number(values.groupSize),
          project_topic: values.projectTopic,
          category: Number(values.category),
          privacy_poclicy_accepted: values.privacy,
        })
        .then(() => {
          setIsOpen(true);
          form.reset();
        });
    } catch (error: any) {
      toast.error(error.message);
    }
  }
  return (
    <Card className="bg-main-purple/10 px-12 mx-auto sm_tablet:bg-transparent border-0 max-w-2xl sm_tablet:px-0">
      <Toaster richColors />
      <Success open={isOpen} setIsOpen={setIsOpen} />
      <CardHeader>
        <h1 className="text-3xl mb-8 text-accent font-bold">Register</h1>
        <div className="relative hidden tablet:block w-full h-[50vh]">
          <Image src="/images/register.svg" alt="register" fill />
        </div>
        <div className="flex items-center gap-2 mt-8">
          <h2 className=" text-white/70 ">Be part of this movement!</h2>
          <div className="flex items-center">
            <Image
              src="/images/icons/girl.svg"
              alt="girl"
              width={25}
              height={25}
            />
            <Image
              src="/images/icons/boy.svg"
              alt="girl"
              width={25}
              height={25}
            />
          </div>
        </div>

        <h3 className="text-subheading sm_tablet:text-base text-white font-bold">
          CREATE YOUR ACCOUNT
        </h3>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            action=""
            className="space-y-8 sm_tablet:space-y-4 text-white flex flex-col"
            onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex items-stretch sm_tablet:flex-col justify-between gap-8 sm_tablet:gap-4">
              <FormField
                name="teamName"
                render={({ field, fieldState }) => (
                  <FormItem className="w-full">
                    <FormLabel>Team Name</FormLabel>
                    <FormControl>
                      <Input
                        className={cn(
                          "bg-transparent min-w-full ring-offset-transparent ring-offset-1 ring-0 focus-visible:outline-none shadow-sm py-6 outline-1 outline-white",
                          fieldState.error &&
                            "focus-visible:ring-red-500 focus-visible:ring-offset-red outline-none border-0"
                        )}
                        placeholder="Enter the name of your group"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-sm font-mono" />
                  </FormItem>
                )}
              />
              <FormField
                name="phone"
                render={({ field, fieldState }) => (
                  <FormItem className="w-full">
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                      <Input
                        maxLength={11}
                        className={cn(
                          "bg-transparent min-w-full ring-offset-transparent ring-offset-1 ring-0 focus-visible:outline-none shadow-sm py-6 outline-1 outline-white",
                          fieldState.error &&
                            "focus-visible:ring-red-500 focus-visible:ring-offset-red outline-none border-0"
                        )}
                        placeholder="Enter your phone number"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-sm font-mono" />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex items-stretch sm_tablet:flex-col justify-between gap-8 sm_tablet:gap-4">
              <FormField
                name="email"
                render={({ field, fieldState }) => (
                  <FormItem className="w-full">
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        className={cn(
                          "bg-transparent min-w-full ring-offset-transparent ring-offset-1 ring-0 focus-visible:outline-none shadow-sm py-6 outline-1 outline-white",
                          fieldState.error &&
                            "focus-visible:ring-red-500 focus-visible:ring-offset-red outline-none border-0"
                        )}
                        placeholder="Enter your email address"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-sm font-mono" />
                  </FormItem>
                )}
              />
              <FormField
                name="projectTopic"
                render={({ field, fieldState }) => (
                  <FormItem className="w-full">
                    <FormLabel>Project&apos;s Name</FormLabel>
                    <FormControl>
                      <Input
                        maxLength={11}
                        className={cn(
                          "bg-transparent min-w-full ring-offset-transparent ring-offset-1 ring-0 focus-visible:outline-none shadow-sm py-6 outline-1 outline-white",
                          fieldState.error &&
                            "focus-visible:ring-red-500 focus-visible:ring-offset-red outline-none border-0"
                        )}
                        placeholder="Enter your group project topic"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-sm font-mono" />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex sm_tablet:gap-4 items-center justify-between gap-8">
              <FormField
                name="categoty"
                render={({ field, fieldState }) => (
                  <FormItem className="w-full text-white">
                    <FormLabel>Category</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger
                          className={cn(
                            "bg-transparent min-w-full ring-offset-transparent ring-offset-1 ring-0 focus-visible:outline-none shadow-sm py-6 outline-1 outline-white",
                            fieldState.error &&
                              "focus-visible:ring-red-500 focus-visible:ring-offset-red outline-none border-0"
                          )}>
                          <SelectValue
                            className="sm_tablet:text-sm"
                            placeholder="Select your category"
                          />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="2">Web</SelectItem>
                        <SelectItem value="1">Mobile</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage className="text-sm font-mono" />
                  </FormItem>
                )}
              />
              <FormField
                name="groupSize"
                render={({ field, fieldState }) => (
                  <FormItem className="w-full sm_tablet:w-1/2 text-white">
                    <FormLabel>Group Size</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger
                          className={cn(
                            "bg-transparent min-w-full ring-offset-transparent ring-offset-1 ring-0 focus-visible:outline-none shadow-sm py-6 outline-1 outline-white",
                            fieldState.error &&
                              "focus-visible:ring-red-500 focus-visible:ring-offset-red outline-none border-0"
                          )}>
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem className="text-white" value="3">
                          3
                        </SelectItem>
                        <SelectItem value="5">5</SelectItem>
                        <SelectItem value="10">10</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage className="text-sm font-mono" />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-sm sm_tablet:text-xs text-accent">
                Please review your registration details before submitting
              </p>
              <FormField
                control={form.control}
                name="privacy"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-body">
                        I agreed with the event terms and conditions and privacy
                        policy
                      </FormLabel>
                    </div>
                  </FormItem>
                )}
              />
            </div>
            <CustomButton />
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default RegisterForm;

const CustomButton = () => {
  return (
    <button
      tabIndex={0}
      className="bg-gradient-to-r mt-8 text-white focus-within:outline-none pointer-events-auto from-accent to-primary rounded-md px-12 py-4 min-w-[8rem] items-start justify-center self-stretch">
      Register
    </button>
  );
};

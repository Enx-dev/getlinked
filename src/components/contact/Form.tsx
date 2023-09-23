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

type Props = {};

const ContactForm = (props: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const formSchema = z.object({
    firstName: z
      .string()
      .min(2, {
        message: "Username must be at least 2 characters.",
      })
      .max(20, {
        message: "Username must be at most 20 characters.",
      }),
    email: z.string().email("enter a valid mail"),
    message: z
      .string()
      .min(2, {
        message: "Username must be at least 2 characters.",
      })
      .max(200, {
        message: "Username must be at most 200 characters.",
      }),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      email: "",
      message: "",
    },
  });
  async function onSubmit(values: z.infer<typeof formSchema>) {
    const baseUrl = "https://backend.getlinked.ai";
    setIsLoading(true);
    try {
      await axios
        .post(`https://backend.getlinked.ai/hackathon/contact-form`, {
          email: values.email,
          first_name: values.firstName,
          message: values.message,
        })
        .then(() => {
          toast.success("Message Sent");
          form.reset();
        })
        .finally(() => {
          setIsLoading(false);
        });
    } catch (error: any) {
      toast.error(error.message);
    }
  }
  return (
    <Card className="bg-main-purple/20 mx-auto tablet:bg-transparent border-0 max-w-lg">
      <Toaster richColors />
      <CardHeader>
        <h1 className="text-subheading text-accent font-bold">
          Questions or need assistance?
          <br />
          Let us know about it!
        </h1>
        <h2 className="hidden tablet:text-base text-white/70 tablet:block">
          Email us below to any question related to our event
        </h2>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            action=""
            className="space-y-8 text-white flex flex-col"
            onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              name="firstName"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>{fieldState.isDirty && "First Name"}</FormLabel>
                  <FormControl>
                    <Input
                      className={cn(
                        "bg-transparent ring-offset-transparent ring-offset-1 ring-0 focus-visible:outline-none shadow-sm py-6 outline-1 outline-white",
                        fieldState.error &&
                          "focus-visible:ring-red-500 focus-visible:ring-offset-red outline-none border-0"
                      )}
                      placeholder="First Name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="email"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>{fieldState.isDirty && "Email"}</FormLabel>
                  <FormControl>
                    <Input
                      className={cn(
                        "bg-transparent ring-offset-transparent ring-offset-1 ring-0 focus-visible:outline-none shadow-sm py-6 outline-1 outline-white",
                        fieldState.error &&
                          "focus-visible:ring-red-500 focus-visible:ring-offset-red outline-none border-0"
                      )}
                      placeholder="Mail"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="message"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>{fieldState.isDirty && "Message"}</FormLabel>
                  <FormControl>
                    <Textarea
                      className={cn(
                        "bg-transparent ring-offset-transparent ring-offset-1 ring-0 focus-visible:outline-none shadow-sm py-6 outline-1 outline-white",
                        fieldState.error &&
                          "focus-visible:ring-red-500 focus-visible:ring-offset-red outline-none border-0"
                      )}
                      placeholder="Message"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <CustomButton loading={isLoading} />
          </form>
        </Form>
      </CardContent>
      <CardFooter className="hidden w-full flex-col gap-1  items-center tablet:flex">
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
      </CardFooter>
    </Card>
  );
};

export default ContactForm;

const CustomButton = ({ loading }: { loading: boolean }) => {
  return (
    <button
      tabIndex={0}
      disabled={loading}
      className="bg-gradient-to-r mt-8 text-white focus-within:outline-none pointer-events-auto from-accent to-primary rounded-md px-12 py-4 min-w-[8rem] items-start justify-center self-center disabled:opacity-50">
      {loading ? "Submitting..." : "Submit"}
    </button>
  );
};

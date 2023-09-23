import NavBar from "@/components/NavBar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "animate.css";

const mont = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "getLinked",
  description: "Find Talents | Become a talent",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={mont.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}

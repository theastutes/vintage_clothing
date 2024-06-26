import type { Metadata } from "next";
import { dosis, josefin } from "@/components/ui/fonts";
import "./globals.css";
import NavBar from "../components/Navbar/page";
import TopBar from "@/components/TopBar/page";
import Footer from "@/components/Footer/page";
import Image from "next/image";
import { auth } from "../../auth";
import { SessionProvider } from "next-auth/react";
import { checkUser } from "../../action/action";
import { NextUIProvider } from "@nextui-org/system";
import SideBar from "@/components/Sidebar";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  if (session?.user) {
    await checkUser(
      session?.user.id,
      session?.user.name,
      session?.user.email,
      session?.user.image
    );
  }

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={`${dosis.className} antialiased bg-mywhite text-myblack h-full min-h-full relative`}
      >
        <SessionProvider basePath={"/auth"} session={session}>
          <header className="">
            <TopBar />
          </header>
          <div className="flex flex-row ">
            <div className=" sm:hidden lg:hidden visible mx-auto">
              <NavBar />
            </div>
          </div>

          <NextUIProvider>
            <main className="relative w-full h-full min-h-full">
              <SideBar />
              <div className="relative w-full h-full min-h-full sm:pl-24 pb-16 pt-16">
                {children}
              </div>
            </main>
          </NextUIProvider>
        </SessionProvider>
        <Toaster />
      </body>
    </html>
  );
}

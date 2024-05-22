import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "../components/Navbar/page";
import TopBar from "@/components/TopBar/page";
import Footer from "@/components/Footer/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${inter.className} bg-black text-white`}>
        <header>
          <TopBar />
        </header>
        <NavBar />
        <main className=" flex flex-col">
          <div>{children}</div>
          {/* <Footer /> */}
        </main>
      </body>
    </html>
  );
}

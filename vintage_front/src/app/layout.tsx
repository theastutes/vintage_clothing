import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "../components/Navbar/page";
import TopBar from "@/components/TopBar/page";
import Footer from "@/components/Footer/page";
import Image from "next/image";
import { auth } from "../../auth";
import {SessionProvider} from "next-auth/react" 
import { checkUser } from "../../action/action";

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

  const session = await auth()
  if (session?.user) {
    const res = await checkUser(session?.user.id,session?.user.name,session?.user.email,session?.user.image);
    
    console.log(session.user);
  }

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${inter.className} bg-white`}>
      <SessionProvider basePath={"/auth"} session={session}>
        <div className="fixed left-0 right-0 top-0 bottom-0 -z-10">
          <Image
            src={
              "https://images.pexels.com/photos/1234853/pexels-photo-1234853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
            quality={1}
            alt=""
            fill={true}
            style={{ objectFit: "cover" }}
            className="h-screen"
          />
        </div>
        <div className="fixed left-0 right-0 top-0 bottom-0 -z-10 bg-white/50 backdrop-blur-3xl"></div>
        <header>
          <TopBar />
        </header>
        <NavBar />
        <main className=" flex flex-col">
          <div>{children}</div>
          {/* <Footer /> */}
        </main>
        </SessionProvider>
      </body>
    </html>
  );
}

"use server";
import Image from "next/image";
import { BsChevronExpand } from "react-icons/bs";
import { IUser } from "../../types/types";
import { josefin } from "@/components/ui/fonts";
import Search from "@/components/Search";
import { toast } from "sonner";
import { Card, CardFooter, CardHeader } from "@nextui-org/card";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer/page";

interface reponseprops {
  data: [IUser];
}

const images = ["one.jpeg", "two.jpeg", "three.png"];

export default async function Home() {
  () => {
    toast("Event has been created", {
      description: "Sunday, December 03, 2023 at 9:00 AM",
    });
  };
  return (
    <main className="w-full h-full min-h-fit max-w-screen  overflow-x-hidden ">
      <div className=" relative w-full object-cover ">
        <div
          className={`${josefin.className} absolute w-full h-full text-mywhite text-5xl bg-black/50 backdrop-blur-sm flex flex-col py-14 justify-center  items-center z-20 gap-20      sm:text-7xl sm:justify-evenly
        `}
        >
          <div className="px-60  flex justify-center items-center">
            Vintage Clothing
          </div>
          <div className="text-brown  max-sm:hidden ">
            <Search width={96} height={10} />
          </div>
        </div>
        <Image
          src={"/2304.png"}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          alt="bg"
        />
      </div>

      <div className="text-[1.6rem] px-2 mt-2 font-semibold">CATEGORY</div>
      <div className="grid grid-cols-1 gap-1 w-full sm:w-[80%] sm:mx-auto h-fit p-2 rounded-3xl overflow-hidden mb-10">
        <Product url="/one.jpeg" />
        <Product url="/two.jpeg" />
        <Product url="/one.jpeg" />
        <Product url="/two.jpeg" />
      </div>
      <Footer />
    </main>
  );
}

export const Product = ({ url }: { url: string }) => {
  return (
    <Card
      isPressable
      radius="lg"
      className="border-none relative h-44 w-full overflow-hidden"
    >
      <CardHeader className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-2 absolute before:rounded-xl rounded-large w-[calc(100%_-_8px)] top-1 backdrop-blur-sm shadow-small ml-1 z-10">
        <p className="text-tiny">Top Wear</p>
      </CardHeader>
      <Image
        alt="category_image"
        style={{ objectFit: "cover" }}
        className="h-full w-full"
        height={200}
        src={
          url ??
          "https://th.bing.com/th/id/OIP.GPFEY6kfgxbsja6gmrW6rwAAAA?rs=1&pid=ImgDetMain"
        }
        width={200}
      />
    </Card>
    // <div className="relative bg-white/30 transition-all cursor-pointer rounded-3xl aspect-square overflow-hidden h-36 w-full">
    //   <Image
    //     src={url}
    //     alt="category_image"
    //     width={200}
    //     height={200}
    //     style={{ objectFit: "cover" }}
    //     className="h-full w-full"
    //   />
    //   <div className="absolute rotate-45 right-[8px] bottom-[8px]">
    //     <BsChevronExpand size={16} />
    //   </div>
    // </div>
  );
};

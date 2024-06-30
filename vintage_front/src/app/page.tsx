"use server";
import Image from "next/image";
import { BsChevronExpand } from "react-icons/bs";
import { IUser } from "../../types/types";
import { josefin } from "@/components/ui/fonts";
import Search from "@/components/Search";
import { toast } from "sonner";

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

      <div className="text-[2rem] font-serif px-2 mt-6">CATEGORY</div>
      <div className="grid grid-cols-3 gap-1 w-full sm:w-[80%] sm:mx-auto h-fit p-2 rounded-3xl overflow-hidden mb-10">
        <Product url="/one.jpeg" />
        <Product url="/two.jpeg" />
        <Product url="/one.jpeg" />
        <Product url="/two.jpeg" />
        <Product url="/one.jpeg" />
        <Product url="/two.jpeg" />
        <Product url="/one.jpeg" />
        <Product url="/two.jpeg" />
      </div>
    </main>
  );
}

export const Product = ({ url }: { url: string }) => {
  return (
    <div className="relative bg-white/30 transition-all cursor-pointer rounded-3xl aspect-square overflow-hidden">
      <Image
        src={url}
        alt="category_image"
        width={200}
        height={200}
        style={{ objectFit: "cover" }}
        className="h-full aspect-square"
      />
      <div className="absolute rotate-45 right-[8px] bottom-[8px]">
        <BsChevronExpand size={16} />
      </div>
    </div>
  );
};

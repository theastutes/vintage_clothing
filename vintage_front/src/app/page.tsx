"use server";
import Image from "next/image";
import { one } from "../../assets";

import Carousel from '@/components/Carousel/Carousel'
import { BsChevronExpand } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { auth, signIn } from "../../auth"
import { signOut } from "../../auth"
import { IUser } from "../../types/types";

interface reponseprops {
  data: [IUser];
}

const images = ['one.jpeg','two.jpeg','three.png']

export default async function Home() {


  return (
    <main className="w-full  h-fit min-h-screen max-w-screen pt-8 bg-sky-100 text-black overflow-x-hidden gap-2">
      
      {/* <div className="flex gap-3 px-3  w-full h-16">
        <div className="h-full aspect-square backdrop-blur-2xl rounded-full border-2" />
        <div className="h-full aspect-square backdrop-blur-2xl rounded-full border-2" />
        <div className="h-full aspect-square backdrop-blur-2xl rounded-full border-2" />
        <div className="h-full aspect-square backdrop-blur-2xl rounded-full border-2" />
        <div className="h-full aspect-square backdrop-blur-2xl rounded-full border-2" />
        <div className="h-full aspect-square backdrop-blur-2xl rounded-full border-2" />
        <div className="h-full aspect-square backdrop-blur-2xl rounded-full border-2" />
        <div className="h-full aspect-square backdrop-blur-2xl rounded-full border-2" />
      </div> */}

      {/* <div className="w-full flex sm:w-[45%] sm:mx-auto max-h-fit h-fit sm:aspect-square bg-black rounded-2xl overflow-hidden">
        
      </div> */}
      
        <Carousel images={images} />


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

"use server";
import Image from "next/image";
import { one } from "../../assets";
import EmblaCarousel from "@/components/Carousel/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
import { BsChevronExpand } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";

interface IUser {
  name: string;
  email: string;
  image: string;
  id: string;
}
interface reponseprops {
  data: [IUser];
}

export default async function Home() {
  // if (!user) {
  //   throw new AuthError();
  // }

  const OPTIONS: EmblaOptionsType = { loop: true };
  const SLIDE_COUNT = 5;
  const SLIDES = ["/one.jpeg", "/two.jpeg", "/three.png"];

  return (
    <main className="w-full pt-14 h-fit min-h-screen max-w-screen bg-black text-white overflow-x-hidden gap-2">
      {/* <div className="relative bg-yellow-300/90 w-full sm:h-[50%] sm:mx-2 h-[25%]  sm:rounded-2xl  overflow-hidden">
        <Image
          src="/intro_banner.png"
          fill={true}
          alt={"Intro Banner"}
          className="sm:rounded-xl  "
          style={{ objectFit: "contain" }}
        />
      </div> */}
      <div className="flex gap-3 px-3 overflow-x-scroll overflow-hidden w-full h-16">
        <div className="h-full aspect-square backdrop-blur-2xl rounded-[1.5rem] border-2" />
        <div className="h-full aspect-square backdrop-blur-2xl rounded-[1.5rem] border-2" />
        <div className="h-full aspect-square backdrop-blur-2xl rounded-[1.5rem] border-2" />
        <div className="h-full aspect-square backdrop-blur-2xl rounded-[1.5rem] border-2" />
        <div className="h-full aspect-square backdrop-blur-2xl rounded-[1.5rem] border-2" />
        <div className="h-full aspect-square backdrop-blur-2xl rounded-[1.5rem] border-2" />
        <div className="h-full aspect-square backdrop-blur-2xl rounded-[1.5rem] border-2" />
        <div className="h-full aspect-square backdrop-blur-2xl rounded-[1.5rem] border-2" />
      </div>

      <div className="w-full flex sm:w-[45%] sm:mx-auto max-h-fit h-fit sm:aspect-square bg-black rounded-2xl overflow-hidden">
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
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

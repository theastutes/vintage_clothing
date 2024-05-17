"use server"
import Image from "next/image";
import { intro_banner } from "../../assets";
import EmblaCarousel from "@/components/Carousel/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";



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

  const OPTIONS: EmblaOptionsType = { loop: true }
  const SLIDE_COUNT = 5
  const SLIDES = [
    "/one.jpeg",
    "/two.jpeg",
    "/three.png",
  ]

  return (
    <main className="relative flex min-h-screen w-screen h-screen max-w-screen flex-col bg-black text-white items-center justify-between  pt-14 overflow-scroll overflow-x-hidden gap-2">

<div className="relative w-full h-[40%]   sm:rounded-2xl  overflow-hidden">
          <Image src="/intro_banner.png" fill={true} alt={"Intro Banner"} className="sm:rounded-xl " style={{ objectFit: "cover" }} />

        </div>

      <div className="w-full h-full sm:aspect-square  sm:rounded-2xl overflow-hidden">
          <EmblaCarousel slides={SLIDES} options={OPTIONS} />

        </div>

        



      {/* <div className="  w-full p-2 rounded-3xl border-2 sm:overflow-hidden overflow-scroll">
        Footer Categories
      </div> */}

      {/* <Suspense fallback={<Loading />}>
        <div className="w-screen h-full">
          <UserView />
        </div>
      </Suspense> */}
    </main>
  );
}

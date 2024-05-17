"use server"
import Image from "next/image";
import { intro_banner } from "../../assets";
import EmblaCarousel from "@/components/Carousel/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
import { CAlert,CCarousel,CCarouselItem,CImage } from '@coreui/react';
import {one, two, three} from "../../assets"
import '@coreui/coreui/dist/css/coreui.min.css'

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
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

  return (
    <main className="relative flex min-h-screen w-screen h-screen max-w-screen flex-col bg-black text-white items-center justify-between p-4 pt-14 overflow-hidden gap-2">

      <div className=" flex flex-row min-w-full h-2/3  backdrop-blur-sm  rounded-3xl gap-2 ">

        <div className="relative w-2/3 h-full p-2 border-2 rounded-2xl overflow-hidden">
          <Image src="/intro_banner.png" fill={true} alt={"Intro Banner"} className="rounded-xl " style={{ objectFit: "cover" }} />

        </div>

        <div className="w-1/3 h-full p-2 border-2 rounded-2xl overflow-hidden">
          {/* <EmblaCarousel slides={SLIDES} options={OPTIONS} /> */}

          <CCarousel controls>
            <CCarouselItem>
              <CImage className="d-block w-100" src={one} alt="slide 1" />
            </CCarouselItem>
            <CCarouselItem>
              <CImage className="d-block w-100" src={VueImg} alt="slide 2" />
            </CCarouselItem>
            <CCarouselItem>
              <CImage className="d-block w-100" src={AngularImg} alt="slide 3" />
            </CCarouselItem>
          </CCarousel>

        </div>

      </div>

      <div className="  h-1/3 w-full p-2 rounded-3xl border-2 sm:overflow-hidden overflow-scroll">
        Footer Categories
      </div>

      {/* <Suspense fallback={<Loading />}>
        <div className="w-screen h-full">
          <UserView />
        </div>
      </Suspense> */}
    </main>
  );
}

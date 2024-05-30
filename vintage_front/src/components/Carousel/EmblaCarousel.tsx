"use client";
import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import Loading from "@/components/Loading";

type PropType = {
  slides: string[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ playOnInit: true, stopOnInteraction: false, delay: 5000 }), // Autoplay will start on init
  ]);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <div className="relative h-full w-full">
      <div className="w-full h-full overflow-hidden" ref={emblaRef}>
        <div
          className="flex aspect-square h-full "
          style={{
            backfaceVisibility: "hidden",
            touchAction: "pan-y pinch-zoom",
          }}
        >
          {slides.map((image, index) => (
            <div className="my-4 aspect-square" key={index}>
              <Image
                loading="lazy"
                src={image}
                className="aspect-square h-full rounded-3xl"
                height={400}
                width={400}
                alt="Slide Image"
                // style={{ objectFit: "contain" }}
              />
            </div>
          ))}
        </div>
        {/* 
        <div className="flex flex-row bottom-2 justify-center  w-full gap-5 mt-7 absolute">
          <div className="grid grid-cols-2 z-10 bg-white/35 gap-2 items-center backdrop-blur-sm rounded-full">
            <PrevButton
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
            />
            <NextButton
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
            />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default EmblaCarousel;

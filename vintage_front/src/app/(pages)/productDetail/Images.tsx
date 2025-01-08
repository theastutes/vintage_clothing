import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Image from "next/image";

interface Props {
  images: string[];
}

const Images: React.FC<Props> = ({ images }) => {
  return (
    <section className="w-full min-w-full h-full sm:w-[50%] sm:min-w-[50%] sm:h-full sm:min-h-full rounded-b-3xl sm:rounded-none overflow-hidden relative text-center ring-black ring-1 flex items justify-center">
      <Carousel className="h-full w-full">
        <CarouselContent className="h-full">
          {images.map((url, index) => (
            <CarouselItem key={index} className="min-h-full w-full">
              <Image
                className="h-full"
                src={url}
                alt=""
                height={1000}
                width={1000}
                quality={100}
                style={{ objectFit: "fill" }}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default Images;

"use client";
import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Card, CardBody } from "@nextui-org/card";
import Image from "next/image";

interface Props {
  images: string[];
}

const Images: React.FC<Props> = ({ images }) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div>
      <Carousel setApi={setApi} className="w-full bg-yellow-500 h-full mx-auto">
        <CarouselContent>
          {images.map((url, index) => (
            <CarouselItem key={index}>
              {/* <Card>
                <CardBody className="flex aspect-square items-center justify-center p-6"> */}
              <Image
                className="my-auto w-full mx-auto"
                src={url}
                alt=""
                height={1000}
                width={1000}
                quality={100}
                style={{ objectFit: "fill" }}
              />
              {/* </CardBody>
              </Card> */}
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="py-2 -mt-8 z-50 text-center text-sm text-muted-foreground">
        Images {current} of {count}
      </div>
    </div>
  );
};

export default Images;

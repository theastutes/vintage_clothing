"use client"
import React from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from "next/image";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons';

type PropType = {
  slides: string[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ playOnInit: true, stopOnInteraction: false, delay: 3000 }) // Autoplay will start on init
  ]);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi);

  return (
    <div className="embla h-full w-full" >

      <div className=" w-full  overflow-hidden relative" ref={emblaRef}>
        
        <div className="flex h-full  items-center" style={{ backfaceVisibility: 'hidden', touchAction: 'pan-y pinch-zoom', marginLeft: 'calc(var(--slide-spacing) * -1)' }}>

          {slides.map((image, index) => (
            <div className="flex-shrink-0 aspect-square h-full min-w-0" style={{ paddingLeft: 'var(--slide-spacing)', flexBasis: 'var(--slide-size)' }} key={index}>

              <div className="flex items-center h-full w-full justify-center" style={{ boxShadow: 'inset 0 0 0 0.2rem var(--detail-medium-contrast)', borderRadius: '1.8rem', fontSize: '4rem', fontWeight: '600', height: 'var(--slide-height)' }}>
                <Image src={image} className='w-full h-full' height={400} width={400} alt='Slide Image' style={{objectFit:"contain"}} />
              </div>

            </div>
          ))}

        </div>

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
        </div>
      </div>

    </div>
  );
};

export default EmblaCarousel;

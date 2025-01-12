import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

import front from "../../../public/assets/suppleplant-brochure-front.png";
import back from "../../../public/assets/suppleplant-brochure-back.png";
function Brochure() {
  return (
    <div className="w-full flex items-center justify-center flex-col">
      <Carousel>
        <CarouselContent>
          <CarouselItem className="w-[80%] flex items-center justify-center h-full flex-col space-y-2">
            <Image
              src={front}
              alt="front-brochure"
              width={570}
              height={570}
              priority
            />
            <a
              href="/assets/suppleplant-brochure-front.png"
              download="suppleplant-brochure-front.png"
              className="bg-secondColor text-white rounded-sm font-bold text-md py-2 px-3"
            >
              Get a Copy
            </a>
          </CarouselItem>
          <CarouselItem className="w-[80%] flex items-center justify-center h-full flex-col space-y-2">
            <Image
              src={back}
              alt="back-brochure"
              width={570}
              height={570}
              priority
            />
            <a
              href="/assets/suppleplant-brochure-back.png"
              download="suppleplant-brochure-back.png"
              className="bg-secondColor text-white rounded-sm font-bold text-md py-2 px-3"
            >
              Get a Copy
            </a>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <small className="flex md:hidden italic animate-pulse text-thirdColor text-center pt-2">
        Scroll Horizontally
      </small>
    </div>
  );
}

export default Brochure;

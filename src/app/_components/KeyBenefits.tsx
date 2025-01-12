"use client";
import React, { useEffect } from "react";
import { keyBenefits } from "@/constant/key_benefits";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";
function KeyBenefits() {
  useEffect(() => {
    Aos.init({
      duration: 500, // Animation duration
      offset: 100, // Offset for triggering animation
      once: false,
    });
  }, []);
  return (
    <div
      id="key-benefits"
      className="bg-[#EDDBAB] py-4 px-5 flex flex-col items-center"
    >
      <h1 className="title-font text-thirdColor text-[3.5rem]">
        Key <span className="text-secondColor">Benefits</span>
      </h1>
      <div className="pt-5 flex flex-col space-y-4 w-full px-4 md:px-16">
        {keyBenefits.map((benefit, index) => (
          <div
            key={index}
            className={`flex items-center md:justify-between w-full p-3 ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
          >
            <div
              data-aos={`zoom-in`}
              data-aos-duration="500"
              className="flex flex-col space-y-2 w-full md:w-1/2 justify-self-start break-words"
            >
              <h1 className="text-5xl font-extrabold text-[#5F6C37]">
                {benefit.title.toUpperCase()}
              </h1>
              <p className="text-xl text-[#252B16] font-montserrat">
                {benefit.text}
              </p>
            </div>
            <div
              data-aos={`zoom-in`}
              data-aos-duration="500"
              className="bg-[#66723E] w-[300px] h-[300px] rounded-full md:flex items-center justify-center hidden"
            >
              <Image
                src={benefit.icon}
                alt={benefit.title}
                width={200}
                height={200}
                priority
              />
            </div>
          </div>
        ))}
      </div>
      <div data-aos={`zoom-in`} data-aos-duration="500" className="w-full">
        <iframe
          className="pt-5 w-full h-[600px]"
          src="https://www.youtube.com/embed/pmqRUouRGR0?si=RuLeqSfBwImXQ02k"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default KeyBenefits;

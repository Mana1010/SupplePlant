"use client";
import React from "react";
import Logo from "@/components/Logo";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
function Main() {
  const router = useRouter();
  return (
    <div id="home" className="w-full h-screen main-background ">
      <div className="flex items-center w-full md:w-[65%] h-full  px-5 left-bg overflow-x-hidden">
        <div className="flex flex-col space-y-3 w-full md:w-[75%] relative z-[1]">
          <div className="leading-relaxed">
            <motion.div
              initial={{
                scale: 0,
                opacity: 0,
              }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                delay: 0.2,
                type: "spring",
                ease: "easeIn",
              }}
              className="flex flex-col space-y-2 w-1/2"
            >
              <Logo circleSize={80} leafSize={50} className="self-center" />
              <h1 className="text-[5rem] title-font tracking-wide text-baseColor">
                Supple
                <span className="text-[#7ED957]">Plant</span>
              </h1>
            </motion.div>
            <motion.p
              initial={{
                x: -100,
                opacity: 0,
              }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.2,
                type: "spring",
                ease: "easeIn",
              }}
              className="font-montserrat text-lg text-baseColor"
            >
              Boost your health naturally with our plant-based protein
              supplements, crafted from wholesome ingredients to support your
              active lifestyle and well-being.
            </motion.p>
          </div>
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.3,
              type: "tween",
              ease: "easeIn",
            }}
            className="w-full grid sm:grid-cols-2 grid-cols-1 gap-2"
          >
            <button
              onClick={() => router.push("#product-and-services")}
              className=" py-2.5 rounded-sm bg-baseColor text-[#5F6C37] font-bold font-montserrat text-sm"
            >
              EXPLORE OUR PRODUCT
            </button>
            <button
              onClick={() => router.push("#connect-with-us")}
              className=" py-2.5 rounded-sm border border-baseColor text-baseColor bg-transparent font-bold font-montserrat text-sm"
            >
              CONNECT WITH US
            </button>
          </motion.div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Main;

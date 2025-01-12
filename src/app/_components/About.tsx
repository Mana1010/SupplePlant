import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function About() {
  return (
    <div
      id="about-us"
      className="flex flex-col px-6 h-[550px] md:h-[450px] bg-white about-us-bg w-full items-center justify-center w-ull"
    >
      <h1 className="title-font text-thirdColor text-[3.5rem] text-center">
        About <span className="text-secondColor">Us</span>
      </h1>

      <Accordion type="single" collapsible className="bg-white/45 w-full">
        <AccordionItem value="item-1" className="shadow px-3 py-2">
          <AccordionTrigger className="text-xl text-[#5F6C37] font-bold">
            Our Background
          </AccordionTrigger>
          <AccordionContent className="text-[#5F6C37] font-montserrat text-md">
            SupplePlant offers high-quality, plant-based protein products made
            from nutrient-rich legumes, seeds, and grains. Our products are
            carefully crafted to provide essential protein, fiber, and
            antioxidants to support your overall health and wellness. Sourced
            from sustainable and eco-friendly ingredients, we are committed to
            offering clean, plant-powered nutrition for every lifestyle.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="shadow px-3 py-2">
          <AccordionTrigger className="text-xl text-[#5F6C37] font-bold">
            Values
          </AccordionTrigger>
          <AccordionContent className="text-[#5F6C37] font-montserrat text-md">
            At SupplePlant, we value sustainability, health, and transparency,
            ensuring that our plant-based products nourish both your body and
            the planet. Our commitment to quality and community drives us to
            offer clean, honest nutrition for a healthier, more sustainable
            lifestyle.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className="shadow px-3 py-2">
          <AccordionTrigger className="text-xl text-[#5F6C37] font-bold">
            Goals
          </AccordionTrigger>
          <AccordionContent className="text-[#5F6C37] font-montserrat text-md">
            The goals of SupplePlant are to provide high-quality, plant-based
            protein products that support health and wellness, promote
            sustainable living, and foster a community of individuals committed
            to clean nutrition. We aim to make plant-powered nutrition
            accessible, transparent, and impactful for a healthier, more
            eco-friendly future.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default About;

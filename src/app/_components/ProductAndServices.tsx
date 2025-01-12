import React, { useEffect } from "react";
import { products } from "@/constant/products.constant";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";
import { services } from "@/constant/services.constant";
function ProductAndServices() {
  useEffect(() => {
    Aos.init({
      duration: 500, // Animation duration
      offset: 100, // Offset for triggering animation
      once: false,
    });
  }, []);
  return (
    <div
      id="product-and-services"
      className="py-5 flex flex-col product-and-services-bg"
    >
      <h1 className="title-font text-thirdColor text-[3.5rem] text-center">
        Product & <span className="text-secondColor">Services</span>
      </h1>
      <div className="flex flex-col space-y-2 px-3">
        <h1 className="text-3xl text-thirdColor title-font text-center md:text-start">
          Products
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
          {products.map((product) => (
            <div
              data-aos={`zoom-in`}
              data-aos-duration="500"
              key={product.name}
              className="shadow-lg rounded-sm flex flex-col space-y-1 h-[430px] bg-white"
            >
              <div className="w-full relative h-[200px]">
                <Image
                  src={product.imageUrl}
                  fill
                  sizes="100%"
                  className="absolute"
                  alt="product"
                  priority
                />
              </div>
              <div className="flex flex-col space-y-2 pt-1 px-3">
                <h1 className="text-[#AC7E49] font-semibold text-xl text-center">
                  {product.name}
                </h1>
                <h3 className="text-center text-sm font-semibold font-montserrat text-thirdColor">
                  {product.price}
                </h3>
                <p className="text-center font-montserrat text-[0.8rem] text-slate-800">
                  {product.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col space-y-2 px-3 pt-5">
        <h1 className="text-3xl text-secondColor title-font text-center md:text-start">
          Services
        </h1>

        <p className="text-thirdColor md:text-start text-center font-montserrat text-md font-bold">
          <span className="text-2xl text-baseColor title-font">Supple</span>
          <span className="text-2xl text-secondColor title-font pr-1">
            Plant
          </span>{" "}
          provides personalized nutrition guidance to help you select the best
          plant-based protein products for your needs. With easy online
          ordering, subscription options, and dedicated customer support, we
          make it simple to stay on track with your wellness goals.
        </p>
        <div className="flex flex-col space-y-2">
          <h1 className="text-2xl text-thirdColor title-font text-center pt-3">
            We also offers
          </h1>
          <div className="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-10 grid gap-3">
            {services.map((service) => (
              <div
                data-aos={`zoom-in`}
                data-aos-duration="500"
                key={service.title}
                className="shadow-lg rounded-sm flex flex-col space-y-1 bg-white py-5"
              >
                <Image
                  className="self-center"
                  src={service.imageUrl}
                  width={100}
                  height={100}
                  alt={`${service.title}`}
                  priority
                />

                <div className="flex flex-col space-y-2 pt-1 px-3">
                  <h1 className="text-[#AC7E49] font-semibold text-xl text-center">
                    {service.title}
                  </h1>
                  <p className="text-center font-montserrat text-slate-800">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductAndServices;

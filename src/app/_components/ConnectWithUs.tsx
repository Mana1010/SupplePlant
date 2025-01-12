import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiShopee } from "react-icons/si";
import { SiFacebook } from "react-icons/si";
import { SiInstagram } from "react-icons/si";
import { SiTiktok } from "react-icons/si";
function ConnectWithUs() {
  return (
    <div id="connect-with-us" className="w-full connect-with-us-bg py-5">
      <h1 className="title-font text-baseColor text-[3.5rem] text-center">
        Connect With <span className="text-secondColor">Us</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 px-5 justify-center gap-4">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col space-y-2 border border-thirdColor rounded-md py-5 w-full px-5"
        >
          <h3 className="title-font text-secondColor text-[2rem]">Email Us</h3>
          <div className="flex flex-col space-y-2">
            <div className="space-y-1">
              <label
                htmlFor="full-name"
                className="font-montserrat text-secondColor font-bold text-sm"
              >
                Full Name
              </label>
              <input
                id="full-name"
                required
                type="text"
                placeholder="@eg John Doe"
                className="w-full text-white font-montserrat px-3 py-2.5 border outline-thirdColor  border-thirdColor rounded-sm bg-transparent"
              />
            </div>
            <div className="space-y-1">
              <label
                htmlFor="email"
                className="font-montserrat text-secondColor font-bold text-sm"
              >
                Email
              </label>
              <input
                id="email"
                required
                type="email"
                placeholder="@eg johndoe@gmail.com"
                className="w-full text-white font-montserrat px-3 py-2.5 border outline-thirdColor  border-thirdColor rounded-sm bg-transparent"
              />
            </div>
            <div className="space-y-1">
              <label
                htmlFor="your-message"
                className="font-montserrat text-secondColor font-bold text-sm"
              >
                Your Message
              </label>
              <textarea
                id="your-message"
                placeholder="  Hello..."
                required
                className="w-full text-white font-montserrat px-2 py-2.5 border outline-thirdColor  border-thirdColor rounded-sm bg-transparent h-[175px] resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full md:w-1/2 py-2 rounded-sm text-white bg-secondColor font-bold mx-auto"
            >
              SUBMIT
            </button>
          </div>
        </form>
        <div className="flex flex-col">
          <div className="py-5 space-y-2">
            <h3 className="title-font text-baseColor text-[2rem]">Visit Us</h3>
            <div className="flex flex-col space-y-2">
              <div className="flex justify-between gap-4 items-center flex-col md:flex-row">
                <div className="flex flex-col space-y-1 md:basis-[60%] justify-start items-start w-full">
                  <div className="flex items-center space-x-2">
                    <span className="text-secondColor text-md">
                      <IoLocationSharp />
                    </span>
                    <span className="font-montserrat font-bold text-white text-sm">
                      Tumanon Street, Barangay Tiza, Roxas City
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-secondColor text-sm">
                      <FaPhoneAlt />
                    </span>
                    <span className="font-montserrat font-bold text-white text-sm tracking-wider">
                      09073788649
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-secondColor text-sm">
                      <MdEmail />
                    </span>
                    <span className="font-montserrat font-bold text-white text-sm tracking-wider">
                      sales@suppleplant.com
                    </span>
                  </div>
                </div>
                {/* Socials */}
                <div className="flex space-y-2 flex-col w-full justify-start basis-0 md:basis-[40%]">
                  <div className="flex items-center space-x-2">
                    <span className="text-white text-sm">
                      <SiFacebook />
                    </span>
                    <span className="font-montserrat font-bold text-white text-sm tracking-wider">
                      SupplePlantPH
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-white text-sm">
                      <SiInstagram />
                    </span>
                    <span className="font-montserrat font-bold text-white text-sm tracking-wider">
                      suppleplantph
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-white text-sm">
                      <SiTiktok />
                    </span>
                    <span className="font-montserrat font-bold text-white text-sm tracking-wider">
                      suppleplantph
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-white text-sm">
                      <SiShopee />
                    </span>
                    <span className="font-montserrat font-bold text-white text-sm tracking-wider">
                      shop@suppleplantph
                    </span>
                  </div>
                </div>
              </div>
              <iframe
                className="w-full h-[300px]"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3221.5887174635377!2d122.75579897402841!3d11.57639964393105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a5f37ce889c893%3A0x78173e655094732c!2sTumanon%20Street!5e1!3m2!1sen!2sph!4v1736689833579!5m2!1sen!2sph"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConnectWithUs;

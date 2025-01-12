import { ourTeam } from "@/constant/our_team.constant";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
function OurTeam() {
  return (
    <div id="our-team" className="py-5 flex flex-col">
      <h1 className="title-font text-thirdColor text-[3.5rem] text-center">
        Meet Our <span className="text-secondColor">Team</span>
      </h1>
      <div className="px-14 lg:px-28 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-2">
        {ourTeam.map((team) => (
          <div
            data-aos={`zoom-in`}
            data-aos-duration="500"
            key={team.name}
            className="shadow-lg rounded-sm flex flex-col space-y-1 bg-white py-5"
          >
            <div className="w-28 h-28 rounded-full flex items-center justify-center border-4 border-secondColor relative self-center">
              <Image
                className=" absolute rounded-full"
                src={team.profilePic}
                fill
                sizes="100%"
                alt={`${team.name}`}
                priority
              />
            </div>
            <div className="flex flex-col space-y-2 pt-1 px-3">
              <h1 className="text-[#AC7E49] font-semibold text-xl text-center font-montserrat">
                {team.name}
              </h1>
              <h3 className="text-center text-md font-semibold font-montserrat text-thirdColor">
                {team.role}
              </h3>
              <p className="text-center font-montserrat text-slate-800">
                {team.description}
              </p>
              <div className="flex space-x-3 items-center w-full justify-center text-slate-700">
                <Link
                  href={team.socials.facebook}
                  className="text-lg hover:text-secondColor"
                >
                  <FaFacebook />
                </Link>
                <Link
                  href={team.socials.instagram}
                  className="text-lg hover:text-secondColor"
                >
                  <FaInstagram />
                </Link>
                <Link
                  href={team.socials.linkedin}
                  className="text-lg hover:text-secondColor"
                >
                  <FaLinkedin />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurTeam;

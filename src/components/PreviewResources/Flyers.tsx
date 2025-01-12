import React from "react";
import Image from "next/image";
import flyer from "../../../public/assets/suppleplant-flyer.png";
function Flyers() {
  return (
    <div className="w-full flex items-center justify-center flex-col space-y-2">
      <Image src={flyer} alt="flyer" width={300} height={300} priority />
      <a
        href="/assets/suppleplant-flyer.png"
        download="suppleplant-flyer.png"
        className="bg-secondColor text-white rounded-sm font-bold text-md py-2 px-3"
      >
        Get a Copy
      </a>
    </div>
  );
}

export default Flyers;

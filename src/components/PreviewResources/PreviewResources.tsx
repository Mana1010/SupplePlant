import React, { useState } from "react";
import Brochure from "./Brochure";
import Flyers from "./Flyers";
import { IoMdClose } from "react-icons/io";
import { useModalStore } from "@/store/useModalStore";
function PreviewResources() {
  const { setOpenResources } = useModalStore();
  const [selectedResources, setSelectedResources] = useState<
    "brochure" | "flyer"
  >("brochure");
  return (
    <div className="fixed inset-0 bg-green-950/30 z-[99999] flex items-center justify-center">
      <div className="bg-white rounded-md w-full md:w-2/3 flex flex-col items-center p-3 h-[95%]">
        <button
          onClick={setOpenResources}
          className="text-thirdColor text-2xl self-end pb-3"
        >
          <IoMdClose />
        </button>
        <header className="w-full space-x-1 grid grid-cols-2">
          <button
            onClick={() => setSelectedResources("brochure")}
            className={`border-2 border-thirdColor py-1.5 rounded-md font-montserrat ${
              selectedResources === "brochure" && "bg-thirdColor text-white"
            }`}
          >
            Brochure
          </button>
          <button
            onClick={() => setSelectedResources("flyer")}
            className={`border-2 border-thirdColor py-1.5 rounded-md font-montserrat ${
              selectedResources === "flyer" && "bg-thirdColor text-white"
            }`}
          >
            Flyer
          </button>
        </header>
        <div className="pt-3">
          {selectedResources === "brochure" ? <Brochure /> : <Flyers />}
        </div>
      </div>
    </div>
  );
}

export default PreviewResources;

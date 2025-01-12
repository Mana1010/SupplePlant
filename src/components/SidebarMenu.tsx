import React from "react";
import { navList } from "@/constant/navlist.constant";
import Link from "next/link";
import { useModalStore } from "@/store/useModalStore";
import { IoMdClose } from "react-icons/io";
function SidebarMenu() {
  const { setOpenSidebar, setOpenResources } = useModalStore();
  return (
    <div
      className={`right-0 inset-y-0 lg:w-1/4 sm:w-1/2 w-full transition-all duration-200 backdrop-blur-2xl flex items-center justify-center flex-col space-y-5 z-[9999999999] fixed`}
    >
      <button
        onClick={setOpenSidebar}
        className="text-white text-3xl absolute right-4 top-5"
      >
        <IoMdClose />
      </button>
      <ul className="flex flex-col space-y-4 w-full items-center justify-center">
        {navList.map((nav) => (
          <Link
            onClick={setOpenSidebar}
            href={nav.href}
            key={nav.href}
            className={`font-montserrat text-lg text-white shadow-none active:text-thirdColor`}
          >
            {nav.name}
          </Link>
        ))}
      </ul>
      <button
        onClick={() => {
          setOpenResources();
          setOpenSidebar();
        }}
        className="px-4 py-2 bg-[#7ED957] rounded-sm text-white"
      >
        Check Our Resources
      </button>
    </div>
  );
}

export default SidebarMenu;

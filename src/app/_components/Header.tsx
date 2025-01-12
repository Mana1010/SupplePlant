"use client";
import React from "react";
import Link from "next/link";
import Logo from "@/components/Logo";
import { useModalStore } from "@/store/useModalStore";
import { navList } from "@/constant/navlist.constant";
import SidebarMenu from "@/components/SidebarMenu";
import { VscMenu } from "react-icons/vsc";
function Header() {
  const { setOpenResources, setOpenSidebar, openSidebar } = useModalStore();
  return (
    <header className="fixed inset-x-0 top-0 pl-3 flex items-center justify-between h-[3.3rem] z-10 bg-white">
      <Link href="#home" className="flex space-x-2">
        <Logo circleSize={40} leafSize={20} />
        <h1 className="text-2xl title-font tracking-wide text-baseColor flex items-center">
          Supple
          <span className="text-secondColor">Plant</span>
        </h1>
      </Link>
      <ul className="space-x-5 hidden items-center px-3 bg-secondColor h-full lg:flex">
        {navList.map((nav) => (
          <Link
            href={nav.href}
            key={nav.href}
            className={`font-montserrat text-sm text-white active:text-thirdColor `}
          >
            {nav.name}
          </Link>
        ))}
      </ul>
      <div className="pr-4 lg:flex items-center hidden">
        <button
          onClick={setOpenResources}
          className="px-4 py-2 bg-[#7ED957] rounded-sm text-white"
        >
          Explore Our Resources
        </button>
      </div>
      <button
        onClick={setOpenSidebar}
        className="flex lg:hidden text-thirdColor text-xl font-bold mr-4"
      >
        <VscMenu />
      </button>
      {openSidebar && <SidebarMenu />}
    </header>
  );
}

export default Header;

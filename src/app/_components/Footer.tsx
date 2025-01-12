import React from "react";
import Link from "next/link";
function Footer() {
  return (
    <footer className="w-full items-center flex-col justify-center bg-[#353535] py-3 flex space-y-1 relative">
      <h1 className="text-2xl title-font tracking-wide text-baseColor flex items-center">
        Supple
        <span className="text-secondColor">Plant</span>
      </h1>
      <h3 className="text-baseColor font-bold text-sm">
        All Right Reserved 2025
      </h3>
      <Link
        href={"#home"}
        className="right-2 absolute text-baseColor underline decoration-secondColor underline-offset-2 active:text-secondColor"
      >
        Back to Top
      </Link>
    </footer>
  );
}

export default Footer;

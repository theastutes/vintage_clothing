"use client";
import Link from "next/link";
import React, { useState } from "react";
import { RiHome5Fill } from "react-icons/ri";
import { HiViewGrid } from "react-icons/hi";
import { CiUser } from "react-icons/ci";
import { usePathname } from "next/navigation";
import { auth } from "../../../auth";


 function NavBar() {

  return (
    <>
      <div 
        className={`${
          usePathname() === "/cart" ||
          (usePathname().includes("/productDetail") && "max-w-0 max-h-0")
        } fixed  sm:opacity-1 bottom-4 left-[10%] right-[10%] mx-auto p-[1px] h-24 min-w-fit sm:h-[25%] bg-white/15 backdrop-blur-3xl z-40 flex flex-row justify-between items-center rounded-full overflow-hidden`}
      >
        <Link
          className={`${
            usePathname() === "/store" ? "bg-black" : ""
          } z-50 flex items-center aspect-square justify-center transition-all duration-500 h-full rounded-full `}
          href={"/store"}
        >
          <HiViewGrid size={32} />
        </Link>

        <Link
          className={`${
            usePathname() === "/" ? "bg-black" : ""
          } z-50 flex items-center aspect-square justify-center transition-all duration-500 h-full rounded-full `}
          href={"/"}
        >
          <RiHome5Fill size={28} />
        </Link>

        { <Link
          className={`${
            usePathname() === "/account" ? "bg-black" : ""
          } z-50 flex items-center aspect-square justify-center transition-all duration-500 h-full rounded-full `}
          href={"/account"}
        >
          <CiUser size={30} />
        </Link>}
      </div>
    </>
  );
}

export default NavBar;

"use client";
import Link from "next/link";
import React from "react";
import { RiHome5Fill } from "react-icons/ri";
import { HiViewGrid } from "react-icons/hi";
import { CiUser } from "react-icons/ci";
import { usePathname } from "next/navigation";

function NavBar() {
  return (
    <>
      <div
        className={`${
          usePathname() === "/cart" && "-z-50 opacity-0"
        } fixed sm:-z-50 sm:opacity-0 bottom-4 left-[10%] right-[10%] mx-auto p-[1px] h-[12%] min-w-fit sm:h-[25%] bg-white/15 backdrop-blur-3xl z-40 flex flex-row justify-between items-center rounded-full overflow-hidden`}
      >
        {/* <div className="fixed transition-all duration-1000 flex flex-col justify-center items-start bottom-0 w-full h-full p-[2px] z-50 rounded-full">
          <div
            className={`${
              usePathname() === "/"
                ? "mx-auto"
                : usePathname() === "/store"
                ? "mr-auto -translate-x-[]"
                : "ml-auto translate-x-0"
            } h-full transition-all duration-1000 aspect-square bg-black rounded-full -z-10 `}
          />
        </div> */}

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

        <Link
          className={`${
            usePathname() === "/account" ? "bg-black" : ""
          } z-50 flex items-center aspect-square justify-center transition-all duration-500 h-full rounded-full `}
          href={"/account"}
        >
          <CiUser size={30} />
        </Link>
      </div>
    </>
  );
}

export default NavBar;

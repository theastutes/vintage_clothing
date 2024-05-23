"use client";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import Link from "next/link";
import { CiReceipt } from "react-icons/ci";
import { usePathname } from "next/navigation";
import { IoIosArrowBack } from "react-icons/io";
import { useRouter } from "next/navigation";
import LoginButton from "@/comp/LoginButton";

const TopBar = () => {
  const router = useRouter();
  return (
    <div className="top-0 z-50 h-12 w-full flex flex-row items-center justify-between px-2 p-1 backdrop-blur-3xl bg-transparent mb-2">
      <div className="h-12 w-full flex items-center justify-between w-15 text-white">
        {usePathname() !== "/" ? (
          <IoIosArrowBack
            className="cursor-pointer"
            onClick={() => {
              router.back();
            }}
            color="white"
            size={25}
          />
        ) : (
          <div className="font-bold mx-auto text-lg">VINTAGE</div>
        )}
      </div>

      <Link href={"/cart"}>
        <PiShoppingCartSimpleBold color="white" size={20} />
      </Link>

      {/* <div className="h-12 flex items-center justify-between w-15 text-white">
        <GiHamburgerMenu size={25} />
      </div> */}
    </div>
  );
};

export default TopBar;

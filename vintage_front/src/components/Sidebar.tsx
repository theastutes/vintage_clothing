"use client";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineHome, AiOutlineShoppingCart } from "react-icons/ai";
import { RxDashboard } from "react-icons/rx";
import { AiOutlineUser } from "react-icons/ai";
import { usePathname } from "next/navigation";
import { Button, buttonVariants } from "./ui/button";
import { toast } from "sonner";
import { IconType } from "react-icons/lib";

interface TabItem {
  path: string;
  icon: React.ReactNode;
  label: string;
}

function SideBar() {
  const tabs: TabItem[] = [
    { path: "/", icon: <AiOutlineHome size={26} />, label: "Home" },
    {
      path: `/store?query=${""}&category=${""}`,
      icon: <RxDashboard size={26} />,
      label: "Store",
    },
    { path: "/cart", icon: <AiOutlineShoppingCart size={26} />, label: "Cart" },
    { path: "/account", icon: <AiOutlineUser size={26} />, label: "Account" },
  ];
  return (
    <div className="fixed z-50 max-sm:hidden bg-myblack p-1 w-24 h-full text-center">
      <div className="aspect-square w-full flex justify-center items-start font-extrabold select-none text-white pt-3">
        Vintage
      </div>
      <div
        className={`
            w-full h-3/5 flex flex-col items-start justify-around  px-2 py-auto drop-shadow-md bg-myblack/30 text-white
          `}
      >
        {tabs.map(({ icon, path, label }, index) => (
          <Tab key={index} path={path} Icon={icon} label={label} />
        ))}
      </div>
    </div>
  );
}

export default SideBar;

export const Tab = ({
  path,
  Icon,
  label,
}: {
  path: string;
  Icon: React.ReactNode;
  label: string;
}) => {
  return (
    <Link
      className={`${
        usePathname() === path ? "text-black bg-mywhite " : "text-white"
      } ${buttonVariants({
        variant: "ghost",
      })} hover:bg-white/90 hover:text-black text-black flex flex-col gap-2 w-full h-auto aspect-square`}
      href={path}
    >
      {Icon}
      <div
        className={`${
          usePathname() === path ? "text-black" : ""
        } text-[10px] font-extrabold`}
      >
        {label}
      </div>
    </Link>
  );
};

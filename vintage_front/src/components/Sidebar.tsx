"use client"
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineHome, AiOutlineShoppingCart } from "react-icons/ai";
import { RxDashboard } from "react-icons/rx";
import { AiOutlineUser } from "react-icons/ai";
import { usePathname } from "next/navigation";



function SideBar() {

    return (
        <>
            <div
                className={`
           fixed w-14 h-full flex flex-col items-start gap-2  drop-shadow-md bg-mywhite
          `}>

                <Link
                    className={`${usePathname() === "/" ? "bg-brown-secondary text-mywhite" : ""
                        }  flex items-center  aspect-square justify-center transition-all duration-500 h-14  `}
                    href={"/"}
                >
                    <AiOutlineHome size={26} />
                </Link>

                <Link
                    className={`${usePathname() === "/store" ? "bg-brown-secondary text-mywhite" : ""
                        }  flex items-center  aspect-square justify-center transition-all duration-500 h-14  `}
                    href={"/store"}
                >
                    <RxDashboard size={26} />
                </Link>

                <Link href={"/cart"} className={`${usePathname() === "/cart" ? "bg-brown-secondary text-mywhite" : ""
                    }  flex items-center  aspect-square justify-center transition-all duration-500 h-14  `}>
                    <AiOutlineShoppingCart color="myblack" size={26} />
                </Link>

                <Link
                    className={`${usePathname() === "/account" ? "bg-brown-secondary text-mywhite" : ""
                        }  flex items-center  aspect-square justify-center transition-all duration-500 h-14  `}
                    href={"/account"}
                >
                    <AiOutlineUser size={26} />
                </Link>
            </div>
        </>
    );
}

export default SideBar;

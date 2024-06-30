"use client";
import Link from "next/link";
import { RiHome5Fill } from "react-icons/ri";
import { HiViewGrid } from "react-icons/hi";
import { CiUser } from "react-icons/ci";
import { usePathname } from "next/navigation";

function NavBar() {
  return (
    <>
      <div
        className={`${
          usePathname() === "/cart" ||
          (usePathname().includes("/productDetail") && "max-w-0 max-h-0")
        } fixed  sm:opacity-1 bottom-0 left-0 right-0 mx-auto p-[1px] h-14 min-w-fit sm:h-[10%]  bg-white border-t z-50 flex flex-row justify-around items-center overflow-hidden text-myblack`}
      >
        <Link
          className={`${
            usePathname() === "/store" ? "bg-brown-secondary text-mywhite" : ""
          } z-50 flex items-center aspect-square justify-center transition-all duration-500 h-full rounded-full `}
          href={"/store"}
        >
          <HiViewGrid size={32} />
        </Link>

        <Link
          className={`${
            usePathname() === "/" ? "bg-brown-secondary text-mywhite" : ""
          } z-50 flex items-center aspect-square justify-center transition-all duration-500 h-full rounded-full `}
          href={"/"}
        >
          <RiHome5Fill size={28} />
        </Link>

        {
          <Link
            className={`${
              usePathname() === "/account"
                ? "bg-brown-secondary text-mywhite"
                : ""
            } z-50 flex items-center aspect-square justify-center transition-all duration-500 h-full rounded-full `}
            href={"/account"}
          >
            <CiUser size={30} />
          </Link>
        }
      </div>
    </>
  );
}

export default NavBar;

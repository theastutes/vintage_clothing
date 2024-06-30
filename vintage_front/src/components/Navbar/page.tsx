"use client";
import Link from "next/link";
import { RiHome5Fill } from "react-icons/ri";
import { HiViewGrid } from "react-icons/hi";
import { CiUser } from "react-icons/ci";
import { usePathname } from "next/navigation";

interface itemprops {
  path: string;
  icon: React.ReactNode;
}

function NavBar() {
  const items: itemprops[] = [
    {
      path: "/store",
      icon: <HiViewGrid size={32} />,
    },
    {
      path: "/",
      icon: <RiHome5Fill size={28} />,
    },
    {
      path: "/account",
      icon: <CiUser size={30} />,
    },
  ];
  return (
    <>
      <div
        className={`${
          usePathname() === "/cart" ||
          (usePathname().includes("/productDetail") && "max-w-0 max-h-0")
        } fixed  sm:opacity-1 bottom-0 left-0 right-0 mx-auto p-[1px] h-14 min-w-fit sm:h-[10%]  bg-white border-t z-50 flex flex-row justify-around items-center overflow-hidden text-myblack`}
      >
        {items.map(({ path, icon }, index) => (
          <Item key={index} path={path} icon={icon} />
        ))}
      </div>
    </>
  );
}

export default NavBar;

export const Item = ({
  path,
  icon,
}: {
  path: string;
  icon: React.ReactNode;
}) => {
  return (
    <Link
      className={`${
        usePathname() === path ? "" : ""
      } text-black z-50 flex items-center aspect-square justify-center transition-all duration-500 h-full rounded-full `}
      href={path}
    >
      {icon}
    </Link>
  );
};

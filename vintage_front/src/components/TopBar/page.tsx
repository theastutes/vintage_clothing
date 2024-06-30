"use client";
import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CgSearch } from "react-icons/cg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoIosArrowBack } from "react-icons/io";
import { useRouter } from "next/navigation";
import { josefin } from "../ui/fonts";

const TopBar = () => {
  const router = useRouter();
  return (
    <div
      className={`${josefin.className} shadow-sm fixed text-myblack  bg-white top-0 z-50 h-14 sm:h-14 w-full flex flex-row items-center justify-between px-4 `}
    >
      <div className="h-8 w-full flex items-center justify-between w-15">
        {usePathname() !== "/" ? (
          <IoIosArrowBack
            className="cursor-pointer"
            onClick={() => {
              router.back();
            }}
            color="black"
            size={22}
          />
        ) : (
          <div className="font-bold  text-brown text-xl ">VINTAGE</div>
        )}
      </div>
      <div className="flex flex-row  w-[30%] justify-end gap-6">
        <Link
          className={`${usePathname() === "/search" ? "hidden" : ""}`}
          href={"/search"}
        >
          <CgSearch size={25} color="myblack" />
        </Link>
        <Link href={"/cart"} className="sm:hidden">
          <AiOutlineShoppingCart color="myblack" size={28} />
        </Link>
      </div>
    </div>
  );
};

export default TopBar;

// const LoginButton = async () => {
//   const session = await auth();
//   const user = session?.user;

//   return (
//     <>
//       {user ? (
//         <div className="|--topbar--| flex flex-row ">
//           <Link
//             className={`hover:underline transition-all duration-700`}
//             href={"/account"}
//           >
//             {session?.user?.name}
//           </Link>
//           <form
//             className="text-center flex items-center justify-center"
//             action={async () => {
//               "use server";
//               await signOut();
//             }}
//           >
//             <button
//               className="text-xs bg-white/20 backdrop-blur-3xl py-1 px-4 rounded-lg"
//               type="submit"
//             >
//               LogOut
//             </button>
//           </form>
//         </div>
//       ) : (
//         <form
//           className="w-full h-full text-center flex items-center justify-center"
//           action={async () => {
//             "use server";

//             await signIn("google");
//           }}
//         >
//           <button
//             className="text-xs h-8 aspect-square bg-white/20 backdrop-blur-3xl py-1 px-4 rounded-full"
//             type="submit"
//           >
//             {/* LogIn */}
//             {/* <CiReceipt /> */}
//           </button>
//         </form>
//       )}
//     </>
//   );
// };

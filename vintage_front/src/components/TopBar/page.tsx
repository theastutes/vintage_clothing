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
    <div className="shadow-sm fixed bg-white/30 backdrop-blur-3xl  top-0 z-50 h-8 w-full flex flex-row items-center justify-between px-2 p-1 mb-2">
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
          <div className="font-bold mx-auto text-lg text-black">VINTAGE</div>
        )}
      </div>
      <Link href={"/cart"}>
        <PiShoppingCartSimpleBold color="black" size={18} />
      </Link>
      {/* <div className="h-12 flex items-center justify-between w-15 text-white">
        <GiHamburgerMenu size={25} />
      </div> */}
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

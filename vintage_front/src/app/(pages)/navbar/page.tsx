import Link from "next/link";
import React from "react";
import { auth, signIn, signOut } from "../../../../auth";
import { RiHome5Fill } from "react-icons/ri";
import { HiViewGrid } from "react-icons/hi";
import { CiUser } from "react-icons/ci";
async function NavBar() {

  const session = await auth();
  const user = session?.user;

  return (
    
    <div className="absolute bottom-4 left-24 right-24 p-[2px] bg-white/20 backdrop-blur-sm z-50 flex flex-row justify-between items-center h-16 rounded-full ">

     <Link
          className="  flex backdrop-blur-xl items-center aspect-square justify-center h-full rounded-full "
          href={"/store"}
        >
          <HiViewGrid  size={32}/>
        </Link>

        <Link className="bg-black/90 backdrop-blur-xl flex items-center aspect-square justify-center h-full rounded-full" href={"/"}>
        <RiHome5Fill size={28}/>
      </Link>

        <Link
          className=" flex backdrop-blur-xl items-center aspect-square justify-center h-full rounded-full"
          href={"/cart"}
        >
         <CiUser size={30}/>
        </Link>


  

      
        {/* {user &&
          <div className="flex flex-row">
            <Link
              className="hover:underline transition-all duration-700"
              href={"/account"}
            >
              {session?.user?.name}
            </Link>
            <form
              className="text-center flex items-center justify-center"
              action={async () => {
                "use server";
                await signOut();
              }}
            >
              <button
                className="px-2  "
                type="submit"
              >
               signout
              </button>
            </form>
          </div>
        }
        {!user &&
          <form
            className="w-full h-full text-center flex items-center justify-center"
            action={async () => {
              "use server";

              await signIn("google");

            }}
          >
            <button
              className="p-4 px-12   rounded-lg"
              type="submit"
            >
              signin
            </button>
          </form>
        } */}
      </div>
     
  );
}

export default NavBar;

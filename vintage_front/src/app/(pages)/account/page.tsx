import LoginButton from "@/comp/LoginButton";
import React from "react";
import { auth } from "../../../../auth";
import Image from "next/image";

const page = async () => {
  const session = await auth();
  return (
    <>
      <div className="-mt-11 mb-3 w-full">
        <LoginButton />
      </div>
      <div className="h-screen w-full flex flex-col sm:flex-row items-center text-2xl">
        <div className="sm:w-1/2 sm:h-full h-fit flex items-start justify-center w-full">
          <div className="flex relative items-center justify-around gap-2 h-32 w-full sm:h-[44%] p-2 text-black">
            <div className="h-full aspect-square bg-white/20 rounded-2xl overflow-hidden">
              <Image
                src={session?.user?.image ?? ""}
                alt="User Image"
                height={400}
                width={400}
                className=" h-full aspect-square"
              />
            </div>

            <div className="w-full h-full bg-white rounded-2xl"></div>
          </div>
        </div>

        <div className="sm:h-full sm:w-1/2  w-full h-full flex items-start justify-center">
          <div className="grid grid-flow-col grid-cols-2 grid-rows-2 gap-2 p-2 sm:h-[86%] h-[50%] w-full text-xs">
            <div className="bg-white text-black rounded-2xl flex items-center justify-center">
              Orders
            </div>
            <div className="bg-white text-black rounded-2xl flex items-center justify-center">
              Addresses
            </div>
            <div className="bg-white text-black rounded-2xl flex items-center justify-center">
              Addresses
            </div>
            <div className="bg-white text-black rounded-2xl flex items-center justify-center">
              Orders
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;

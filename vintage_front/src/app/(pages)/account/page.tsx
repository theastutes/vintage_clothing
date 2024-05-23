import LoginButton from "@/comp/LoginButton";
import React from "react";
import { auth } from "../../../../auth";
import Image from "next/image";
import { PiPerson } from "react-icons/pi";
import { HiUser } from "react-icons/hi";

const page = async () => {
  const session = await auth();
  return (
    <>
      <div className="h-screen overflow-hidden overflow-y-scroll w-full flex flex-col sm:flex-row items-center text-2xl">
        <div className="sm:w-1/2 sm:h-full h-fit flex items-start justify-center w-full">
          <div className="relative grid grid-cols-3 col-span-2 gap-2 w-full h-32 sm:h-[44%] p-2 text-black">
            <div className="flex justify-center items-center h-full sm:w-[100%] aspect-square p-2 bg-white/5 rounded-2xl overflow-hidden">
              {session?.user ? (
                <Image
                  src={session?.user?.image ?? ""}
                  alt="User Image"
                  height={400}
                  width={400}
                  style={{ objectFit: "cover" }}
                  className="h-full aspect-square rounded-full"
                />
              ) : (
                <HiUser size={30} color="white" />
              )}
            </div>

            <div className="text-white sm:py-10  flex flex-col items-center justify-center text-xs text-wrap col-span-2 w-full h-full bg-white/5 rounded-2xl overflow-hidden">
              {session?.user ? (
                <>
                  <div className="w-full rounded-md h-full flex items-center justify-between px-5">
                    <span className="w-1/4">Name :</span>
                    <span className="w-full">{session?.user?.name}</span>
                  </div>
                  <div className="w-full rounded-md h-full flex items-center justify-between px-5">
                    <span className="w-1/4">Email :</span>
                    <span className="w-full">{session?.user?.email}</span>
                  </div>
                </>
              ) : (
                <div>
                  <div className="">
                    <LoginButton />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="sm:h-full sm:w-1/2  w-full h-full flex items-start justify-center">
          <div className="grid grid-flow-col grid-cols-2 grid-rows-2 gap-2 p-2  sm:h-[86%] h-[50%] w-full text-xs">
            <div className="bg-white/5 text-sky-500  rounded-2xl flex items-center justify-center">
              Orders
            </div>
            <div className="bg-white/5 text-sky-500  rounded-2xl flex items-center justify-center">
              Addresses
            </div>
            <div className="bg-white/5 text-sky-500  rounded-2xl flex items-center justify-center">
              Addresses
            </div>
            <div className="bg-white/5 text-sky-500  rounded-2xl flex items-center justify-center">
              Orders
            </div>
          </div>
        </div>
        {session?.user && (
          <div className="absolute w-full bottom-36 sm:-bottom-12">
            <LoginButton />
          </div>
        )}
      </div>
    </>
  );
};

export default page;

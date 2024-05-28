import React, { Suspense } from "react";
import Image from "next/image";
import ItemView from "./ItemView";
import Loading from "@/app/Loading";

const page = async () => {
  return (
    <>
      <div className="w-screen h-screen overflow-y-scroll overflow-hidden pt-10 pb-36 sm:pb-0 text-2xl">
        <div className="w-full text-xl px-3 font-bold h-fit text-black z-10">
          Cart
        </div>
        <Suspense fallback={<Loading />}>
          <ItemView />
        </Suspense>
        <div className="fixed px-4 bottom-0 w-screen h-36 sm:h-32 sm:right-2 sm:top-16 sm:w-56 sm:rounded-md flex flex-col items-center justify-center gap-4  bg-white/30 backdrop-blur-lg">
          <div className="flex justify-between items-center w-full px-4 font-semibold text-black text-lg sm:text-xs">
            <span>Total :</span>
            <span>₹999</span>
          </div>
          <hr className="border-white w-full" />
          <button className="w-full px-5 py-3 sm:py-2 rounded-md max-w-48 text-white bg-sky-400 text-sm sm:text-xs">
            Continue
          </button>
        </div>
      </div>
    </>
  );
};

export default page;

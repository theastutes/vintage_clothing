"use client";
import React, { useEffect } from "react";

const page = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center text-2xl">
      <div className="flex items-center justify-around gap-2 w-full h-1/6 p-2 text-black">
        <div className="w-32 aspect-square bg-white rounded-full"></div>
        <div className="w-full h-32 bg-white rounded-2xl"></div>
      </div>
      <div className="grid grid-flow-col grid-cols-2 grid-rows-2 gap-2 p-2 h-[40%] w-full">
        <div className="bg-white text-black rounded-2xl flex items-center justify-center">
          Orders
        </div>
        <div className="bg-white text-black rounded-2xl flex items-center justify-center">
          Orders
        </div>
        <div className="bg-white text-black rounded-2xl flex items-center justify-center">
          Orders
        </div>
        <div className="bg-white text-black rounded-2xl flex items-center justify-center">
          Orders
        </div>
      </div>
    </div>
  );
};

export default page;

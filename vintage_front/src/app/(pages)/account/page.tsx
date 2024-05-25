"use client"
import LoginButton from "@/comp/LoginButton";
import React from "react";
import { auth } from "../../../../auth";
import Image from "next/image";
import { PiPerson } from "react-icons/pi";
import { HiUser } from "react-icons/hi";
import axios from "axios";
import { loginUser } from "../../../../action/action";
import Link from "next/link";

const page =  () => {

 
  // let user = document.cookie;

  const handleLogin =  () => {

    window.open('http://localhost:4000/auth/google',"_self");

  }


  return (
    <>
      <div className="h-screen overflow-hidden overflow-y-scroll w-full flex flex-col sm:flex-row bg-black items-center text-2xl">
        <div className="sm:w-1/2 sm:h-full h-fit flex items-start justify-center bg-black w-full">
          <div className="relative grid grid-cols-3 col-span-2 gap-2 w-full h-32 sm:h-[44%] p-2 text-black">
            <div className="flex justify-center items-center h-full sm:w-[100%] aspect-square p-2 bg-white/10 rounded-2xl overflow-hidden">
              <Image
                src={""}
                alt="User Image"
                height={400}
                width={400}
                style={{ objectFit: "cover" }}
                className="h-full aspect-square rounded-full"
              />

            </div>

            <div className="text-white sm:py-10  flex flex-col items-center justify-center text-xs text-wrap col-span-2 w-full h-full bg-white/5 rounded-2xl overflow-hidden">
              <div className="w-full rounded-md h-full flex items-center justify-between px-5">
                <span className="w-1/4">Name :</span>
                <span className="w-full">name</span>
              </div>
              <div className="w-full rounded-md h-full flex items-center justify-between px-5">
                <span className="w-1/4">Email :</span>
                <span className="w-full">email</span>
              </div>
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
        <form
          className="absolute bottom-32"
          action ={ () => { handleLogin()}}
          
        >
          <button type="submit"> Login</button>
         
        </form>
      </div>
    </>
  );
};

export default page;

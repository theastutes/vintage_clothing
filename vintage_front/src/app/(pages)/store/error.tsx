"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { HiRefresh } from "react-icons/hi";
import { IoIosArrowBack } from "react-icons/io";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.log(error);
  }, [error]);
  const router = useRouter();

  return (
    <div className="h-full w-full m-auto flex items-center justify-center bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white/5 backdrop-blur-3xl shadow-md rounded-lg p-8">
        <h2 className="text-lg font-extrabold text-white mb-4">
          Make sure to check your connection
        </h2>
        <p className="text-sky-700 text-[10px] truncate leading-tight mb-4">
          {error.message || "An unexpected error occurred."}
        </p>
        <div className="w-full h-10 flex flex-row-reverse gap-2">
          <button
            onClick={reset}
            className="font-mono text-xs text-white h-8 w-full flex justify-center items-center gap-2 px-4 border border-transparent font-medium rounded-md bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <HiRefresh />
            <span>Try Again</span>
          </button>
          <button
            className="font-mono text-xs text-white h-8 w-full flex justify-center items-center gap-1 px-4 border border-transparent font-medium rounded-md bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={() => {
              router.back();
            }}
          >
            <IoIosArrowBack />
            <span>Go Back</span>
          </button>
        </div>
      </div>
    </div>
  );
}

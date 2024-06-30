"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

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
    <div className="h-full w-full flex items-center justify-center bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white/5 backdrop-blur-3xl shadow-md rounded-lg p-8">
        <h2 className="text-lg font-extrabold text-white mb-4">
          Make sure to check your connection
        </h2>
        <p className="text-sky-700 text-xs mb-4">
          {error.message || "An unexpected error occurred."}
        </p>
        <div className="w-full h-10 flex gap-2">
          <button
            onClick={reset}
            className="font-mono text-xs text-white h-8 w-full flex justify-center items-center px-4 border border-transparent font-medium rounded-md bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Try Again
          </button>
          <button
            className="font-mono text-xs text-white h-8 w-full flex justify-center items-center px-4 border border-transparent font-medium rounded-md bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={() => {
              router.back();
            }}
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}

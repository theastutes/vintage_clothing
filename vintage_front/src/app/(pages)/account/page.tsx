"use client";
import React, { useEffect } from "react";

const page = () => {
  return (
    <div className="h-screen flex items-center justify-center text-2xl">
      Account
      <form
        className="w-full h-full text-center flex items-center justify-center"
        onSubmit={() => {
          try {
            throw new Error("jhgfghj");
          } catch (error) {
            throw new Error("sign in error");
          }
        }}
      >
        <button type="submit">throw error</button>
      </form>
    </div>
  );
};

export default page;

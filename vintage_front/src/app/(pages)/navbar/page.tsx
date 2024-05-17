import Link from "next/link";
import React from "react";
import { signOut } from "../../../../auth";

function NavBar() {
  return (
    <div className="bg-black py-4 text-white flex items-center justify-around font-mono">
      <Link className="hover:underline transition-all duration-700" href={"/"}>
        Home
      </Link>
      <Link
        className="hover:underline transition-all duration-700"
        href={"/cart"}
      >
        Cart
      </Link>
      <Link
        className="hover:underline transition-all duration-700"
        href={"/store"}
      >
        {" "}
        Store
      </Link>
      <Link
        className="hover:underline transition-all duration-700"
        href={"/account"}
      >
        Account
      </Link>
      <form
        className="text-center flex items-center justify-center"
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button
          className="px-2 font-mono font-bold text-white bg-white/30 hover:bg-white hover:text-black active:bg-white/30 active:text-white transition-colors duration-300 rounded-lg"
          type="submit"
        >
          S I G N O U T
        </button>
      </form>
    </div>
  );
}

export default NavBar;

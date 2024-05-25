import React from "react";
import { auth } from "../../../../auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { getCart } from "../../../../action/action";
import { IItem } from "../../../../types/types";

const page = async () => {
  const session = await auth();
  const email = "yash@mail.com";
  const cart: IItem[] | undefined = await getCart({ email });
  if (!session?.user) redirect("/");
  return (
    <div className="grid grid-rows-3 sm:grid-cols-3 gap-2 text-2xl h-screen overflow-y-scroll overflow-hidden p-2 sm:pb-2 pb-14">
      <div className="flex flex-col gap-2 items-center justify-start overflow-y-scroll overflow-hidden text-xs w-full row-span-3 sm:col-span-2 rounded-md">
        {cart && cart.map((item, index) => <Item />)}
      </div>
      <div className="flex flex-col justify-around items-center w-full p-2 h-full min-h-32 text-lg sm:text-lg sm:row-span-1 sm:col-span-1 bg-white/5 rounded-md">
        <div className="w-full flex justify-between items-center">
          {" "}
          <span className="text-sky-500">Subtotal :</span> <span>Rs. 500</span>
        </div>
        <Link
          className="flex items-center justify-center bg-sky-500 w-full text-white px-4 py-2 rounded-md text-xs"
          href={""}
        >
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default page;

const Item = () => {
  return (
    <div className="grid grid-cols-4 gap-1 p w-full h-24 rounded-md overflow-hidden">
      <div className="flex items-center justify-center bg-white/10 rounded-md col-span-1">
        l
      </div>
      <div className="flex items-center justify-center bg-white/10 rounded-md col-span-3">
        r
      </div>
    </div>
  );
};

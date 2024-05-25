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
      {cart && cart.map((item, index) => <div>{item.productId}</div>)}
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

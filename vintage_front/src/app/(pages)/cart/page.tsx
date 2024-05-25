import React from "react";
import { auth } from "../../../../auth";
import { getCart, getProduct } from "../../../../action/action";
import { IItem, IProduct } from "../../../../types/types";
import Image from "next/image";
import { BsTrash3 } from "react-icons/bs";
import { RiAddFill } from "react-icons/ri";
import { IoMdRemove } from "react-icons/io";

const page = async () => {
  const session = await auth();
  const email = "yashbishnoidelu@gmail.com";
  const cart: IItem[] | undefined = await getCart({ email });

  return (
    <>
      <div className="fixed h-screen  w-screen -z-10 bottom-0 ">
        <Image
          src={
            "https://images.pexels.com/photos/1234853/pexels-photo-1234853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          }
          quality={1}
          alt=""
          fill={true}
          style={{ objectFit: "cover" }}
          className="h-screen"
        />
      </div>
      <div className="fixed h-screen  w-screen bg-white/70 backdrop-blur-sm -z-10 bottom-0 "></div>
      <div className="overflow-hidden overflow-y-scroll pt-14 grid grid-rows-3 sm:grid-cols-3 gap-2 text-2xl h-screen p-2 sm:pb-2 pb-14 ">
        <div className="col-span-2 flex flex-col items-center justify-between h-fit">
          {cart && cart.map((item, index) => <Item item={item} />)}
        </div>
      </div>
    </>
  );
};

export default page;

const Item = async ({ item }: { item: IItem }) => {
  const id = item.productId;
  const product: IProduct | undefined = await getProduct({
    productId: id,
  });
  return (
    <>
      <div className="relative flex items-center justify-between w-full h-24 rounded-md overflow-hidden py-2">
        <Image
          className=" bg-white/10 w-[28%] rounded-md h-full shadow-md shadow-gray-400"
          src={product?.images[0]!}
          alt="image"
          height={200}
          width={200}
        />

        <div className="grid grid-cols-4 gap-2 py-3 rounded-md w-[68%] overflow-hidden">
          <div className=" flex flex-col p-1 items-center justify-between gap-2 h-full col-span-3 overflow-hidden ">
            <div className=" flex flex-col  items-center justify-between w-full h-full p-1 text-black">
              <div className="w-full h-full pl-4 font-semibold text-sm">
                {product?.title}
              </div>
              <div className="w-full h-full pl-4 uppercase text-xs leading-tight font-semibold">
                {product?.category}
              </div>
            </div>
            <div className=" flex items-center justify-around text-xs w-full h-full px-4">
              <button className="bg-black aspect-square size-4 shadow-sm shadow-gray-700 active:shadow-gray-200 transition-all duration-200 overflow-hidden flex items-center justify-center rounded-sm">
                <IoMdRemove />
              </button>
              <span className="bg-black aspect-square size-4 shadow-sm shadow-gray-700 overflow-hidden flex items-center justify-center rounded-sm">
                {item.quantity}
              </span>
              <button className="bg-black aspect-square size-4 shadow-sm shadow-gray-700 active:shadow-gray-200 transition-all duration-200 overflow-hidden flex items-center justify-center rounded-sm">
                <RiAddFill />
              </button>
            </div>
          </div>
          <div className=" flex flex-col items-center justify-between gap-2 max-h-full h-full rounded-md">
            <div className="flex text-black items-center justify-center text-sm font-semibold truncate w-full h-full">
              ₹{product?.sp! * item.quantity}
            </div>
            <div className=" flex items-center justify-center w-full h-full">
              <div className="bg-black aspect-square size-6 shadow-sm shadow-gray-700 active:shadow-gray-200 transition-all duration-200 overflow-hidden flex items-center justify-center rounded-sm">
                <BsTrash3 size={12} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

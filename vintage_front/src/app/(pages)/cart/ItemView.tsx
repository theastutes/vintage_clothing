import Image from "next/image";
import React from "react";
import { BsTrash3 } from "react-icons/bs";
import { IoMdRemove } from "react-icons/io";
import { RiAddFill } from "react-icons/ri";
import { IItem, IProduct } from "../../../../types/types";
import { getCart, getProduct } from "../../../../action/action";
import { auth } from "../../../../auth";
import ToastNotification from "@/comp/ToastNotification";

interface props {
  success?: IItem[];
  error?: string;
}

const ItemView = async () => {
  const session = await auth();
  if (!session?.user) {
    <ToastNotification message={"Sign in to access cart"} />;
  }
  const email = session?.user?.email;

  const { success, error }: props = await getCart({ email });
  if (error) {
    return (
      <ToastNotification
        message={error}
        description="There was an issue retrieving your cart."
      />
    );
  }
  if (!success || success.length === 0) {
    return (
      <ToastNotification
        message="Cart is empty"
        description="Add items to your cart to see them here."
      />
    );
  }
  const cart = success;

  return (
    <div className="w-full sm:w-[70%] flex flex-col items-center justify-between h-fit p-2 ">
      {cart &&
        cart?.map((item, index) => (
          <>
            <Item key={index} item={item} />
            <hr className=" border-gray-500/50 border-1 w-full" />
          </>
        ))}
    </div>
  );
};

export default ItemView;

const Item = async ({ item }: { item: IItem }) => {
  const id = item.productId;
  const product: IProduct | undefined = await getProduct({ productId: id });
  const session = await auth();
  const email = session?.user?.email;
  const handleUpdate = async () => {
    console.log(item);
    //await updateCart(item.quantity, item.productId, email)
  };

  return (
    <>
      <div className="relative flex items-center justify-between w-full h-24 rounded-md overflow-hidden py-2 text-black">
        <div className="h-full aspect-square">
          <Image
            className=" bg-white/10 rounded-md h-full w-full aspect-square shadow-md shadow-gray-400"
            src={product?.images[0]!}
            alt="image"
            height={200}
            width={200}
          />
        </div>

        <form className="grid grid-cols-4 gap-2 py-3 rounded-md w-full overflow-hidden">
          <div className=" flex flex-col p-1 items-center justify-between gap-2 h-full col-span-3 overflow-hidden ">
            <div className=" flex flex-col  items-center justify-between w-full h-full p-1">
              <div className="w-full h-full pl-4 font-semibold text-sm">
                {product?.title}
              </div>
              <div className="w-full h-full pl-4 uppercase text-xs leading-tight font-semibold">
                {product?.category}
              </div>
            </div>
            <div className=" flex items-center justify-around text-xs w-full h-full px-4">
              <div className="bg-white aspect-square size-4 shadow-sm shadow-gray-700 active:shadow-gray-200 transition-all duration-200 overflow-hidden flex items-center justify-center rounded-sm cursor-pointer">
                <IoMdRemove />
              </div>
              <span className="bg-white aspect-square size-4 shadow-sm shadow-gray-700 overflow-hidden flex items-center justify-center rounded-sm">
                {item.quantity}
              </span>
              <div className="bg-white aspect-square size-4 shadow-sm shadow-gray-700 active:shadow-gray-200 transition-all duration-200 overflow-hidden flex items-center justify-center rounded-sm cursor-pointer">
                <RiAddFill />
              </div>
            </div>
          </div>
          <div className=" flex flex-col items-center justify-between gap-2 max-h-full h-full rounded-md">
            <div className="flex text-black items-center justify-center text-sm font-semibold truncate w-full h-full">
              ₹{product?.sp! * item.quantity}
            </div>
            <div className=" flex items-center justify-center w-full h-full">
              <div className="bg-white aspect-square size-6 shadow-sm shadow-gray-700 active:shadow-gray-200 transition-all duration-200 overflow-hidden flex items-center justify-center rounded-sm">
                <BsTrash3 size={12} />
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

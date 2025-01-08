"use client";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Card } from "@nextui-org/card";
import React from "react";
import { CiShoppingCart } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";
import { addToCart } from "../../../../action/action";
import { IProduct } from "../../../../types/types";
import { buttonVariants } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";

interface Props {
  item: IProduct;
}

const AddToCart: React.FC<Props> = ({ item }) => {
  const router = useSearchParams();
  return (
    <Drawer>
      <Card
        isBlurred
        isPressable
        shadow="lg"
        className="select-none p-1 h-[118px] min-h-[118px] w-[calc(100%_-_32px)]  mx-4 rounded-full flex items-center flex-row justify-between overflow-hidden border-1 border-gray-300"
      >
        <Price price={item.sp} />
        <DrawerTrigger
          type="submit"
          className="bg-black h-[110px] w-auto aspect-square text-white font-extrabold flex items-center justify-center overflow-hidden rounded-full text-2xl"
        >
          <IoIosArrowForward size={40} className="text-2xl" />
          {/* <span>Add to cart</span> */}
        </DrawerTrigger>
      </Card>

      <DrawerContent className="border-0 bg-white/20">
        <DrawerHeader className="bg-transparent">
          <DrawerTitle className="flex items-center justify-center gap-2">
            <CiShoppingCart size={26} /> <span>Your Product</span>
          </DrawerTitle>
          <DrawerDescription className="bg-transparent text-gray-900">
            Check Products in Cart to Proceede
          </DrawerDescription>
        </DrawerHeader>
        <div>
          <ol>
            <li>Name : {item?.title}</li>
            <li>Color: {router.get("color")}</li>
            <li>Size : {router.get("size")}</li>
          </ol>
        </div>
        <DrawerFooter className="bg-transparent">
          <form
            className="w-full h-full"
            // action={async () => {
            //   "use server";
            //   await addToCart(item._id);
            // }}
          >
            <button
              onClick={() => addToCart(item._id)}
              type="submit"
              className={`bg-black w-full ${buttonVariants({
                variant: "default",
              })}`}
            >
              Add to Cart
            </button>
          </form>
          <DrawerClose>
            <div
              className={`bg-black w-full ${buttonVariants({
                variant: "default",
              })}`}
            >
              Cancel
            </div>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default AddToCart;

const Price = ({ price }: { price: number }) => {
  return (
    <div className="flex flex-col items-center justify-center h-28 w-40">
      <div className="text-gray-700 text-tiny leading-tight">Total Price</div>
      <div className="relative font-extrabold text-black flex text-3xl">
        <span className="text-xs flex justify-start items-start">₹</span>
        {price}
      </div>
    </div>
  );
};

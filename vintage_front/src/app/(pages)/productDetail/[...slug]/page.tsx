import Image from "next/image";
import {
  addToCart,
  getAddress,
  getProduct,
} from "../../../../../action/action";
import { IAddress, IProduct } from "../../../../../types/types";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { CiMapPin } from "react-icons/ci";
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
import { auth } from "../../../../../auth";

const Page = async ({ params }: { params: { slug: string } }) => {
  const productId = params.slug;
  const item: IProduct | undefined = await getProduct({
    productId,
  });
  const session = await auth();
  // const address: [IAddress] | null = await getAddress(
  //   session?.user?.email ?? ""
  // );
  return (
    <FixedHeightContainer className="">
      <div className="relative w-full h-full flex items-start justify-between flex-col sm:flex-row  overflow-hidden">
        {/* <div className="w-full flex items-center justify-center p-4 bg-red-900"> */}

        {/* </div> */}

        <div className="w-full min-w-full h-[65%] min-h-[65%] sm:w-[40%] sm:min-w-[40%] sm:h-[84%] sm:min-h-[84%] rounded-b-3xl overflow-hidden bg-white/15 relative text-center">
          <Images images={item?.images ?? [""]} />
          {/* <Image
            className="my-auto mx-auto"
            src={item?.images[0] ?? ""}
            alt=""
            height={1000}
            width={1000}
            quality={100}
            style={{ objectFit: "fill" }}
          /> */}
        </div>
        {/* <Location address={address && address[0]} /> */}
        <div className="relative flex flex-col items-start justify-start bg-white w-full h-[35%] sm:w-[60%] sm:h-[84%] rounded-md">
          <section className="flex flex-col  items-center justify-center w-full text-black px-3 p-2 text-3xl">
            <h1 className="font-extrabold">{item?.title}</h1>
            <p className="px-8 leading-tight line-clamp-6 text-medium text-gray-600 text-center">
              {item?.details}
            </p>
            {/* <Price price={item?.sp ?? 0} /> */}
          </section>

          {/* <CreateItem
            productId={item?._id}
            sizes={item?.sizes}
            email={session?.user?.email!}
          /> */}

          <div className="flex w-full h-full">
            <div className="w-full gap-1 flex items-center justify-between h-20 mt-auto">
              <AddToCart id={productId} />
            </div>
          </div>
        </div>
      </div>
    </FixedHeightContainer>
  );
};
export default Page;

import { CiShoppingCart } from "react-icons/ci";
import FixedHeightContainer from "../FixedHeightContainer";
import { Card } from "@nextui-org/card";
import Images from "./Images";
const AddToCart = ({ id }: { id: string }) => {
  return (
    <Drawer>
      <Card
        isBlurred
        isPressable
        shadow="lg"
        className="w-[calc(100%_-_32px)] absolute bottom-4 mx-4 rounded-full flex items-center flex-row justify-between overflow-hidden border-1 border-gray-400"
      >
        <Price price={99} />
        <DrawerTrigger
          type="submit"
          className="bg-black h-28 w-auto aspect-square text-white font-extrabold flex items-center justify-center overflow-hidden rounded-full text-2xl"
        >
          <IoIosArrowForward size={40} className="text-2xl" />
          {/* <span>Add to cart</span> */}
        </DrawerTrigger>
      </Card>

      <DrawerContent className="border-0">
        <DrawerHeader className="bg-transparent">
          <DrawerTitle className="flex items-center justify-center gap-2">
            <CiShoppingCart size={26} /> <span>Added To Cart</span>
          </DrawerTitle>
          <DrawerDescription className="bg-transparent">
            Check Products in Cart to Proceede
          </DrawerDescription>
        </DrawerHeader>

        <DrawerFooter className="bg-transparent">
          <form
            className="w-full h-full"
            action={async () => {
              "use server";
              await addToCart(id);
            }}
          >
            <button className="mx-auto w-full px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-300 active:bg-blue-400 text-black">
              Add to Cart
            </button>
          </form>
          <DrawerClose>
            <button className="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-300 active:bg-blue-400 text-black">
              Cancel
            </button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

const Price = ({ price }: { price: number }) => {
  return (
    <div className="flex flex-col items-center justify-center h-28 w-40">
      <div className="text-gray-500 text-tiny leading-tight">Total Price</div>
      <div className="relative font-extrabold text-black flex text-3xl">
        <span className="text-xs flex justify-start items-start">₹</span>
        {price * 20}
      </div>
    </div>
  );
};

export const Location = ({ address }: { address: IAddress | null }) => {
  return (
    <div className="flex w-full px-4 py-2 items-center justify-start gap-2 line-clamp-1 truncate sm:text-xs text-sm text-black bg-white">
      <CiMapPin />{" "}
      <div>
        {" "}
        Delivering to{" "}
        <span className="font-bold">{address && address.town}</span>
        {"  "}
        <span className="text-blue-600">
          {address && address.pincode}
        </span> - <span className="cursor-pointer">Update location</span>
      </div>
      <IoIosArrowDown className="cursor-pointer" />
    </div>
  );
};

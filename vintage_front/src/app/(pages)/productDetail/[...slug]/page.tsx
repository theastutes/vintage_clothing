import Image from "next/image";
import { addToCart, getProduct } from "../../../../../action/action";
import { IProduct } from "../../../../../types/types";
import { IoIosArrowDown } from "react-icons/io";
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
import { Button } from "@/components/ui/button";

const Page = async ({ params }: { params: { slug: string } }) => {
  const productId = params.slug;
  const item: IProduct | undefined = await getProduct({
    productId,
  });
  return (
    <div className="flex flex-col h-screen max-h-screen w-full overflow-hidden">
      <div className="flex w-full mt-10 sm:mt-8 px-4 py-2 items-center justify-start gap-2 line-clamp-1 truncate sm:text-xs text-sm text-black bg-white">
        <CiMapPin /> <div> Delivering to Abohar 152116 -Update location</div>
        <IoIosArrowDown />
      </div>
      <div className="relative w-full h-full flex items-start justify-between flex-col sm:flex-row">
        <div className="w-full h-[65%] sm:w-[40%] sm:h-[84%] bg-white/20 rounded-md">
          <Image
            className="w-full h-full bg-white/20"
            src={item?.images[0]!}
            alt=""
            height={500}
            width={500}
          />
        </div>

        <div className="relative flex flex-col items-start justify-start bg-white w-full h-[35%] sm:w-[60%] sm:h-[84%] rounded-md">
          <div className="flex items-center justify-between w-full text-black font-extralight px-3 p-2 text-3xl">
            <div>{item?.title}</div>
            <Price price={item?.sp ?? 0} />
          </div>

          <div className="flex w-full h-full">
            <div className="w-full gap-1 flex items-center justify-between h-20 mt-auto">
              <AddToCart productId={productId} />
              <Checkout />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page;

const AddToCart = ({ productId }: { productId: string }) => {
  return (
    <Drawer>
      <form
        className="w-full h-full"
        action={async () => {
          "use server";
          await addToCart({ productId });
        }}
      >
        <DrawerTrigger
          type="submit"
          className="bg-yellow-400 h-full w-full text-black text-lg rounded-tr-md"
        >
          <div className="">Add to cart</div>
        </DrawerTrigger>
      </form>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Are you absolutely sure?</DrawerTitle>
          <DrawerDescription>This action cannot be undone.</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <button className="text-black">Submit</button>
          <DrawerClose>
            <Button variant="outline" className="text-black">
              Cancel
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

const Checkout = () => {
  return (
    <button className="bg-yellow-400 h-full w-full text-black text-lg rounded-tl-sm">
      Checkout
    </button>
  );
};

const Price = ({ price }: { price: number }) => {
  return (
    <div className="w-full flex items-center justify-end gap-4">
      <div className="text-3xl font-extralight text-red-600">-31%</div>
      <div className="relative text-black flex text-3xl">
        <span className="text-xs flex justify-start items-start">₹</span>
        {price * 20}
      </div>
    </div>
  );
};

/* <div className="w-full px-4">
  <hr className="w-full" />
</div>; */

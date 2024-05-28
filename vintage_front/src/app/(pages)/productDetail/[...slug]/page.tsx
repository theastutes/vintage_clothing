import Image from "next/image";
import { addToCart, getProduct } from "../../../../../action/action";
import { IProduct } from "../../../../../types/types";
import { IoIosArrowDown } from "react-icons/io";
import { CiMapPin } from "react-icons/ci";

const Page = async ({ params }: { params: { slug: string } }) => {
  const productId = params.slug;
  const item: IProduct | undefined = await getProduct({
    productId,
  });
  return (
    <>
      {/* <div className="w-full h-8 bg-white px-2 p-1">
        <input
          className="w-full h-full bg-red-900 rounded-3xl"
          type="text"
          name="search"
          id="search"
        />
      </div> */}
      <div className="flex w-full mt-10 sm:mt-8 px-4 py-2 items-center justify-start gap-2 line-clamp-1 truncate sm:text-xs text-sm text-black bg-white">
        <CiMapPin /> <div> Delivering to Abohar 152116 -Update location</div>
        <IoIosArrowDown />
      </div>

      <div className="relative w-full h-screen flex items-start justify-between flex-col sm:flex-row  overflow-hidden overflow-y-scroll">
        <div className="w-full h-1/2 sm:w-[40%] sm:h-[84%] bg-white/20 rounded-md">
          <Image
            className="w-full h-full bg-white/20"
            src={item?.images[0]!}
            alt=""
            height={500}
            width={500}
          />
        </div>

        <div className="flex flex-col items-start justify-start bg-white w-full h-1/2 p-1 sm:w-[60%] sm:h-[84%] rounded-md">
          <div className="w-full  text-black font-extralight px-3 p-2 text-3xl">
            {item?.title}
          </div>
          <hr className="border-black/30 w-full" />
          <Price price={item?.sp ?? 0} />
          <div className="w-full px-4">
            <hr className="w-full" />
          </div>
          <div className="w-full px-3 my-2 gap-3 flex flex-col">
            <AddToCart productId={productId} />
            <Checkout />
          </div>
        </div>
      </div>
    </>
  );
};
export default Page;

const AddToCart = ({ productId }: { productId: string }) => {
  return (
    <form
      action={async () => {
        "use server";
        await addToCart({ productId });
      }}
    >
      <button className="bg-yellow-400 w-full text-black text-lg mx-auto px-6 py-2 rounded-full">
        Add to cart
      </button>
    </form>
  );
};

const Checkout = () => {
  return (
    <button className="bg-yellow-400 w-full text-black text-lg mx-auto px-6 py-2 rounded-full">
      Checkout
    </button>
  );
};

const Price = ({ price }: { price: number }) => {
  return (
    <div className="w-full py-4 px-3 flex justify-start items-center gap-4">
      <div className="text-3xl font-extralight text-red-600">-31%</div>
      <div className="relative text-black flex text-3xl">
        <span className="text-xs flex justify-start items-start">₹</span>
        {price * 20}
      </div>
    </div>
  );
};

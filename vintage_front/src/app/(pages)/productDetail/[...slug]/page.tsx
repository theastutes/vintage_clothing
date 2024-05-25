import Image from "next/image";
import { addToCart, getProduct } from "../../../../../action/action";
import { IProduct } from "../../../../../types/types";

const Page = async ({ params }: { params: { slug: string } }) => {
  const productId = params.slug;
  const item: IProduct | undefined = await getProduct({
    productId,
  });
  return (
    <div className="w-full h-screen ">
      <div className="w-full h-1/2 sm:w-1/3 sm:h-[80%] bg-white/20 rounded-md">
        <Image
          className="w-full h-full bg-white/20 rounded-md"
          src={item?.images[0]!}
          alt=""
          height={500}
          width={500}
        />
      </div>
      <div className="w-full flex items-center justify-center">
        <form
          action={async () => {
            "use server";
            await addToCart({ productId });
          }}
        >
          <button className="bg-white/20 px-4 py-2 rounded-md text-xs text-white mx-auto">
            add to cart
          </button>
        </form>
      </div>
    </div>
  );
};
export default Page;

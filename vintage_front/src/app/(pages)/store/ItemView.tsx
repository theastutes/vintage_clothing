import Image from "next/image";
import React from "react";
import { IProduct } from "../../../../types/types";
import { getProducts } from "../../../../action/action";
import Link from "next/link";

const ItemView = async () => {
  const data: IProduct[] | undefined = await getProducts();
  if (!data) {
    throw new Error("Error while connecting, Check your connection");
  }
  return (
    <div className="w-full h-full max-w-full overflow-x-hidden min-h-fit grid sm:grid-cols-4 sm:w-[60%] grid-cols-2 gap-1 px-1">
      {data &&
        data.map((item: IProduct, index: number) => (
          <Link
            href={`/productDetail/${item._id}`}
            key={index}
            className="relative h-full overflow-hidden aspect-square rounded-lg bg-white/30 backdrop-blur-2xl"
          >
            <Image
              className="bg-white h-full w-full rounded-lg"
              src={item.images[0]}
              alt="Image"
              height={200}
              width={200}
              style={{ objectFit: "cover" }}
            />
            <div className="absolute flex items-center justify-center text-black text-xs z-10 backdrop-blur-[1.5px] w-full h-[20%] bottom-0 text-wrap truncate">
              <span>{item.title}</span>
              {/* <div className="bg-red-600 flex ">fg</div> */}
            </div>
          </Link>
        ))}
    </div>
  );
};

export default ItemView;

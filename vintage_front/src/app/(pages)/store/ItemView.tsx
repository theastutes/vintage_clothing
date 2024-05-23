import Image from "next/image";
import React from "react";
import { IProduct } from "../../../../types/types";
import { getProducts } from "../../../../action/action";

const ItemView = async () => {
  const data: IProduct[] | undefined = await getProducts();
  if (!data) {
    throw new Error("Error while connecting, Check your connection");
  }
  return (
    <div className="w-full h-full max-w-full overflow-x-hidden min-h-fit grid sm:grid-cols-4 sm:w-[60%] grid-cols-2 gap-1 px-1">
      {data &&
        data.map((item: IProduct, index: number) => (
          <div
            key={index}
            className="h-full overflow-hidden aspect-square rounded-lg bg-white/30 backdrop-blur-2xl"
          >
            <Image
              className="bg-white h-[70%] w-full rounded-lg"
              src={item.images[0]}
              alt="Image"
              height={200}
              width={200}
            />
            <div className=" max-h-full text-wrap truncate text-[4px]">
              {item.title}
            </div>
          </div>
        ))}
    </div>
  );
};

export default ItemView;

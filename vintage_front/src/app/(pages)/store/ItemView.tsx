
import Image from "next/image";
import React from "react";
import { IProduct } from "../../../../types/types";
import {  getProducts } from "../../../../action/action";
import Link from "next/link";
import axios from "axios";

const ItemView = async () => {
  const data: IProduct[] | undefined = await getProducts();
 
  if (!data) {
    throw new Error("Error while connecting, Check your connection");
   
  }


  return (
    <div className="w-full max-w-full h-full items-center justify-center  overflow-x-hidden  grid sm:grid-cols-4 sm:w-[60%] grid-cols-2 gap-1 px-1">
      {data &&
        data.map((item: IProduct, index: number) => (
          <Link
            href={`/productDetail/${item._id}`}
            key={index}
            className="relative h-full w-full bg-red-900 aspect-square rounded-lg bg-white/30 backdrop-blur-2xl  overflow-hidden "
          >
            <Image
              className="bg-white h-full w-full rounded-lg"
              src={item.images[0]}
              alt="Image"
              height={200}
              width={200}
              style={{ objectFit: "cover" }}
            />
            <div className="absolute bottom-0 h-[30%] bg-black/50 w-full p-2  rounded-sm text-wrap truncate text-sm select-none">
              {item.title}
            </div>
          </Link>
        ))}
    </div>
  );
};

export default ItemView;

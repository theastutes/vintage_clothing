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
<<<<<<< HEAD
            className="relative h-full overflow-hidden aspect-square rounded-lg bg-white/30 backdrop-blur-2xl"
          >
            <Image
              className="bg-white h-full w-full rounded-lg"
=======
<<<<<<< HEAD
            className="h-full overflow-hidden aspect-square rounded-lg bg-white/30 backdrop-blur-2xl"
=======
<<<<<<< HEAD
            className="h-full overflow-hidden p-1 aspect-square rounded-[2px] bg-white/30 backdrop-blur-2xl"
=======
<<<<<<< HEAD
            className="h-full overflow-hidden aspect-square rounded-lg bg-white/30 backdrop-blur-2xl"
=======
            className="h-full relative overflow-hidden  aspect-square rounded-[2px] bg-white/30 backdrop-blur-2xl"
>>>>>>> f4ec3c5 (added authentication v1)
>>>>>>> a02a66d (ned)
>>>>>>> 4850929 (ned)
          >
            <Image
<<<<<<< HEAD
              className="bg-white h-[70%] w-full rounded-lg"
<<<<<<< HEAD
>>>>>>> fd5b2edbc6fb7bb094e0a60faa4aa3f086b69bc6
              src={item.images[0]}
=======
<<<<<<< HEAD
              src={
                "https://th.bing.com/th/id/OIP.HCUPqyz4ebTr7Z8MHlheqgHaI7?rs=1&pid=ImgDetMain"
              }
=======
              src={item.images[0]}
=======
              className="bg-white h-[100%] w-full "
              src={item.images[1]}
>>>>>>> f4ec3c5 (added authentication v1)
>>>>>>> a02a66d (ned)
>>>>>>> 4850929 (ned)
              alt="Image"
              height={200}
              width={200}
              style={{ objectFit: "cover" }}
            />
<<<<<<< HEAD
            <div className="absolute flex items-center justify-center text-black text-xs z-10 backdrop-blur-[1.5px] w-full h-[20%] bottom-0 text-wrap truncate">
              <span>{item.title}</span>
              {/* <div className="bg-red-600 flex ">fg</div> */}
=======
<<<<<<< HEAD
            <div className=" max-h-full text-wrap truncate text-[4px]">
=======
<<<<<<< HEAD
            <div className=" max-h-full text-wrap truncate text-sm">
=======
<<<<<<< HEAD
            <div className=" max-h-full text-wrap truncate text-[4px]">
=======
            <div className="absolute bottom-0 h-[30%] bg-black/50 w-full p-2  rounded-sm text-wrap truncate text-sm select-none">
>>>>>>> f4ec3c5 (added authentication v1)
>>>>>>> a02a66d (ned)
>>>>>>> 4850929 (ned)
              {item.title}
>>>>>>> fd5b2edbc6fb7bb094e0a60faa4aa3f086b69bc6
            </div>
          </Link>
        ))}
    </div>
  );
};

export default ItemView;

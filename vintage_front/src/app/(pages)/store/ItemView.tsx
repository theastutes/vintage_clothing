"use client"
import Image from "next/image";
import React, { useState } from "react";
import { IProduct } from "../../../../types/types";
import { getProducts } from "../../../../action/action";
import Link from "next/link";
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from "axios";
import { GetServerSideProps } from "next";
import ProductCard from "@/components/ProductCard";

const ItemView = async ({ products,category }: { products: IProduct[] | undefined, category:string }) => {

  const categorize = (data:IProduct[]|undefined)=>{
    return data?.filter((product: { category: string | string[]; })=>product.category.includes(category));
  } 

  const categorized = categorize(products);

  return (
    <div className="w-full max-w-full h-full items-center sm:justify-evenly justify-center overflow-x-hidden sm:flex sm:flex-row sm:gap-y-14 sm:gap-x-12 sm:flex-wrap sm:w-[85%] sm:mx-8 sm:ml-20
    
    grid-cols-2 grid  gap-1 p-1 ">

      {categorized &&
        categorized.map((item: IProduct, index: number) => (

          // <Link
          //   href={`/productDetail/${item._id}`}
          //   key={index}
          //   className="relative sm:h-[22rem] sm:w-72 h-full w-full  aspect-square rounded-2xl  backdrop-blur-2xl  overflow-hidden ">
          //   <Image
          //     className=" rounded-2xl"
          //     src={item.images[0]}
          //     alt="Image"
          //     height={300}
          //     width={300}
          //     style={{ objectFit: "cover" }}
          //   />
          //   <div className=" max-sm:absolute z-30 bottom-0 h-[20%]  backdrop-blur-sm w-full py-1 text-myblack  text-wrap truncate text-sm select-none     ">
          //     <div className="flex flex-row justify-between items-center text-lg px-1">
          //       <div className="">{item.title}</div>
          //       <div>{item.sp}</div>
          //     </div>
          //     <div className="px-1">{item.details}</div>
              
          //   </div>
          //   <div className="absolute h-[15%] z-30 w-full bg-gradient-to-t from-mywhite to-transparent bottom-0"></div>
          // </Link>
          <ProductCard item={item}/>
        ))}

      {/* <InfiniteScroll
        dataLength={data.length}
        next={fetchMoreData}
        hasMore={true} // Set to false when no more data is available
        loader={<h4>Loading...</h4>}
      >
        {data && data.map((post,index) => (
          <div key={index}>
            <h2>{post.title}</h2>
            
          </div>
        ))}
      </InfiniteScroll> */}

    </div>
  );
};
export default ItemView;

{/* {data &&
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
        ))} */}
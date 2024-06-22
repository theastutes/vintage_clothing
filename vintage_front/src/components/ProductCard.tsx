import Link from 'next/link'
import React from 'react'
import { IProduct } from '../../types/types'
import Image from 'next/image'

function ProductCard( {item}:{item:IProduct}) {
  return (
    <Link
            href={`/productDetail/${item._id}`}
            key={item._id}
            className="relative sm:h-[22rem] sm:w-72 h-full w-full  aspect-square rounded-2xl  backdrop-blur-2xl  overflow-hidden ">
            <Image
              className=" rounded-2xl"
              src={item.images[0]}
              alt="Image"
              height={300}
              width={300}
              style={{ objectFit: "cover" }}
            />
            <div className=" max-sm:absolute z-30 bottom-0 h-[20%]  backdrop-blur-sm w-full py-1 text-myblack  text-wrap truncate text-sm select-none     ">
              <div className="flex flex-row justify-between items-center text-lg px-1">
                <div className="">{item.title}</div>
                <div>{item.sp}</div>
              </div>
              <div className="px-1">{item.details}</div>
              
            </div>
            <div className="absolute h-[15%] z-30 w-full bg-gradient-to-t from-mywhite to-transparent bottom-0"></div>
          </Link>
  )
}

export default ProductCard
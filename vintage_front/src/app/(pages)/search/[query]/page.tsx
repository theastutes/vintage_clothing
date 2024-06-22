import React from 'react'
import { searchMyData } from '../../../../../action/action'
import { IProduct } from '../../../../../types/types';
import Image from "next/image";
import Link from 'next/link';
import { CodeSandboxLogoIcon } from '@radix-ui/react-icons';
import ProductCard from '@/components/ProductCard';

async function page({
    params: { query },
  }: {
    params: { query: string }
  }) {

    console.log(query);
    const data:IProduct[]|undefined = await searchMyData(query);
    console.log(data);

    if(!data)
        throw new Error("Data not found in search");
        

    return (

        <div className="w-full max-w-full h-full items-center sm:justify-evenly justify-center overflow-x-hidden sm:flex sm:flex-row sm:gap-y-14 sm:gap-x-12 sm:flex-wrap sm:w-[85%] sm:mx-8 sm:ml-20
    
    grid-cols-2 grid  gap-1 p-1 ">

            {data &&
                data.map((item: IProduct, index: number) => (

                    <ProductCard item={item} />

                ))}



        </div>
    )
}



export default page
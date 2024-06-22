"use client"
import Loading from '@/components/Loading'
import Search from '@/components/Search'
import dynamic from 'next/dynamic';
import React, { Suspense, useState } from 'react'
import { IProduct } from '../../../../types/types';
import { AiOutlineSearch } from 'react-icons/ai';

const ItemComponent = dynamic(() => import('./ItemView'));

function FilterView({products}:{products:IProduct[]|undefined}) {

    const [selectedCat, setCat] = useState("");
    const [searchStr,setSearchStr] = useState("");
    const [sfiltered, setFiltered] = useState<IProduct[]>();

  

    // const filtered = categorize(products);

    const prodFinder = (data:IProduct[]|undefined)=>{
        return data?.filter((product)=> product.title.includes(searchStr));
    } 
  
    const searched = prodFinder(products);

  return (
    <>
    <div className="w-full h-fit p-2 ">
    <div className={` relative flex flex-row items-center h-14 sm:h-11 w-full sm:w-96 mx-auto  py-2 px-4 bg-transparent gap-2`}>
        <input type="search"
          placeholder={"Search..."}
          className="w-full h-full px-4 border-b-2 text-black rounded-2xl bg-mywhite"
          onChange={(event)=> setSearchStr(event.target.value)}
        />
        
        <div>
        <AiOutlineSearch size={22}/>
        </div>
      </div>
    </div>
    <div className="flex flex-row h-12 w-full justify-center items-center gap-10 ">
        <div className="rounded-2xl px-4 text-sm text-zinc-400 h-8 flex items-center border-2" onClick={()=>setCat("UPR")}  >Top Wear</div>
        <div className="rounded-2xl px-4 text-sm text-zinc-400 h-8 flex items-center border-2" onClick={()=>setCat("BTM")} >Bottom Wear</div>
        <div className="rounded-2xl px-4 text-sm text-zinc-400 h-8 flex items-center border-2" onClick={()=>setCat("JNS")} >Jeans </div>
        <div className="rounded-2xl px-4 text-sm text-zinc-400 h-8 flex items-center border-2" onClick={()=>setCat("SRT")} >Shirts</div>
        <div className="rounded-2xl px-4 text-sm text-zinc-400 h-8 flex items-center border-2" onClick={()=>setCat("")} >Clear</div>
      </div>

    <div className="h-full w-full flex items-center justify-center">
      <Suspense fallback={<Loading />}>
        <ItemComponent products={searched} category={selectedCat} />
      </Suspense>
    </div>
    </>
  )
}

export default FilterView
import { Suspense } from "react";
//import ItemView from "./ItemView";
import Loading from "@/components/Loading";
import dynamic from 'next/dynamic'
import Search from "@/components/Search";
import { josefin } from "@/components/ui/fonts";
import { IProduct } from "../../../../types/types";
import { getProducts } from "../../../../action/action";
import FilterView from "./FilterView";
import { AiOutlineSearch } from "react-icons/ai";

const FilterComponent = dynamic(() => import('./FilterView'));

const page = async () => {

  const data: IProduct[] | undefined = await getProducts();
  if (!data) {
    throw new Error("Error while connecting, Check your connection");  }

  

  
    
    //const Searched = categorize(data);

  return (
    <div className="w-full relative h-fit min-h-screen mt-14 flex flex-col items-center justify-start">
      <div className={`${josefin.className} text-3xl p-8 `}>Explore</div>
      
      <div>
        <FilterComponent products={data}/>
      </div>
    </div>
  );
};

export default page;





"use client";
import Loading from "@/components/Loading";
import dynamic from "next/dynamic";
import React, { Suspense, useState } from "react";
import { IProduct } from "../../../../types/types";
import { AiOutlineSearch } from "react-icons/ai";

const ItemComponent = dynamic(() => import("./ItemView"));

function FilterView({ products }: { products: IProduct[] | undefined }) {
  const [selectedCat, setCat] = useState("");
  const [searchStr, setSearchStr] = useState("");
  const [sfiltered, setFiltered] = useState<IProduct[]>();

  // const filtered = categorize(products);

  const prodFinder = (data: IProduct[] | undefined) => {
    return data?.filter((product) => product.title.includes(searchStr));
  };

  const searched = prodFinder(products);

  return (
    <>
      <div className="w-full h-fit p-2 ">
        <div
          className={` relative flex flex-row items-center h-14 sm:h-11 w-full sm:w-96 mx-auto  py-2 px-4 bg-transparent gap-2`}
        >
          <input
            type="search"
            placeholder={"Search..."}
            className="w-full h-full px-4 border-b-2 text-black rounded-2xl bg-mywhite"
            onChange={(event) => setSearchStr(event.target.value)}
          />

          <div>
            <AiOutlineSearch size={22} />
          </div>
        </div>
      </div>
      <div className="flex flex-row h-12 w-full justify-around items-center ">
        <div
          className={`${
            selectedCat === "" ? "bg-blue-700 text-white border-blue-700" : ""
          } rounded-2xl px-4 text-xs font-semibold text-black h- cursor-pointer h-8 flex items-center border-1 border-black`}
          onClick={() => setCat("")}
        >
          All
        </div>
        <div
          className={`${
            selectedCat === "UPR"
              ? "bg-blue-700 text-white border-blue-700"
              : ""
          } rounded-2xl px-4 cursor-pointer text-xs font-semibold text-black h-8 flex items-center border-1 border-black`}
          onClick={() => setCat("UPR")}
        >
          Top Wear
        </div>
        <div
          className={`${
            selectedCat === "BTM"
              ? "bg-blue-700 text-white border-blue-700"
              : ""
          } rounded-2xl px-4 cursor-pointer text-xs font-semibold text-black h-8 flex items-center border-1 border-black`}
          onClick={() => setCat("BTM")}
        >
          Bottom Wear
        </div>
        <div
          className={`${
            selectedCat === "JNS"
              ? "bg-blue-700 text-white border-blue-700"
              : ""
          } rounded-2xl px-4 cursor-pointer text-xs font-semibold text-black h-8 flex items-center border-1 border-black`}
          onClick={() => setCat("JNS")}
        >
          Jeans{" "}
        </div>
        <div
          className={`${
            selectedCat === "SRT"
              ? "bg-blue-700 text-white border-blue-700"
              : ""
          } rounded-2xl px-4 cursor-pointer text-xs font-semibold text-black h-8 flex items-center border-1 border-black`}
          onClick={() => setCat("SRT")}
        >
          Shirts
        </div>
      </div>

      <div className="h-full w-full flex items-center justify-center">
        <Suspense fallback={<Loading />}>
          <ItemComponent products={searched} category={selectedCat} />
        </Suspense>
      </div>
    </>
  );
}

export default FilterView;

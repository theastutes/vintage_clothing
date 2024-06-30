"use client";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { IProduct } from "../../../../types/types";
import { AiOutlineSearch } from "react-icons/ai";
import { Input } from "@nextui-org/input";
import { josefin } from "@/components/ui/fonts";
import { GiSettingsKnobs } from "react-icons/gi";
import { Select, SelectItem } from "@nextui-org/select";

const ItemComponent = dynamic(() => import("./ItemView"));

function FilterView({ products }: { products: IProduct[] | undefined }) {
  const [selectedCat, setCat] = useState("");
  const [searchStr, setSearchStr] = useState("");
  const [sfiltered, setFiltered] = useState<IProduct[]>();
  const [openFilter, setOpenFilter] = useState(false);

  // const filtered = categorize(products);

  const prodFinder = (data: IProduct[] | undefined) => {
    return data?.filter((product) => product.title.includes(searchStr));
  };

  const searched = prodFinder(products);

  return (
    <>
      <div className="w-full h-fit p-2">
        <div className="h-14 min-w-full w-full flex items-center justify-between px-4">
          <div className={`${josefin.className} text-3xl`}>Explore</div>
          <GiSettingsKnobs
            className={`${
              openFilter ? "bg-black/10" : ""
            } text-4xl rounded-full p-2 cursor-pointer`}
            onClick={() => setOpenFilter(!openFilter)}
          >
            <Select
              id="filter"
              title="Filter"
              className="w-[100%] cursor-pointer"
            >
              <SelectItem key="BTMLWR">Lower</SelectItem>
              <SelectItem key="UPRSRT">Shirt</SelectItem>
              <SelectItem key="UPRTSR"> Tshirt</SelectItem>
              <SelectItem key="BTMJNS">Jeans</SelectItem>
            </Select>
          </GiSettingsKnobs>
        </div>

        {openFilter && (
          <div
            className={`${
              openFilter ? "" : ""
            } transition-all duration-1000 flex flex-row h-12 w-full justify-around items-center overflow-hidden`}
          >
            <div
              className={`${
                selectedCat === ""
                  ? "bg-blue-700 text-white border-blue-700"
                  : ""
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
        )}
        {/* Search */}
        <div
          className={`relative flex flex-row items-center h-14 sm:h-11 w-full sm:w-96 mx-auto py-2 px-4 bg-transparent gap-2`}
        >
          <Input
            placeholder="Search..."
            type="search"
            // placeholder={"Search..."}
            className="w-full h-full px-4 border-b-2 text-black rounded-2xl bg-mywhite"
            onChange={(event) => setSearchStr(event.target.value)}
          />

          <div>
            <AiOutlineSearch size={22} />
          </div>
        </div>
      </div>

      <div className="relative h-full w-full flex items-center justify-center overflow-hidden mt-10">
        {/* <Suspense fallback={<Loading />}> */}
        <ItemComponent products={searched} category={selectedCat} />
        {/* </Suspense> */}
      </div>
    </>
  );
}

export default FilterView;

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

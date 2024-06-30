"use client";
import dynamic from "next/dynamic";
import React from "react";
import { IProduct } from "../../../../types/types";
import { useSearchParams } from "next/navigation";

const ItemComponent = dynamic(() => import("./ItemView"));

export default async function FilterView({
  products,
}: {
  products: IProduct[] | undefined;
}) {
  const prodFinder = (data: IProduct[] | undefined) => {
    const query = useSearchParams().get("query")?.toLowerCase() ?? "";
    return data?.filter((product) =>
      product.title.toLowerCase().includes(query)
    );
  };

  const searched = prodFinder(products);

  return (
    <>
      <div className="w-full h-fit p-2"></div>

      <div className="relative h-full w-full flex items-center justify-center overflow-hidden mt-10">
        {/* <Suspense fallback={<Loading />}> */}
        <ItemComponent products={searched} />
        {/* </Suspense> */}
      </div>
    </>
  );
}

"use client";
import React from "react";
import { IProduct } from "../../../../types/types";
import ProductCard from "@/components/ProductCard";
import Loading from "@/components/Loading";
import { useSearchParams } from "next/navigation";

const ItemView = async ({ products }: { products: IProduct[] | undefined }) => {
  const category = useSearchParams().get("category");
  const categorize = (data: IProduct[] | undefined) => {
    return data?.filter((product: { category: string | string[] }) =>
      product.category.includes(category ?? "")
    );
  };

  const categorized = categorize(products);

  return (
    <div className="w-full h-full grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-10 p-1 px-4 sm:px-8">
      {categorized ? (
        categorized.map((item: IProduct, index: number) => (
          <ProductCard key={index} item={item} />
        ))
      ) : (
        <Loading />
      )}
    </div>
  );
};
export default ItemView;

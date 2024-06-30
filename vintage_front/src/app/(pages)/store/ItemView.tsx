"use client";
import React from "react";
import { IProduct } from "../../../../types/types";
import ProductCard from "@/components/ProductCard";

const ItemView = async ({
  products,
  category,
}: {
  products: IProduct[] | undefined;
  category: string;
}) => {
  const categorize = (data: IProduct[] | undefined) => {
    return data?.filter((product: { category: string | string[] }) =>
      product.category.includes(category)
    );
  };

  const categorized = categorize(products);

  return (
    <div className="w-full h-full grid grid-cols-2 sm:grid-cols-4 lg:gris-cols-3 gap-6 sm:gap-10 p-1 px-4 sm:px-8">
      {categorized ? (
        categorized.map((item: IProduct, index: number) => (
          <ProductCard item={item} />
        ))
      ) : (
        <div className="bg-red size-40">hi</div>
      )}
    </div>
  );
};
export default ItemView;

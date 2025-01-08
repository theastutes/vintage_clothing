"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { IProduct, variant } from "../../../../types/types";
import { useEffect } from "react";
import { Card } from "@nextui-org/card";

export const SNC = ({ item }: { item: IProduct }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const size = item.variants[0].size;
  const color = item.variants[0].colorName;
  useEffect(() => {
    router.push(`?size=${size}&color=${color}`);
  }, []);

  const handleClick = (variant: variant) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("size", variant.size);
    params.set("color", variant.colorName);
    router.push(`?${params.toString()}`);
  };

  return (
    <div className="h-fit w-full overflow-hidden select-none px-4">
      <div className="text-lg font-bold px-2 text-center">Variants</div>
      <div className="px-8">
        <hr />
      </div>
      <div className="w-full h-10 max-h-full flex justify-center items-center p-1 px-2 gap-2">
        {item.variants.map((variant, index) => (
          <Card
            key={index}
            isPressable
            isBlurred
            onClick={() => handleClick(variant)}
            className={`border-1 border-black text-center rounded-full cursor-pointer relative flex flex-row items-center justify-center overflow-hidden h-6 w-16 bg-transparent`}
          >
            <span className="h-full w-[60%] flex items-center justify-center text-[80%]">
              {variant.size}
            </span>
            <div
              className="h-full w-full rounded-full"
              style={{
                backgroundColor: variant.color,
              }}
            />
          </Card>
        ))}
      </div>
    </div>
  );
};
export default SNC;

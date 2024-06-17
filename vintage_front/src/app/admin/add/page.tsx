"use client";

import { z } from "zod";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { IProduct } from "../../../../types/types";
import { IoIosAdd } from "react-icons/io";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { Button } from "@/components/ui/button";
import { AwaitedReactNode, JSXElementConstructor, Key, ReactElement, ReactNode, useState } from "react";
import {CheckboxGroup, Checkbox} from "@nextui-org/checkbox";
const colorSchema = z.object({
  color: z.string().min(1, "Color is required"),
  colorName: z.string().min(1, "Color name is required"),
  quantity: z.string().min(1, "Quantity is required"),
});

const sizeSchema = z.object({
  size: z.string().min(1, "Size is required"),
  colors: z.array(colorSchema),
});

const productSchema = z.object({
  title: z.string().min(1, "Title is required"),
  details: z.string().min(1, "Details are required"),
  images: z
    .array(z.string().url("Invalid URL"))
    .min(1, "At least one image is required"),
  mrp: z.string(),
  sp: z.string(),
  category: z.string().min(1, "Category is required"),
  sizes: z.array(sizeSchema),
});

interface SelectedSizes {
  [size: string]: boolean;
}

const Form: React.FC = () => {
  const {
    register, control,
    handleSubmit,
    formState: { errors },
  } = useForm<IProduct>({
    resolver: zodResolver(productSchema),
  });

  const { fields: sizeFields, append: appendSize } = useFieldArray({
    control,
    name: "sizes", // This should match the top-level field name for sizes
  });
  
  // For colors inside each size
  // const { fields: colorFields, append: appendColor } = useFieldArray({
  //   control,
  //   name: `sizes.${index}.colors`, // Use the index of the size for which you want to manage colors
  // });

  const onSubmit: SubmitHandler<IProduct> = (data: any) => {
    console.log("Form Data :", data);
  };

  // Assuming you have a state or props that provide the available sizes and colors
  const availableSizes = ['S', 'M', 'L', 'XL', 'XXL','XXXL' ]; // Add more sizes as needed
  const availableColors = [
    { color: 'red', colorName: 'Red' },
    { color: 'blue', colorName: 'Blue' },
    { color: 'green', colorName: 'Green' },
    // Add more colors as needed
  ];

  const [selectedSizes, setSelectedSizes] = useState({});

  const handleSizeChange = (size: string, isChecked: boolean): void => {
    setSelectedSizes(prev => ({
      ...prev,
      [size]: isChecked,
    }));
  };

  return (
    <div
      onSubmit={handleSubmit(onSubmit)}
      className="p-8 max-w-screen mx-auto pt-10 pb-28 "
    >
      {/* Title */}
      <div className="mb-4 flex flex-row gap-10 justify-between items-center">
        <label className="block text-gray-700">Title</label>
        <input
          type="text"
          {...register("title")}
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
        />
        {errors.title && <p className="text-red-500">{errors.title.message}</p>}
      </div>

      {/* Details */}
      <div className="mb-4 flex flex-row gap-10 justify-center items-center">
        <label className="block text-gray-700">Details</label>
        <textarea
          {...register("details")}
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
        />
        {errors.details && (
          <p className="text-red-500">{errors.details.message}</p>
        )}
      </div>

      {/* Images */}
      <div className="mb-4 flex flex-row gap-10 justify-center items-center">
        <label className="block text-gray-700">Images</label>
        <input
          type="text"
          {...register("images.0")}
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
        />
        {errors.images?.[0] && (
          <p className="text-red-500">{errors.images[0].message}</p>
        )}
      </div>

      {/* MRP */}
      <div className="mb-4 flex flex-row gap-10 justify-center items-center">
        <label className="block text-gray-700 line-clamp-1 truncate">MRP ₹</label>
        <input
          type="number" 
          {...register("mrp")}
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
        />
        {errors.mrp && <p className="text-red-500">{errors.mrp.message}</p>}
      </div>

      {/* SP */}
      <div className="mb-4 flex flex-row gap-10 justify-center items-center">
        <label className="block text-gray-700">SP</label>
        <input
          type="number"
          {...register("sp")}
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
        />
        {errors.sp && <p className="text-red-500">{errors.sp.message}</p>}
      </div>

      {/* Category */}
      
      <div className="">
      <CheckboxGroup
      label="Select sizes "
      orientation="horizontal"
      color="secondary"
      defaultValue={["s"]}
    >
      <Checkbox value="s">S</Checkbox>
      <Checkbox value="m">M</Checkbox>
      <Checkbox value="l">L</Checkbox>
      <Checkbox value="xl">XL</Checkbox>
      <Checkbox value="xxl">XXL</Checkbox>
      <Checkbox value="xxxl">XXXL</Checkbox>
    </CheckboxGroup>
    </div>     
    


      {/* Sizes */}
      <div className="">
      <IoIosAdd/>
      </div>


      {/* Quantity */}
      <div className="mb-4 flex flex-row gap-10 justify-center items-center">
        <label className="block text-gray-700">Quantity</label>
        <input
          type="text"
          {...register("sizes.0.colors.0.quantity")}
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
        />
        {errors.sizes?.[0]?.colors?.[0]?.quantity && (
          <p className="text-red-500">
            {errors.sizes[0].colors[0].quantity.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
      >
        Submit
      </button>
    </div>
  );
};

export default Form;

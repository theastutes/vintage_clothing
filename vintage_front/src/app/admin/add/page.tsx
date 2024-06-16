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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-8 max-w-screen mx-auto pt-10 pb-28 text-black"
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
      <div className="mb-4 flex flex-row gap-10 justify-center items-center">
        <label htmlFor="category" className="block text-gray-700">Category</label>
        <select
          {...register("category")}
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
        >
          <option value="">Select a category</option>
          <option value="category1">Category 1</option>
          <option value="category2">Category 2</option>
          <option value="category3">Category 3</option>
          {/* Add more categories as needed */}
        </select>
        {errors.category && (
          <p className="text-red-500">{errors.category.message}</p>
        )}
      </div>


      {/* Sizes */}

      {/* <div>
        <label>Size:</label>
        <input {...register("size")} />
        {errors.sizes && <p>{errors.size.message}</p>}
      </div>

      <div>
        <label>Colors:</label>
        {fields.map((field, index) => (
          <div key={field.id}>
            <Controller
              render={({ field }) => <input {...field} />}
              name={`colors.${index}.color`}
              control={control}
            />
            <Controller
              render={({ field }) => <input {...field} />}
              name={`colors.${index}.colorName`}
              control={control}
            />
            <Controller
              render={({ field }) => <input {...field} />}
              name={`colors.${index}.quantity`}
              control={control}
            />
            <button type="button" onClick={() => remove(index)}>Remove</button>
          </div>
        ))}
        <button type="button" onClick={() => append({ color: '', colorName: '', quantity: '' })}>
          Add Color
        </button>
      </div> */}

      {/* <div className="mb-4 flex flex-row gap-2 justify-between items-center">
        <label className="block text-gray-700">Sizes</label>
        <div className="flex flex-col gap-2">
          {availableSizes.map((size, index) => (
            <label key={size} className="inline-flex items-center">
              <input
                type="checkbox"
                value={size}
                {...register(`sizes.${index}.size`)}
                className="form-checkbox" 
                
              />
             
              <span className="ml-2">{size}</span>
            </label>
          ))}
        </div>
        {errors.sizes && (
          <p className="text-red-500">Please select at least one size.</p>
        )}
      </div> */}

      {/* Color Selector */}

      <div className="">
      <IoIosAdd/>
      </div>

      {/* <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" value="@peduarte" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog> */}

      {/* Colors */}
      {/* {availableSizes.map((size, sizeIndex) => (
        <div key={size} className="mb-4 flex flex-col gap-2 justify-center items-center">
          <label className="block text-gray-700">{`${size} - Colors`}</label>
          {availableColors.map((color, colorIndex) => (
            <div key={color.color} className="flex flex-row gap-2 justify-center items-center">
              <input
                type="checkbox"
                {...register(`sizes.${sizeIndex}.colors.${colorIndex}.color`)}
                className="form-checkbox"
              />
              <span className="ml-2">{color.colorName}</span>
            </div>
          ))}
        </div>
      ))} */}


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
    </form>
  );
};

export default Form;

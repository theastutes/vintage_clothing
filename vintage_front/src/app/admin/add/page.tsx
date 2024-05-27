"use client";

import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { IProduct } from "../../../../types/types";

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

const Form: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IProduct>({
    resolver: zodResolver(productSchema),
  });

  const onSubmit: SubmitHandler<IProduct> = (data: any) => {
    console.log("Form Data :", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-4 max-w-xl mx-auto pt-10 pb-28 text-black"
    >
      <div className="mb-4">
        <label className="block text-gray-700">Title</label>
        <input
          type="text"
          {...register("title")}
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
        />
        {errors.title && <p className="text-red-500">{errors.title.message}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Details</label>
        <textarea
          {...register("details")}
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
        />
        {errors.details && (
          <p className="text-red-500">{errors.details.message}</p>
        )}
      </div>

      <div className="mb-4">
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
      <div className="mb-4">
        <label className="block text-gray-700">MRP</label>
        <input
          type="number"
          {...register("mrp")}
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
        />
        {errors.mrp && <p className="text-red-500">{errors.mrp.message}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">SP</label>
        <input
          type="number"
          {...register("sp")}
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
        />
        {errors.sp && <p className="text-red-500">{errors.sp.message}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Category</label>
        <input
          type="text"
          {...register("category")}
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
        />
        {errors.category && (
          <p className="text-red-500">{errors.category.message}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Sizes</label>
        <input
          type="text"
          {...register("sizes.0.size")}
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
        />
        {errors.sizes?.[0]?.size && (
          <p className="text-red-500">{errors.sizes[0].size.message}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Colors</label>
        <input
          type="text"
          {...register("sizes.0.colors.0.color")}
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
        />
        {errors.sizes?.[0]?.colors?.[0]?.color && (
          <p className="text-red-500">
            {errors.sizes[0].colors[0].color.message}
          </p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Color Name</label>
        <input
          type="text"
          {...register("sizes.0.colors.0.colorName")}
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
        />
        {errors.sizes?.[0]?.colors?.[0]?.colorName && (
          <p className="text-red-500">
            {errors.sizes[0].colors[0].colorName.message}
          </p>
        )}
      </div>

      <div className="mb-4">
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

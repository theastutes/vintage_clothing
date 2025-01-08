"use client";
import { z } from "zod";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import InputColor from "react-input-color";
import axios from "axios";

// Define schema for validation
const variantSchema = z.object({
  size: z.string(),
  color: z.string().min(1, "Color is required"),
  colorName: z.string().min(1, "Color name is required"),
  quantity: z.string().min(1, "Quantity is required"),
});

const productSchema = z.object({
  title: z.string().min(3, "Title is required"),
  details: z.string().min(3, "Details are required"),
  images: z
    .array(z.string().url("Invalid URL"))
    .min(1, "At least one image is required"),
  mrp: z.string(),
  sp: z.string(),
  category: z.string().min(1, "Category is required"),
  sizes: z.array(z.object({ size: z.string() })),
  colors: z.array(variantSchema),
});

type IProduct = z.infer<typeof productSchema>;

const Form: React.FC = () => {
  const {
    register,
    control,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<IProduct>({ resolver: zodResolver(productSchema) });

  const {
    fields: sizeField,
    append: sizeAppend,
    remove: sizeRemove,
  } = useFieldArray({
    control,
    name: "sizes",
  });

  const { fields: colField, append: colAppend } = useFieldArray({
    control,
    name: "colors",
  });

  const onSubmit = async (data: IProduct) => {
    try {
      await axios.post("http://localhost:4000/api/products", data);
      console.log("Form submitted successfully:", data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-[80%] mx-auto">
      <div>
        <label>Title</label>
        <input {...register("title")} />
        {errors.title && <p>{errors.title.message}</p>}
      </div>

      <div>
        <label>Details</label>
        <textarea {...register("details")} />
        {errors.details && <p>{errors.details.message}</p>}
      </div>

      {/* Add Sizes */}
      <div>
        {["S", "M", "L", "XL"].map((size) => (
          <button key={size} type="button" onClick={() => sizeAppend({ size })}>
            Add {size}
          </button>
        ))}
      </div>
      {sizeField.map((field, index) => (
        <div key={field.id}>
          <strong>{field.size}</strong>
          <button type="button" onClick={() => sizeRemove(index)}>
            Remove
          </button>
        </div>
      ))}

      {/* Add Colors */}
      {sizeField.map((field) => (
        <div key={field.id}>
          <strong>{field.size} Colors</strong>
          {colField
            .filter((col) => col.size === field.size)
            .map((col, colorIndex) => (
              <div key={col.id}>
              <input title="colorid" type="color"></input>
              </div>
            ))}
          <button
            type="button"
            onClick={() =>
              colAppend({
                size: field.size,
                color: "",
                colorName: "",
                quantity: "",
              })
            }
          >
            Add Color
          </button>
        </div>
      ))}

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
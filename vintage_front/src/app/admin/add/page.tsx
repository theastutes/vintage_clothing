"use client";
import { z } from "zod";
import {
  Controller,
  SubmitHandler,
  useFieldArray,
  useForm,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import InputColor from "react-input-color";
import { CheckboxGroup, Checkbox } from "@nextui-org/checkbox";
import { Input, Textarea } from "@nextui-org/input";
import { Select, SelectSection, SelectItem } from "@nextui-org/select";
import axios from "axios";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
const colorSchema = z.object({
  color: z.string().min(1, "Color is required").default("#000000"),
  colorName: z.string().min(1, "Color name is required"),
  quantity: z.string().min(1, "Quantity is required"),
});

const sizeSchema = z.object({
  //size: z.enum(["S", "M", "L", "XL", "XXL", "XXXL"]),
  size: z.string(),
  colors: z.array(colorSchema),
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
  sizes: z.array(sizeSchema),
});

type IProduct = z.infer<typeof productSchema>;

const Form: React.FC = () => {
  const {
    register,
    control,
    getValues,
    setValue,
    watch,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IProduct>({ resolver: zodResolver(productSchema) });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "sizes",
  });

  const checksizes = () => {
    const size = getValues("sizes");
    console.log(size);
  };

  const onSubmit: SubmitHandler<IProduct> = async (data: any) => {
    await axios
      .post(`http://localhost:4000/api/products`, data)
      .then((response) => {
        console.log("Data sent successfully ", response.status);
      })
      .catch((error) => {
        console.error("Error while sending data in admin/add : ", error);
      });

    // console.log("Form Data :", data);
  };

  const toggleSizeSelection = (size: string, isChecked: boolean) => {
    const currentSizes = getValues("sizes");
    const sizeIndex = currentSizes.findIndex((s) => s.size === size);
    if (isChecked) {
      if (sizeIndex < 0) {
        append({
          size: size,
          colors: [{ color: "", colorName: "", quantity: "" }],
        }); // Add size with default details if it doesn't exist
      }
    } else {
      if (sizeIndex >= 0) {
        remove(sizeIndex); // Remove size if it exists
      }
    }
  };

  const showerors = () => {
    console.log(errors);
  };

  return (
    <div className="my-4 p-2 pt-16 pb-28 sm:pt-2 bg-zinc-900/80 text-white">
      <form className="bg-transparent" onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full flex flex-col items-center justify-around">
          {/* Title */}
          <div className=" bg-transparent relative w-full mb-4 flex flex-row gap-10 justify-center items-center">
            <Label className="w-[10%]">Title</Label>
            <Input
              variant="flat"
              label="Title"
              type="text"
              {...register("title")}
              className="w-[90%]"
            />
            {errors.title && (
              <p className="text-red-500 bg-transparent">
                {errors.title.message}
              </p>
            )}
          </div>

          {/* Details */}
          <div className="relative w-full mb-4 flex flex-row gap-10 justify-center items-center">
            <Label className="w-[10%]">Details</Label>
            <Textarea
              label="Description"
              placeholder="Enter your Product description"
              {...register("details")}
              className="w-[90%]"
            />
            {errors.details && (
              <p className="text-red-500">{errors.details.message}</p>
            )}
          </div>

          {/* Images */}
          <div className="relative w-full mb-4 flex flex-row gap-10 justify-center items-center">
            <Label className="w-[10%]">Images</Label>
            <Input
              label="Images"
              type="text"
              {...register("images.0")}
              className="w-[90%]"
            />
            {errors.images?.[0] && (
              <p className="text-red-500">{errors.images[0].message}</p>
            )}
          </div>

          {/* MRP */}
          <div className="relative w-full mb-4 flex flex-row gap-10 justify-center items-center">
            <Label className="w-[10%] truncate">MRP ₹</Label>
            <Input
              label="Mrp"
              type="number"
              {...register("mrp")}
              className="w-[90%]"
            />
            {errors.mrp && <p className="text-red-500">{errors.mrp.message}</p>}
          </div>

          {/* SP */}
          <div className="relative w-full mb-4 flex flex-row gap-10 justify-center items-center">
            <Label className="w-[10%]">SP</Label>
            <Input
              label="Selling Price"
              type="number"
              {...register("sp")}
              className="w-[90%]"
            />
            {errors.sp && <p className="text-red-500">{errors.sp.message}</p>}
          </div>

          {/* Category */}
          <div className="relative w-full mb-4 flex flex-row gap-10 justify-center items-center">
            <Label className="w-[10%]">Category</Label>
            <Select
              id="categories"
              title="categories"
              {...register("category")}
              className="w-[90%]"
            >
              <SelectItem key="BTMLWR">Lower</SelectItem>
              <SelectItem key="UPRSRT">Shirt</SelectItem>
              <SelectItem key="UPRTSR"> Tshirt</SelectItem>
              <SelectItem key="BTMJNS">Jeans</SelectItem>
            </Select>
            {errors.category && (
              <p className="text-red-500">{errors.category.message}</p>
            )}
          </div>

          {["S", "M", "L", "XL", "XXL", "XXXL"].map((size, index) => (
            <div
              className="w-full sm:w-1/2 rounded-sm border border-gray-500 p-2"
              key={index}
            >
              <Checkbox
                checked={fields.some((field) => field.size === size)}
                onChange={(e) => toggleSizeSelection(size, e.target.checked)}
              >
                <Label>{size}</Label>
              </Checkbox>
            </div>
          ))}

          {/* Sizes */}
          <div className="">
            {fields.map((sizeField, index) => (
              <div className=" " key={sizeField.id}>
                <Label className="w-8 rounded-md bg-black/30 px-2">
                  {sizeField.size}
                </Label>
                <div>
                  {sizeField.colors.map((color, colorIndex) => (
                    <div
                      className="flex items-center justify-between gap-1"
                      key={index}
                    >
                      <Controller
                        control={control}
                        name={
                          `sizes.${index}.colors.${colorIndex}.color` as const
                        }
                        render={({ field }) => (
                          <Input label="ColorName" {...field} />
                        )}
                      />
                      {errors.sizes?.[index]?.colors?.[colorIndex]?.color && (
                        <p>
                          {
                            errors.sizes?.[index]?.colors?.[colorIndex]?.color
                              ?.message
                          }
                        </p>
                      )}

                      <Controller
                        control={control}
                        name={
                          `sizes.${index}.colors.${colorIndex}.colorName` as const
                        }
                        render={({ field }) => (
                          <InputColor
                            initialValue={field.value} // Use the field's value as the initial color
                            onChange={(color) => field.onChange(color.hex)} // Update form value when color changes
                            placement="right"
                          />
                        )}
                      />
                      {errors.sizes?.[index]?.colors?.[colorIndex]
                        ?.colorName && (
                        <p>
                          {
                            errors.sizes?.[index]?.colors?.[colorIndex]
                              ?.colorName?.message
                          }
                        </p>
                      )}

                      <Controller
                        control={control}
                        name={
                          `sizes.${index}.colors.${colorIndex}.quantity` as const
                        }
                        render={({ field }) => (
                          <Input label="Quantity" {...field} type="number" />
                        )}
                      />
                      {errors.sizes?.[index]?.colors?.[colorIndex]
                        ?.quantity && (
                        <p>
                          {
                            errors.sizes?.[index]?.colors?.[colorIndex]
                              ?.quantity?.message
                          }
                        </p>
                      )}
                    </div>
                  ))}
                </div>
                {errors.sizes && <p>{errors.sizes.message}</p>}
              </div>
            ))}
          </div>

          {/* <Button onClick={checksizes}>Check sizes</Button>
          <Button name="show error" onClick={showerors}>
            show errors
          </Button> */}
          {/* <button
        type="button"
        name="submit"
        onClick={handleSubmit(onSubmit)}
        className="mt-4 h-8 w-40 px-2 py-1 bg-blue-500 text-white rounded-md">
      </button> */}
          <Button className="mt-4" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Form;

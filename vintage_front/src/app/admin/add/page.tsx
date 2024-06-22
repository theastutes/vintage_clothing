"use client";
import { z } from "zod";
import { Controller, SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import InputColor from 'react-input-color'
import { CheckboxGroup, Checkbox } from "@nextui-org/checkbox";
import axios from "axios";
const colorSchema = z.object({
  color: z.string().min(1, "Color is required").default('#000000'),
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
  const { register, control, getValues, setValue, watch, handleSubmit, formState: { errors, isSubmitting } } = useForm<IProduct>({ resolver: zodResolver(productSchema) });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "sizes",
  });

  const checksizes = () => {
    const size = getValues('sizes');
    console.log(size);
    
  }

  const onSubmit: SubmitHandler<IProduct> = async (data: any) => {

    await axios.post(`http://localhost:4000/api/products`, data).then(response => { console.log('Data sent successfully ', response.status); }).catch(error => { console.error('Error while sending data in admin/add : ', error) });

    // console.log("Form Data :", data);
  };


  const toggleSizeSelection = (size: string, isChecked: boolean) => {
    const currentSizes = getValues('sizes');
    const sizeIndex = currentSizes.findIndex((s) => s.size === size);
    if (isChecked) {
      if (sizeIndex < 0) {
        append({ size: size, colors: [{ color: '', colorName: '', quantity: '' }] }); // Add size with default details if it doesn't exist
      }
    } else {
      if (sizeIndex >= 0) {
        remove(sizeIndex); // Remove size if it exists
      }
    }
  };



  const showerors = () => {
    console.log(errors);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      {/* Title */}
      <div className="my-4 mt-12 flex flex-row gap-10 justify-between items-center">
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

      <div className="mb-4 flex flex-row gap-10 justify-center items-center">
        <label className="block text-gray-700">SP</label>
        <select
           id="categories"
          title="categories" {...register("category")}
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
        >
          <option value="BTMLWR" >Lower</option>
          <option  value="UPRSRT">Shirt</option>
          <option value="UPRTSR"> Tshirt</option>
          <option value="BTMJNS">Jeans</option>
        </select>
        {errors.category && <p className="text-red-500">{errors.category.message}</p>}
      </div>

      {['S', 'M', 'L', 'XL', 'XXL', 'XXXL'].map((size, index) => (

        <div key={index}>
          <Checkbox checked={fields.some((field) => field.size === size)}
            onChange={(e) => toggleSizeSelection(size, e.target.checked)}>{size}</Checkbox>

        </div>


      ))}



      {/* Sizes */}
      <div className="">
        {fields.map((sizeField, index) => (
          <div>
            <strong>{sizeField.size}</strong>
            <div>
              {sizeField.colors.map((color, colorIndex) => (
                <div key={index}>
                  <Controller control={control} name={`sizes.${index}.colors.${colorIndex}.color` as const} render={({ field }) => (
                    <input {...field} placeholder="ColorName" />

                  )} />
                  {errors.sizes?.[index]?.colors?.[colorIndex]?.color && <p>{errors.sizes?.[index]?.colors?.[colorIndex]?.color?.message}</p>}

                  <Controller
                    control={control}
                    name={`sizes.${index}.colors.${colorIndex}.colorName` as const}
                    render={({ field }) => (
                      
                      <InputColor
                        initialValue={field.value} // Use the field's value as the initial color
                        onChange={(color) => field.onChange(color.hex)} // Update form value when color changes
                        placement="right"
                      />
                    )}
                  />
                  {errors.sizes?.[index]?.colors?.[colorIndex]?.colorName && <p>{errors.sizes?.[index]?.colors?.[colorIndex]?.colorName?.message}</p>}

                  <Controller
                    control={control}
                    name={`sizes.${index}.colors.${colorIndex}.quantity` as const}
                    render={({ field }) => (
                      <input {...field} type="number" placeholder="Quantity" />
                    )}
                  />
                  {errors.sizes?.[index]?.colors?.[colorIndex]?.quantity && <p>{errors.sizes?.[index]?.colors?.[colorIndex]?.quantity?.message}</p>}

                </div>
              ))}

            </div>
            {errors.sizes && <p>{errors.sizes.message}</p>}
          </div>
        ))}
      </div>

      <button type="button" onClick={checksizes}>Check sizes</button>
      <button type="button" name="show error" onClick={showerors} >show errors</button>
      {/* <button
        type="button"
        name="submit"
        onClick={handleSubmit(onSubmit)}
        className="mt-4 h-8 w-40 px-2 py-1 bg-blue-500 text-white rounded-md">
      </button> */}
      <input type="submit" />
    </form>
  );
};

export default Form;

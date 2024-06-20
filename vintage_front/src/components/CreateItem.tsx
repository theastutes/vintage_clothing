"use client"
import { useState } from "react"
import { z } from "zod"
import React from 'react'
import { Controller, SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import { ISize } from "../../types/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { RadioGroup, Radio } from "@nextui-org/radio";
import { addToCart } from "../../action/action";
import axios from "axios";
const itemSchema = z.object({
    productId: z.string().optional(),
    quantity: z.number().optional(),
    size: z.string().optional(),
    color: z.string().optional(),
    colorName: z.string().optional(),
    email:z.string().optional(),
})

type PItem = z.infer<typeof itemSchema>;


function CreateItem({ productId, sizes, email }: { productId: string | undefined, sizes: ISize[] | undefined, email:string|undefined }) {

    const { register, control, handleSubmit, setValue, getValues, formState: { errors } } = useForm<PItem>({ resolver: zodResolver(itemSchema), mode: 'onChange' });

    const [selectedSize, setSelectedSize] = useState(0);
    const [selectedColor, setSelectedColor] = useState(0);

    const onSubmit: SubmitHandler<PItem> = async (data: any) => {
       //handleColor();
       setValue('productId', productId?.toString())
        if (sizes) {
            setValue('size', sizes[selectedSize].size);
            setValue('color', sizes[selectedSize].colors[selectedColor].color);
            setValue('colorName', sizes[selectedSize].colors[selectedColor].colorName);
            setValue('quantity', 1);
            setValue('email',email);
        }
        // await axios.post(`${process.env.MY_PATH}/api/cart/`,data).then(response => {console.log('Product added to cart successfully ');}).catch(error => {console.error('Error while sending data in api/cart : ',error)});
        addToCart(data);
        console.log(data);
    }

    const handleColor =  () => {
        setValue('productId', productId?.toString())
        if (sizes) {
            setValue('size', sizes[selectedSize].size);
            setValue('color', sizes[selectedSize].colors[selectedColor].color);
            setValue('colorName', sizes[selectedSize].colors[selectedColor].colorName);
            setValue('quantity', 1);
            setValue('email',email);
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {sizes?.map((currentSize, index) => (
                <div onClick={() => setSelectedSize(index)}>{currentSize.size}</div>
            ))}
            {sizes?.[selectedSize]?.colors?.map((colorDetail, index) => (
                <div onClick={() => setSelectedColor(index)} >
                    <div className="w-8 h-8 " style={{ backgroundColor: colorDetail.color }}></div>
                    <div >{colorDetail.colorName}</div>
                </div>
            ))}
            {errors.color && (
                <p className="text-red-500">{errors.color?.message}</p>
            )}
            {errors.colorName && (
                <p className="text-red-500">{errors.colorName?.message}</p>
            )}
            {errors.size && (
                <p className="text-red-500">{errors.size?.message}</p>
            )}
            {errors.quantity && (
                <p className="text-red-500">{errors.quantity?.message}</p>
            )}
            {errors.productId && (
                <p className="text-red-500">{errors.productId?.message}</p>
            )}

            <div >Buy Now</div>

            <button type="submit" title="addtocart">Add To Cart</button>
        </form>
    )
}

export default CreateItem
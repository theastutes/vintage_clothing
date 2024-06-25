"use client"
import { z } from "zod";
import { Controller, SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { IAddress } from "../../types/types";
import {addNewAddress} from "../../action/action"



const addressSchema = z.object({
    fullname: z.string(),
    phoneno: z.number(),
    pincode: z.number(),
    town: z.string(),
    state: z.string(),
    adres: z.string(),
})

const GetAddress = ({id}:{id:string}) => {

    const { register, control, getValues, setValue, watch, handleSubmit, formState: { errors, isSubmitting } } = useForm<IAddress>({ resolver: zodResolver(addressSchema) });

    const onSubmit: SubmitHandler<IAddress> = async (data: any) => {

        // await axios.post(`http://localhost:4000/api/products`, data).then(response => { console.log('Data sent successfully ', response.status); }).catch(error => { console.error('Error while sending data in admin/add : ', error) });

        addNewAddress(id,data);

        console.log("Form Data :", data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={"pl-14"}>
            <div><label htmlFor={"fullname"} >Full Name</label> <input type="text" title="fullname" {...register("fullname")}></input>  {errors.fullname && <p className="text-red-500">{errors.fullname.message!}</p>}
            </div>
            <div> <label title="phoneno" >Phone no</label> <input title="phoneno" type="number" {...register("phoneno", {
valueAsNumber: true,
})} />{errors.phoneno && <p className="text-red-500">{errors.phoneno.message}</p>}</div>
            <div> <label title="town" >Town</label> <input title="town" type="text" { ...register("town")} />{errors.town && <p className="text-red-500">{errors.town.message}</p>}</div>
            <div> <label title="state" >State</label> <input title="state" type="text" {...register("state")} />{errors.state && <p className="text-red-500">{errors.state.message}</p>}</div>
            <div> <label title="pincode" >Pincode</label> <input title="pincode" type="number" {...register("pincode", {
valueAsNumber: true,
})} />{errors.pincode && <p className="text-red-500">{errors.pincode.message}</p>}</div>
            <div> <label title="fulladdress" >Full Address</label>    <input title="fulladdress" type="textfield " {...register("adres")} />{errors.adres && <p className="text-red-500">{errors.adres.message}</p>}</div>

            <input type="submit"/>




        </form>
    )
}

export default GetAddress
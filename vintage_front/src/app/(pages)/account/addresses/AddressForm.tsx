"use client";
import { z } from "zod";
import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { addNewAddress } from "../../../../../action/action";
import { revalidate } from "../../../../../action/revalidate";
import { DialogClose } from "@/components/ui/dialog";

const addressSchema = z.object({
  fullname: z.string().min(1, "Full name is required"),
  phoneno: z.number().min(1000000000, "Invalid phone number"),
  pincode: z.number().min(100000, "Invalid pincode"),
  town: z.string().min(1, "Town is required"),
  state: z.string().min(1, "State is required"),
  adres: z.string().min(1, "Address is required"),
});

type AddressFormValues = z.infer<typeof addressSchema>;

const AddressForm = ({ email }: { email: string }) => {
  const methods = useForm<AddressFormValues>({
    resolver: zodResolver(addressSchema),
  });

  const onSubmit = async (data: AddressFormValues) => {
    try {
      const res = await addNewAddress({ email, address: data });
      await revalidate("/account/addresses");
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <FormField
          name="fullname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input {...field} placeholder={"Full Name"} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="phoneno"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input
                  placeholder="Phone Number"
                  type="number"
                  {...field}
                  {...methods.register("phoneno", { valueAsNumber: true })}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="pincode"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Pincode</FormLabel>
              <FormControl>
                <Input
                  placeholder="Pincode"
                  type="number"
                  {...field}
                  {...methods.register("pincode", { valueAsNumber: true })}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="town"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Town</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Town" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="state"
          render={({ field }) => (
            <FormItem>
              <FormLabel>State</FormLabel>
              <FormControl>
                <Input {...field} placeholder="State" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="adres"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Address" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full mx-auto mt-8" type="submit">
          Submit
        </Button>
      </form>
    </FormProvider>
  );
};

export default AddressForm;

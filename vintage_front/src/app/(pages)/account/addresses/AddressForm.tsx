"use client";
import { z } from "zod";
import React from "react";
import { useForm } from "react-hook-form";
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

const addressSchema = z.object({
  fullname: z.string().min(1, "Full name is required"),
  phoneno: z.number().min(1000000000, "Invalid phone number"),
  pincode: z.number().min(100000, "Invalid pincode"),
  town: z.string().min(1, "Town is required"),
  state: z.string().min(1, "State is required"),
  adres: z.string().min(1, "Address is required"),
});

type AddressFormValues = z.infer<typeof addressSchema>;

const AddressForm: React.FC = () => {
  const { control, handleSubmit } = useForm<AddressFormValues>({
    resolver: zodResolver(addressSchema),
  });

  const onSubmit = (data: AddressFormValues) => {
    console.log("Form data:", data);
    // Add your submit logic here
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormField
        name="fullname"
        control={control}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Full Name</FormLabel>
            <FormControl>
              <Input placeholder={"Full Name"} {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        name="phoneno"
        control={control}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Phone Number</FormLabel>
            <FormControl>
              <Input placeholder={"Phone Number"} type="number" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        name="pincode"
        control={control}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Pincode</FormLabel>
            <FormControl>
              <Input placeholder="Pincode" type="number" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        name="town"
        control={control}
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
        control={control}
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
        control={control}
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

      <Button type="submit">Submit</Button>
    </form>
  );
};

export default AddressForm;

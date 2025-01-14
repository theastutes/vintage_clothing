"use strict";
import axios from "axios";
import { IProduct, IItem, IAddress } from "../types/types";
import { revalidatePath } from "next/cache";
import { toast } from "sonner";

interface Iusersession extends Document {
  id: string;
  name: string;
  email: string;
  image: string;
}

export const getUsers = async <returnprops>() => {
  try {
    const data = await axios.get("http://localhost:4000/api/users");
    // console.log(data.data);
    return data;
  } catch (error) {
    console.log("error while getting users :", error);
  }
};

export const checkUser = async (
  id: string | undefined,
  name: string | undefined | null,
  email: string | undefined | null,
  image: string | undefined | null
) => {
  try {
    const data = { id, name, email, image };
    await axios.post("http://localhost:4000/api/users", data);
  } catch (error) {
    console.log("error while saving the user");
  }
};

export const login = async <IUser>({
  email,
  name,
  image,
  id,
}: {
  email: string;
  name: string;
  image: string;
  id: string;
}) => {
  try {
    console.log("|````````````````````````|");
    console.log("|                        |");

    console.log(
      "|   Id : ",
      id,
      "|   Name : ",
      name,
      "|",
      "\n|   Email: ",

      email.substring(0, 12),
      "|",
      "\n|   Image: ",

      image.substring(0, 12),
      "|"
    );
    console.log("|                        |");
    console.log("|________________________|");
    const data = await axios.post("http://localhost:4000/api/users", {
      name,
      email,
      image,
    });
    return data.data;
  } catch (error) {
    console.log("\nerror while adding user", error);
  }
};

export const getProducts = async (): Promise<IProduct[] | undefined> => {
  try {
    const response = await axios.get(
      `http://localhost:4000/api/products/getProducts`
      // getallProducts
    );
    // console.log("status code :", response.status, "Data:- :", response.data);

    return response.data;
  } catch (error) {
    console.log("error getting product!");
    return;
  }
};

export const getProduct = async ({
  productId
}: {
  productId: string | undefined;
}): Promise<IProduct | undefined> => {
  try {
    const id = productId?.toString();
    const response = await axios.post(
      `http://localhost:4000/api/products/getProduct`,
      { id }
    );
    //console.log("status code :", response.status, "Data:- :", response.data);
    return response.data;
  } catch (error) {
    console.log("error getting product!");
    return;
  }
};

export const updateCart = async (
  productId: string,
  quantity: number,
  email: string
) => {
  try {
    const res = await axios.post("http://localhost:4000/api/cart/updateCart", {
      productId,
      quantity,
      email,
    });
    console.log(res.status);
  } catch (error) {
    console.log("Error while updating cart");
  }
};

export const removeFromCart = async (productId: string, email: string) => {
  try {
    const res = await axios.post("http://localhost:4000/api/cart/updateCart", {
      productId,
      email,
    });
    console.log(res.status);
  } catch (error) {
    console.log("Error while updating cart");
  }
};

export const addToCart = async (id: string, email:string|undefined|null) => {
  console.log("In addToCart action.ts :  ", id);
  try {
    const response = await axios.post(`http://localhost:4000/api/cart/add`, {id,email});
    return { success: true };
  } catch (error) {
    return { error: "Error adding to cart!" };
  }
};

export const getCart = async ({
  email,
}: {
  email: string | undefined | null;
}): Promise<{ success?: IItem[]; error?: string }> => {
  try {
    const response = await axios.post(
      `http://localhost:4000/api/cart/getCart`,
      {
        email,
      }
    );
    return { success: response.data ?? [] };
  } catch (error) {
    return { error: "Sign in first or Check your connection!" };
  }
};

export const loginUser = async () => {
  try {
    console.log("135");
    await axios.get("http://localhost:4000/auth/google");

    console.log("137");
  } catch (error) {
    console.log("error while loggin in");
  }
};

type sdata = {
  data: string;
};

export async function searchMyData(data: string) {
  try {
    const res = await axios.post("http://localhost:4000/api/products/search", {
      data,
    });
    return res.data;
  } catch (error) {
    console.log("Error while Searching data in searchMyData", error);
  }
}

export async function getAddress(email: string): Promise<[IAddress] | null> {
  try {
    const res = await axios.post("http://localhost:4000/api/users/getAddr", {
      email,
    });
    return res.data;
  } catch (error) {
    console.log("error getting address");
    return null;
  }
}

export const addNewAddress = async ({
  email,
  address,
}: {
  email: string;
  address: IAddress;
}): Promise<boolean> => {
  console.log("In newAddress action.ts :  ", address);
  try {
    const data = { email, address };
    const response = await axios.post(
      `http://localhost:4000/api/users/adadres`,
      { email, address }
    );
    return true;
  } catch (error) {
    console.log("error adding address!");
    return false;
  }
};

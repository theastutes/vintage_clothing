"use strict";

import axios from "axios";
import { auth, signIn } from "../auth";
import { IUser, IProduct, returnprops, IItem } from "../types/types";
import { redirect } from "next/dist/server/api-utils";

export const getUsers = async <returnprops>() => {
  try {
    const data = await axios.get("http://localhost:4000/api/users");
    // console.log(data.data);
    return data;
  } catch (error) {
    console.log("error while getting users :", error);
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
      "http://localhost:4000/api/products/getProducts"
    );
    // console.log("status code :", response.status, "Data:- :", response.data);
    return response.data;
  } catch (error) {
    console.log("error getting product!");
    return;
  }
};

export const getProduct = async ({
  productId,
}: {
  productId: string;
}): Promise<IProduct | undefined> => {
  try {
    const id = productId.toString();
    const response = await axios.post(
      "http://localhost:4000/api/products/getProduct",
      { id }
    );
    //console.log("status code :", response.status, "Data:- :", response.data);
    return response.data;
  } catch (error) {
    console.log("error getting product!");
    return;
  }
};

export const addToCart = async ({
  productId,
}: {
  productId: string;
}): Promise<string> => {
  try {
    const id = productId.toString();
    const response = await axios.post("http://localhost:4000/api/cart/", {
      productId: id,
      size: "xl",
      color: "white",
      colorName: "white",
      email: "yashbishnoidelu@gmail.com",
    });
    console.log("Data:- :", response.data);
    return response.data;
  } catch (error) {
    console.log("error getting product!");
    return "";
  }
};

export const getCart = async ({
  email,
}: {
  email: string;
}): Promise<IItem[] | undefined> => {
  try {
    const response = await axios.post(
      "http://localhost:4000/api/cart/getCart",
      {
        email,
      }
    );
    console.log("Data:- :", response.data);
    return response.data ?? "";
  } catch (error) {
    console.log("error getting product!");
    return;
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

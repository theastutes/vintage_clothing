"use strict";

interface Iusersession extends Document {
  id:string,
  name:string,
  email:string,
  image:string,
}


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
//{id,name, email,image}:{id:string|undefined; name:string|undefined; email:string|undefined;image:string|undefined}
export const checkUser = async (id:string|undefined,name:string|undefined|null,email:string|undefined|null,image:string|undefined|null) =>{
  try{
    const data = {id, name, email, image }
    await axios.post("http://localhost:4000/api/users", data );
  }
  catch(error){
    console.log("error while saving the user");
  }
}

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
      `${process.env.MY_PATH}/api/products/getProducts`
     // getallProducts
    );
    // console.log("status code :", response.status, "Data:- :", response.data);
    
    return response.data;
  } catch (error) {
    console.log("error getting product!");
    return;
  }
};

export const getProduct = async ({productId}: {productId: string|undefined}): Promise<IProduct | undefined> => {
  try {
    const id = productId?.toString();
    const response = await axios.post(
      `${process.env.MY_PATH}/api/products/getProduct`,
      { id }
    );
    //console.log("status code :", response.status, "Data:- :", response.data);
    return response.data;
  } catch (error) {
    console.log("error getting product!");
    return;
  }
};


export const updateCart = async (productId:string, quantity:number, email:string) => {
  try {
    const res = await axios.post("http://localhost:4000/api/cart/updateCart",{productId,quantity,email});
    console.log(res.status);
  } catch (error) {
    console.log("Error while updating cart");
  }
}

export const removeFromCart = async (productId:string, email:string) => {
  try {
    const res = await axios.post("http://localhost:4000/api/cart/updateCart",{productId,email});
    console.log(res.status);
  } catch (error) {
    console.log("Error while updating cart");
  }
}

export const addToCart = async (myproduct:IItem) => {
  console.log("In addToCart action.ts :  ",myproduct);
  try {
    
    const response = await axios.post(`http://localhost:4000/api/cart/add`,myproduct).then(response => {console.log('Product added to cart successfully ');}).catch(error => {console.error('Error while sending data in api/cart : ',error)});
    //console.log("Data:- :", response.data);
    console.log(response);
  } catch (error) {
    console.log("error getting product!");
  }
};



export const getCart = async ({
  email,
}: {
  email: string|undefined|null;
}): Promise<IItem[] | undefined> => {
  try {
    const response = await axios.post(
      `${process.env.MY_PATH}/api/cart/getCart`,
      {
        email,
      }
    );
    // console.log("Data:- :", response.data);
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

type sdata = {
  data:string
}

export async function searchMyData(data:string){
  try {
    
    const res = await axios.post('http://localhost:4000/api/products/search',{data});
    return res.data;
  } catch (error) {
     console.log("Error while Searching data in searchMyData", error);
  }
  
}
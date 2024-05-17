"use strict";

import axios from "axios";
import { auth, signIn } from "../auth";
interface IUser {
  name: string;
  email: string;
  image: string;
  id: string;
}
interface returnprops {
  data: [IUser];
}

export const getUsers = async <returnprops>() => {
  try {
    const data = await axios.get("http://localhost:4000/api/users");
    console.log(data.data);
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

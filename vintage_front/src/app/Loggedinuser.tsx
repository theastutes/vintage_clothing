import React from "react";
import { login } from "../../action/action";
import { User } from "next-auth";
interface IUser {
  name: string;
  email: string;
  image: string;
  id: string;
}

const Loggedinuser = async ({ user }: { user: User | undefined }) => {
  const LoggedInUser = await login<IUser>({
    email: user?.email!,
    name: user?.name!,
    image: user?.image!,
    id: user?.id!,
  });
  return <div>{LoggedInUser?.name}</div>;
};

export default Loggedinuser;

import React from "react";
import { getUsers } from "../../action/action";
interface IUser {
  name: string;
  email: string;
  image: string;
  id: string;
}
interface reponseprops {
  data: [IUser];
}
const UserView = async () => {
  const users = await getUsers<reponseprops>();
  return (
    <div className="max-w-screen w-full h-fit backdrop-blur-3xl bg-white/30 tounded-xl m-2 p-2 overflow-x-hidden overflow-y-scroll px-4">
      got the users : {JSON.stringify(users?.data)}
    </div>
  );
};

export default UserView;

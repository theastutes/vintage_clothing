import { AuthError } from "@/lib/exceptions";
import React from "react";

const session = false;

const page = () => {
  if (!session) throw new AuthError();
  return <div>Store</div>;
};

export default page;

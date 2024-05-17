import React from "react";
import { auth } from "../../../../auth";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await auth();
  if (!session?.user) redirect("/");
  return (
    <div className="text-2xl h-screen flex items-center justify-center">
      Cart
    </div>
  );
};

export default page;

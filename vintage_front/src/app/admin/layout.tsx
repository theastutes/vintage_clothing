import React from "react";
import { auth } from "./../../../auth";
import { redirect } from "next/navigation";
async function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  if (session?.user?.email != "projectyjka@gmail.com") return redirect("/");
  else return <div className="w-screen h-full sm:pl-14">{children}</div>;
}

export default layout;

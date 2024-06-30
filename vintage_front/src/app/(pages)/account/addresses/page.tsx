import React from "react";
import { getAddress } from "../../../../../action/action";
import { auth } from "../../../../../auth";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { BsFillPinMapFill } from "react-icons/bs";
import { BiSolidEdit } from "react-icons/bi";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import { IoAdd } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import AddressForm from "./AddressForm";
import { IAddress } from "../../../../../types/types";
const page = async () => {
  const session = await auth();
  const address: [IAddress] | null = await getAddress(
    session?.user?.email ?? "projectyjka@gmail.com"
  );
  return (
    <div className="w-full h-full overflow-hidden">
      <div className="flex items-center gap-2 p-2">
        <BsFillPinMapFill size={20} />{" "}
        <span className="text-2xl">Addresses</span>
      </div>
      <div className="w-full h-full grid grid-cols-1 sm:grid-cols-3 gap-4 p-4">
        {address &&
          address.map((adres, index) => (
            <Card key={index} className="w-full">
              <CardHeader className="flex gap-3">
                <Image
                  alt="nextui logo"
                  height={40}
                  className="rounded-sm"
                  src={session?.user?.image ?? ""}
                  width={40}
                />
                <div className="flex flex-col">
                  <p className="text-md">{adres.fullname}</p>
                  <p className="text-small text-default-500">
                    {address[0].phoneno}
                  </p>
                </div>
              </CardHeader>
              <Divider />
              <CardBody>
                {/* <p> */}
                <ul>
                  <li className="font-bold">
                    <Label>State :</Label>{" "}
                    <span className="font-bold text-sm">{adres.state}</span>,
                  </li>
                  <li className="font-bold">
                    <Label>City :</Label>{" "}
                    <span className="font-bold text-sm">{adres.town}</span>,
                  </li>
                  <li className="font-bold">
                    <Label>Pincode :</Label>{" "}
                    <span className="font-bold text-sm">{adres.pincode}</span>,
                  </li>
                  <li className="font-bold">
                    <Label>Address :</Label>{" "}
                    <span className="font-bold text-sm">{adres.adres}</span>
                  </li>
                </ul>
                {/* </p> */}
              </CardBody>
              <Divider />
              <CardFooter>
                <div className="flex gap-2 cursor-pointer">
                  <BiSolidEdit size={20} /> <span>Edit Address</span>
                </div>
              </CardFooter>
            </Card>
          ))}
        <Card>
          <CardBody>
            <div className="w-full h-full flex items-center justify-center">
              <AddAddress />
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default page;

export async function AddAddress() {
  const session = await auth();
  return (
    <Dialog>
      <DialogTrigger asChild>
        {/* <Button variant="outline"> */}
        <IoAdd className="w-1/2 h-auto aspect-square font-extralight cursor-pointer" />
        {/* </Button> */}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <AddressForm email={session?.user?.email ?? ""} />
      </DialogContent>
    </Dialog>
  );
}

import {
  addToCart,
  getAddress,
  getProduct,
} from "../../../../../action/action";
import { IProduct } from "../../../../../types/types";
import { IoIosArrowForward } from "react-icons/io";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { CiShoppingCart } from "react-icons/ci";
import FixedHeightContainer from "../FixedHeightContainer";
import { Card } from "@nextui-org/card";
import React from "react";
import SNC from "../SNC";
import Images from "../Images";
import { buttonVariants } from "@/components/ui/button";
import Loading from "@/components/Loading";
import AddToCart from "../AddToCart";

interface wrapperProps extends React.AllHTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Page = async ({ params }: { params: { slug: string } }) => {
  const productId = params.slug;
  // const { data: item, isLoading, isError } = fetch({ productId });
  // if (isLoading) return <Loading />;
  // if (isError) return <div>Sorry There was an Error</div>;
  const item = await getProduct({
    productId,
  });
  // const session = await auth();
  if (!item) {
    return (
      <div className="h-screen w-full flex items-center justify-center">
        <Loading />
      </div>
    );
  }
  return (
    <FixedHeightContainer>
      <div className="relative w-full h-full flex items-start justify-between flex-col sm:flex-row  overflow-hidden">
        <Images images={item?.images ?? [""]} />
        <HethloWrapper>
          <Info title={item?.title} details={item?.details} />
          <SNC item={item} />
          <AddToCart item={item} />
        </HethloWrapper>
      </div>
    </FixedHeightContainer>
  );
};
export default Page;

const HethloWrapper: React.FC<wrapperProps> = ({ children }) => {
  return (
    <div className="relative flex flex-col items-center justify-between gap-2 w-full min-h-[35%] h-full sm:w-[50%] sm:h-full sm:rounded-none rounded-md sm:pt-16 pb-4">
      {children}
    </div>
  );
};

const Info = ({ title, details }: { title: string; details: string }) => {
  return (
    <section className="flex flex-col  items-center justify-center w-full text-black px-3 text-3xl py-4 pt-8 sm:pt-4">
      <h1 className="font-extrabold truncate line-clamp-1">{title}</h1>
      <p className="px-8 leading-tight line-clamp-6 text-medium text-gray-800 text-center">
        {details}
      </p>
    </section>
  );
};

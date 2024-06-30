import Link from "next/link";
import { IProduct } from "../../types/types";
import Image from "next/image";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { redirect, useRouter } from "next/navigation";

function ProductCard({ item }: { item: IProduct }) {
  const router = useRouter();
  return (
    <Card key={item._id} shadow="sm" isPressable onPress={() => redirect("")}>
      <Link className="h-full w-full" href={`/productDetail/${item._id}`}>
        <CardBody className="overflow-visible p-0">
          <Image
            // shadow="sm"
            // radius="lg"
            width={250}
            height={250}
            alt={item.title}
            className="w-full object-cover h-[140px] rounded-lg"
            src={item.images[0]}
          />
        </CardBody>
        <CardFooter className="text-small justify-between">
          <b>{item.title}</b>
          <p className="text-default-500">{item.sp}</p>
        </CardFooter>
      </Link>
    </Card>

    // <Link
    //   href={`/productDetail/${item._id}`}
    //   key={item._id}
    //   className="relative sm:h-[22rem] sm:w-72 h-full w-full  aspect-square rounded-2xl  backdrop-blur-2xl  overflow-hidden "
    // >
    //   <Image
    //     className=" rounded-2xl"
    //     src={item.images[0]}
    //     alt="Image"
    //     height={300}
    //     width={300}
    //     style={{ objectFit: "cover" }}
    //   />
    //   <div className=" max-sm:absolute z-30 bottom-0 h-[20%]  backdrop-blur-sm w-full py-1 text-myblack text-wrap truncate text-sm select-none">
    //     <div className="flex flex-row justify-center items-center text-lg px-1">
    //       <div className="text-sm">{item.title}</div>
    //       {/* <div>{item.sp}</div> */}
    //     </div>
    //     {/* <div className="p-2 px-4 text-xs">{item.details}</div> */}
    //   </div>
    //   {/* <div className="absolute h-[15%] z-30 w-full bg-gradient-to-t from-mywhite to-transparent bottom-0"></div> */}
    // </Link>
  );
}

export default ProductCard;

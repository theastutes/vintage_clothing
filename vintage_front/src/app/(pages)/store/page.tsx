import dynamic from "next/dynamic";
import { josefin } from "@/components/ui/fonts";
import { IProduct } from "../../../../types/types";
import { getProducts } from "../../../../action/action";
import ToastNotification from "@/comp/ToastNotification";
import { GiSettingsKnobs } from "react-icons/gi";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const FilterComponent = dynamic(() => import("./FilterView"));

export default async function page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const data: IProduct[] | undefined = await getProducts();
  if (!data) {
    return (
      <ToastNotification
        message="Network Error"
        description="Error getting Products, Check your connection and retry"
      />
    );
  }
  const category = useSearchParams().get("category");
  const query = useSearchParams().get("query");

  return (
    <div className="w-full h-full min-h-screen flex flex-col items-center justify-start">
      <div className="h-14 max-w-2xl mx-auto w-full flex items-center justify-between px-4">
        <div className={`${josefin.className} text-3xl`}>Explore</div>
        <GiSettingsKnobs className="text-4xl rounded-full p-2 cursor-pointer" />
      </div>
      <div className="transition-all duration-1000 flex flex-row h-12 max-w-2xl mx-auto w-full justify-around items-center overflow-hidden overflow-x-scroll">
        <Link
          href={`/store/?category=${category}&query=${query}`}
          className="rounded-2xl px-4 text-xs font-semibold text-black h- cursor-pointer h-8 flex items-center border-1 border-black line-clamp-1 truncate"
        >
          All
        </Link>
        <Link
          href={`/store/?category=${category}&query=${query}`}
          className="rounded-2xl px-4 cursor-pointer text-xs font-semibold text-black h-8 flex items-center border-1 border-black line-clamp-1 truncate"
        >
          Top Wear
        </Link>
        <Link
          href={`/store/?category=${category}&query=${query}`}
          className="rounded-2xl px-4 cursor-pointer text-xs font-semibold text-black h-8 flex items-center border-1 border-black line-clamp-1 truncate"
        >
          Bottom Wear
        </Link>
        <Link
          href={`/store/?category=${category}&query=${query}`}
          className="rounded-2xl px-4 cursor-pointer text-xs font-semibold text-black h-8 flex items-center border-1 border-black line-clamp-1 truncate"
        >
          Jeans{" "}
        </Link>
        <Link
          href={`/store/?category=${category}&query=${query}`}
          className="rounded-2xl px-4 cursor-pointer text-xs font-semibold text-black h-8 flex items-center border-1 border-black line-clamp-1 truncate"
        >
          Shirts
        </Link>
      </div>

      <div>
        <FilterComponent products={data} />
      </div>
    </div>
  );
}

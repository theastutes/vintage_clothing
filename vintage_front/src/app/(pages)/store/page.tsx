import dynamic from "next/dynamic";
import { josefin } from "@/components/ui/fonts";
import { IProduct } from "../../../../types/types";
import { getProducts } from "../../../../action/action";
import ToastNotification from "@/comp/ToastNotification";

const FilterComponent = dynamic(() => import("./FilterView"));

const page = async () => {
  const data: IProduct[] | undefined = await getProducts();
  if (!data) {
    return (
      <ToastNotification
        message="Network Error"
        description="Error getting Products, Check your connection and retry"
      />
    );
  }

  return (
    <div className="w-full h-full min-h-screen flex flex-col items-center justify-start">
      <div>
        <FilterComponent products={data} />
      </div>
    </div>
  );
};

export default page;

import { Suspense } from "react";
import ItemView from "./ItemView";
import Loading from "@/app/Loading";

const page = async () => {
  return (
    <div className="w-full relative h-fit min-h-screen pt-10 flex flex-col items-center justify-start">
      <div className="w-full h-fit pb-2">
        <Title />
        <Search />
      </div>
      <div className="h-full w-full flex items-center justify-center">
        <Suspense fallback={<Loading />}>
          <ItemView />
        </Suspense>
      </div>
    </div>
  );
};

export default page;

const Title = () => {
  return (
    <div className="leading-tight w-full -space-y-5">
      <div className="text-black text-[3rem] px-2 leading-tight">EXPLORE</div>
      <div className="text-black text-[3rem] px-2 leading-tight">YOUR TYPE</div>
    </div>
  );
};
const Search = () => {
  return (
    <div className="relative h-14 sm:h-12 w-full bg-red-900 mx-auto sm:w-[90%] py-2 px-4 bg-transparent">
      <input
        placeholder="🔍"
        className="w-full h-full px-4 bg-black/25 border-0 text-black rounded-2xl"
      />
    </div>
  );
};

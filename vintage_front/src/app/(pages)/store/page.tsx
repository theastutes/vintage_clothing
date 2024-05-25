import { Suspense } from "react";
import Search from "../../../components/Search/page";
import ItemView from "./ItemView";
import Loading from "@/app/Loading";

const session = false;

const page = async () => {
  return (
    <div className="w-full relative h-fit min-h-screen sm:pt-4 pt-12 flex flex-col items-center justify-start">
<<<<<<< HEAD
      <div className="w-full h-40 pb-2">
=======
<<<<<<< HEAD
      <div className="bg-red-900 w-full h-40 pb-2">
=======
<<<<<<< HEAD
      <div className="w-full h-40 pb-2">
=======
      <div className=" w-full h-40 pb-2">
>>>>>>> f4ec3c5 (added authentication v1)
>>>>>>> a02a66d (ned)
>>>>>>> 4850929 (ned)
        <div className="text-[3rem] mr-auto mb-6 px-2 flex flex-col font-serif">
          STORE
        </div>
        <div className="relative h-14 sm:h-12 w-full sm:w-[90%] py-2 px-4 bg-transparent">
          <Search />
        </div>
      </div>
<<<<<<< HEAD
      <Suspense fallback={<Loading />}>
        <ItemView />
      </Suspense>
=======
<<<<<<< HEAD
      <div className="h-full relative bg-pink-700 w-full">
        <Suspense fallback={<Loading />}>
          <ItemView />
        </Suspense>
      </div>
=======
<<<<<<< HEAD
      <Suspense fallback={<Loading />}>
        <ItemView />
      </Suspense>
=======
      
        <Suspense fallback={<Loading />}>
          <ItemView />
        </Suspense>

>>>>>>> f4ec3c5 (added authentication v1)
>>>>>>> a02a66d (ned)
>>>>>>> 4850929 (ned)
    </div>
  );
};

export default page;

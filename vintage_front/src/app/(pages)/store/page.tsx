import { AuthError } from "@/lib/exceptions";
import Search from "../../../components/Search/page";

const session = false;

const page = () => {
  return (
    <div className="w-full h-fit min-h-screen sm:pt-4 pt-12 flex flex-col items-center justify-center">
      <div className="text-[3rem] mr-auto mb-6 px-2 flex flex-col font-serif">
        <div className="">STORE</div>
        {/* <div className="-mt-6">HUNT</div> */}
      </div>
      <div className="h-20 w-full p-2 pb-4">
        <Search />
      </div>
      <div className="w-full h-full max-w-full overflow-x-hidden min-h-fit grid sm:grid-cols-4 sm:w-[60%] grid-cols-2 gap-1 px-1">
        <div className="h-full aspect-square rounded-[2px] bg-white/30 backdrop-blur-2xl"></div>
        <div className="h-full aspect-square rounded-[2px] bg-white/30 backdrop-blur-2xl"></div>
        <div className="h-full aspect-square rounded-[2px] bg-white/30 backdrop-blur-2xl"></div>
        <div className="h-full aspect-square rounded-[2px] bg-white/30 backdrop-blur-2xl"></div>
        <div className="h-full aspect-square rounded-[2px] bg-white/30 backdrop-blur-2xl"></div>
        <div className="h-full aspect-square rounded-[2px] bg-white/30 backdrop-blur-2xl"></div>
        <div className="h-full aspect-square rounded-[2px] bg-white/30 backdrop-blur-2xl"></div>
        <div className="h-full aspect-square rounded-[2px] bg-white/30 backdrop-blur-2xl"></div>
        <div className="h-full aspect-square rounded-[2px] bg-white/30 backdrop-blur-2xl"></div>
        <div className="h-full aspect-square rounded-[2px] bg-white/30 backdrop-blur-2xl"></div>
        <div className="h-full aspect-square rounded-[2px] bg-white/30 backdrop-blur-2xl"></div>
        <div className="h-full aspect-square rounded-[2px] bg-white/30 backdrop-blur-2xl"></div>
        <div className="h-full aspect-square rounded-[2px] bg-white/30 backdrop-blur-2xl"></div>
        <div className="h-full aspect-square rounded-[2px] bg-white/30 backdrop-blur-2xl"></div>
        <div className="h-full aspect-square rounded-[2px] bg-white/30 backdrop-blur-2xl"></div>
        <div className="h-full aspect-square rounded-[2px] bg-white/30 backdrop-blur-2xl"></div>
        <div className="h-full aspect-square rounded-[2px] bg-white/30 backdrop-blur-2xl"></div>
        <div className="h-full aspect-square rounded-[2px] bg-white/30 backdrop-blur-2xl"></div>
        <div className="h-full aspect-square rounded-[2px] bg-white/30 backdrop-blur-2xl"></div>
        <div className="h-full aspect-square rounded-[2px] bg-white/30 backdrop-blur-2xl"></div>
        <div className="h-full aspect-square rounded-[2px] bg-white/30 backdrop-blur-2xl"></div>
        <div className="h-full aspect-square rounded-[2px] bg-white/30 backdrop-blur-2xl"></div>
        <div className="h-full aspect-square rounded-[2px] bg-white/30 backdrop-blur-2xl"></div>
        <div className="h-full aspect-square rounded-[2px] bg-white/30 backdrop-blur-2xl"></div>
        <div className="h-full aspect-square rounded-[2px] bg-white/30 backdrop-blur-2xl"></div>
        <div className="h-full aspect-square rounded-[2px] bg-white/30 backdrop-blur-2xl"></div>
        <div className="h-full aspect-square rounded-[2px] bg-white/30 backdrop-blur-2xl"></div>
        <div className="h-full aspect-square rounded-[2px] bg-white/30 backdrop-blur-2xl"></div>
        <div className="h-full aspect-square rounded-[2px] bg-white/30 backdrop-blur-2xl"></div>
        <div className="h-full aspect-square rounded-[2px] bg-white/30 backdrop-blur-2xl"></div>
        <div className="h-full aspect-square rounded-[2px] bg-white/30 backdrop-blur-2xl"></div>
        <div className="h-full aspect-square rounded-[2px] bg-white/30 backdrop-blur-2xl"></div>
        <div className="h-full aspect-square rounded-[2px] bg-white/30 backdrop-blur-2xl"></div>
        <div className="h-full aspect-square rounded-[2px] bg-white/30 backdrop-blur-2xl"></div>
        <div className="h-full aspect-square rounded-[2px] bg-white/30 backdrop-blur-2xl"></div>
        <div className="h-full aspect-square rounded-[2px] bg-white/30 backdrop-blur-2xl"></div>
      </div>
    </div>
  );
};

export default page;

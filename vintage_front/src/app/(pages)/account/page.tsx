import LoginButton from "@/comp/LoginButton";
import React, { Suspense } from "react";
import { auth } from "../../../../auth";
import Image from "next/image";
import { PiPerson } from "react-icons/pi";
import { HiUser } from "react-icons/hi";
import axios from "axios";
import { loginUser } from "../../../../action/action";
import Link from "next/link";
import Loading from "@/components/Loading";
import { access } from "fs";
import { signIn, signOut } from "../../../../auth";

const page = async () => {
  // try{
  //   const user = await axios.get("http://localhost:4000/account",{withCredentials:true});
  //   console.log(user.data)}
  //   catch(err){
  //     console.log("Caught an error : ", err)
  //   }

  const session = await auth();
  console.log(session?.user);

  if (!session?.user) {
    return (
      <div className="flex flex-col bg-brown-secondary justify-center items-center text-mywhite h-screen w-full">
        <p className="text-4xl mb-8">
          Seems Like You haven&apos;t Signed Up Yet
        </p>
        <p className="mb-4">Sign in and join the fashion capital of Punjab</p>
        <form
          action={async () => {
            "use server";
            await signIn();
          }}
          className="p-2 shadow-lg shadow-drop rounded-xl bg-mywhite text-brown"
        >
          <button type="submit">Sign in</button>
        </form>
      </div>
    );
  }

  return (
    <div className="h-screen w-full max-sm:pt-14 flex sm:flex-row flex-col overflow-hidden justify-center items-center  gap-4">
      <div className="h-screen select-none relative overflow-hidden overflow-y-scroll w-full flex flex-col gap-2 sm:flex-row items-center text-2x p-2">
        <div className="sm:w-1/3 sm:h-full h-[25%] flex items-center justify-center w-full p-2">
          <div className=" flex flex-col gap-2 w-full h-full  sm:h-[80%] p-2 shadow-lg shadow-gray-300 rounded-3xl">
            <div className="flex  justify-center items-center aspect-square rounded-t-2xl bg-brown-secondary overflow-hidden ">
              <Image
                src={session?.user?.image!}
                alt="User Image"
                height={60}
                width={60}
                style={{ objectFit: "cover" }}
                className="  rounded-full aspect-square "
              />
            </div>
            <div className="flex flex-row items-center justify-between">
              <div>{session?.user?.name!}</div>
              <form
                action={async () => {
                  "use server";
                  await signOut({ redirectTo: "/" });
                }}
                className="px-2 py-1 shadow-lg shadow-drop rounded-xl bg-mywhite text-brown mr-2"
              >
                <button type="submit">Sign Out</button>
              </form>
            </div>
            <div className="text-sm">{session?.user?.email}</div>
          </div>
        </div>
        <div className="sm:h-full sm:w-2/3  w-full h-full min-h-fit flex items-center justify-center">
          <div className="grid grid-flow-col grid-cols-2 grid-rows-2 gap-2 sm:gap-4 p-2  sm:h-[80%] h-[59%] w-full text-xs">
            <div className="relative shadow-md shadow-gray-500 bg-black/80 rounded-2xl  overflow-hidden">
              <div className="opacity-0 hover:opacity-100 rounded-2xl transition-all duration-700 absolute flex items-center justify-center text-2xl font-extralight bg-white/5 backdrop-blur-sm left-0 right-0 top-0 bottom-0">
                Address
              </div>
              <Suspense fallback={<Loading />}>
                <Image
                  src={
                    "https://images.unsplash.com/photo-1586449480558-33ae22ffc60d?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  }
                  alt=""
                  height={200}
                  width={200}
                  className="h-full w-full"
                  style={{ objectFit: "cover" }}
                />
              </Suspense>
            </div>
            <Link
              href={"/account/addresses"}
              className="relative shadow-md shadow-gray-500 bg-black/80 rounded-2xl  overflow-hidden"
            >
              <div className="opacity-0 hover:opacity-100 rounded-2xl transition-all duration-700 absolute flex items-center justify-center text-2xl font-extralight bg-white/5 backdrop-blur-sm left-0 right-0 top-0 bottom-0">
                Address
              </div>
              <Suspense fallback={<Loading />}>
                <Image
                  src={
                    "https://images.unsplash.com/photo-1586449480558-33ae22ffc60d?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  }
                  alt=""
                  height={200}
                  width={200}
                  className="h-full w-full"
                  style={{ objectFit: "cover" }}
                />
              </Suspense>
            </Link>

            <div className="relative shadow-md shadow-gray-500 bg-black/80 rounded-2xl  overflow-hidden">
              <div className="opacity-0 text-mywhite hover:opacity-100 rounded-2xl transition-all duration-700 absolute flex items-center justify-center text-2xl font-extralight bg-white/5 backdrop-blur-sm left-0 right-0 top-0 bottom-0">
                Orders
              </div>
              <Suspense fallback={<Loading />}>
                <Image
                  src={
                    "https://plus.unsplash.com/premium_vector-1682298485852-79eb8ffe4320?bg=FFFFFF&w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fG9yZGVyc3xlbnwwfHwwfHx8MA%3D%3D"
                  }
                  alt=""
                  height={200}
                  width={200}
                  className="h-full w-full"
                  style={{ objectFit: "cover" }}
                />
              </Suspense>
            </div>
            <div className="relative shadow-md shadow-gray-500 bg-black/80 rounded-2xl  overflow-hidden">
              <div className="opacity-0 hover:opacity-100 rounded-2xl transition-all duration-700 absolute flex items-center justify-center text-2xl font-extralight bg-white/5 backdrop-blur-sm left-0 right-0 top-0 bottom-0">
                Address
              </div>
              <Suspense fallback={<Loading />}>
                <Image
                  src={
                    "https://images.unsplash.com/photo-1586449480558-33ae22ffc60d?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  }
                  alt=""
                  height={400}
                  width={400}
                  className="h-full w-full"
                  style={{ objectFit: "cover" }}
                />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

// {/* <div className="px-3 pt-10 w-full flex items-center text-3xl text-black font-serif justify-start">
//       </div>
//       <hr />
//       <div className="h-screen select-none relative overflow-hidden overflow-y-scroll w-full flex flex-col gap-2 sm:flex-row items-center text-2xl">

//         <div className="sm:w-1/2 sm:h-full h-[25%] flex items-start justify-center w-full">
//           <div className=" flex flex-col gap-6 w-full h-full  sm:h-[75%] p-2 text-black">
//             {/* <div className="flex shadow-lg shadow-gray-300 justify-center items-center aspect-square rounded-full overflow-hidden">
//               <Image
//                 src={session?.user?.image!}
//                 alt="User Image"
//                 height={20}
//                 width={20}
//                 style={{ objectFit: "cover" }}
//                 className=" bg-red-400 rounded-full aspect-square "
//               />
//             </div> */}

//           </div>
//         </div>

// <div className="sm:h-full sm:w-1/2  w-full h-full min-h-fit flex items-start justify-center">

//   <div className="grid grid-flow-col grid-cols-2 grid-rows-2 gap-2 p-2  sm:h-[80%] h-[59%] w-full text-xs">
//     <div className="relative shadow-md shadow-gray-500 bg-black/80 rounded-2xl  overflow-hidden">
//       <div className="opacity-0 hover:opacity-100 rounded-2xl transition-all duration-700 absolute flex items-center justify-center text-2xl font-extralight bg-white/5 backdrop-blur-sm left-0 right-0 top-0 bottom-0">
//         Address
//       </div>
//       <Suspense fallback={<Loading />}>
//         <Image
//           src={
//             "https://images.unsplash.com/photo-1586449480558-33ae22ffc60d?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//           }
//           alt=""
//           height={200}
//           width={200}
//           className="h-full w-full"
//           style={{ objectFit: "cover" }}
//         />
//       </Suspense>
//     </div>
//     <div className="relative shadow-md shadow-gray-500 bg-black/80 rounded-2xl  overflow-hidden">
//       <div className="opacity-0 hover:opacity-100 rounded-2xl transition-all duration-700 absolute flex items-center justify-center text-2xl font-extralight bg-white/5 backdrop-blur-sm left-0 right-0 top-0 bottom-0">
//         Address
//       </div>
//       <Suspense fallback={<Loading />}>
//         <Image
//           src={
//             "https://images.unsplash.com/photo-1586449480558-33ae22ffc60d?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//           }
//           alt=""
//           height={200}
//           width={200}
//           className="h-full w-full"
//           style={{ objectFit: "cover" }}
//         />
//       </Suspense>
//     </div>

//     <div className="relative shadow-md shadow-gray-500 bg-black/80 rounded-2xl  overflow-hidden">
//       <div className="opacity-0 text-white hover:opacity-100 rounded-2xl transition-all duration-700 absolute flex items-center justify-center text-2xl font-extralight bg-white/5 backdrop-blur-sm left-0 right-0 top-0 bottom-0">
//       {session?.user?.email}
//       </div>
//       <Suspense fallback={<Loading />}>
//         <Image
//           src={
//             "https://plus.unsplash.com/premium_vector-1682298485852-79eb8ffe4320?bg=FFFFFF&w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fG9yZGVyc3xlbnwwfHwwfHx8MA%3D%3D"
//           }
//           alt=""
//           height={200}
//           width={200}
//           className="h-full w-full"
//           style={{ objectFit: "cover" }}
//         />
//       </Suspense>
//     </div>
//     <div className="relative shadow-md shadow-gray-500 bg-black/80 rounded-2xl  overflow-hidden">
//       <div className="opacity-0 hover:opacity-100 rounded-2xl transition-all duration-700 absolute flex items-center justify-center text-2xl font-extralight bg-white/5 backdrop-blur-sm left-0 right-0 top-0 bottom-0">
//         Address
//       </div>
//       <Suspense fallback={<Loading />}>
//         <Image
//           src={
//             "https://images.unsplash.com/photo-1586449480558-33ae22ffc60d?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//           }
//           alt=""
//           height={400}
//           width={400}
//           className="h-full w-full"
//           style={{ objectFit: "cover" }}
//         />
//       </Suspense>
//     </div>
//   </div>
// </div>
//         {/* <Link href={"http://localhost:4000/auth/google"} className="absolute bottom-32">Login</Link>
//         <Link href = {"http://localhost:4000/logout"} className="absolute bottom-26">Logout</Link> */}

// <form
//   action={async () => {
//     "use server"
//     await signIn()
//   }}
// >
//   <button type="submit">Sign in</button>
// </form>

//      <form
//        action={async () => {
//          "use server"
//          await signOut({redirectTo:"/"});
//        }}
//      >
//        <button type="submit">Sign Out</button>
//      </form>
//       </div> */}

{
  /*<div className="text-sky-600 text-sm font-semibold sm:py-3  flex flex-col items-center justify-center text-wrap col-span-2 w-full h-full sm:h-32 bg-white/90 rounded-2xl overflow-hidden">
              <div className="w-full rounded-md h-full flex items-center justify-between px-5">
                <span className="w-1/4 truncate line-clamp-1">Name :</span>
                <span className="w-full truncate line-clamp-1">
                  Yash Bishnoi
                </span>
              </div>
              <hr className="w-full border-black/60" />
              <div className="w-full rounded-md h-full flex items-center justify-between px-5">
                <span className="w-1/4 truncate line-clamp-1">Email :</span>
                <span className="w-full truncate line-clamp-1">
                  yashbishnoidelu@gmail.com
                </span>
              </div>
              </div>*/
}

<<<<<<< HEAD
"use server"
import Image from "next/image";


import { auth, signIn, signOut } from "../../auth";


export default async function Home() {


  return (
    <main className="flex min-h-screen flex-col bg-black text-white items-center justify-between p-24">
      
      <form
        className="w-full h-full text-center flex items-center justify-center"
        action={async () => {
          "use server";
          await signIn("google");
        }}
      >
 
          

          <button
            className="p-4 px-12 font-mono font-bold text-white bg-white/30 hover:bg-white hover:text-black active:bg-white/30 active:text-white transition-colors duration-300 rounded-lg"
            type="submit"
          >
            S I G N I N
          </button>

          
    
      </form>

      <form
        className="w-full h-full text-center flex items-center justify-center"
        action={async () => {
          "use server";
         await signOut();
        }}
      >
 
          

          <button
            className="p-4 px-12 font-mono font-bold text-white bg-white/30 hover:bg-white hover:text-black active:bg-white/30 active:text-white transition-colors duration-300 rounded-lg"
            type="submit"
          >
            S I G N O U T
          </button>

          
    
      </form>



=======
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black text-white items-center justify-between p-24">
      Hello
>>>>>>> d329daa3c9bc489299ed82c1c29389a05b5ebaa9
    </main>
  );
}

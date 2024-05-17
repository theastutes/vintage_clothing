import { Suspense } from "react";
import { auth, signIn, signOut } from "../../auth";
import Loading from "./Loading";
import UserView from "./UserView";
import Loggedinuser from "./Loggedinuser";
import { AuthError } from "@/lib/exceptions";

interface IUser {
  name: string;
  email: string;
  image: string;
  id: string;
}
interface reponseprops {
  data: [IUser];
}

export default async function Home() {
  const session = await auth();
  const user = session?.user;
  if (!user) {
    throw new AuthError();
  }

  return (
    <main className="flex min-h-screen w-screen h-screen max-w-screen flex-col bg-black text-white items-center justify-between p-24 overflow-hidden">
      Home
      <form
        className="w-full h-full text-center flex items-center justify-center"
        action={async () => {
          "use server";
          try {
            await signIn("google");
          } catch (error) {
            throw new Error("signin error");
          }
        }}
      >
        <button
          className="p-4 px-12 font-mono font-bold text-white bg-white/30 hover:bg-white hover:text-black active:bg-white/30 active:text-white transition-colors duration-300 rounded-lg"
          type="submit"
        >
          S I G N I N{session?.user?.name}
        </button>
      </form>
      <Suspense fallback={<Loading />}>
        <Loggedinuser user={user} />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <div className="w-screen h-full">
          <UserView />
        </div>
      </Suspense>
    </main>
  );
}

"use server";
import Link from "next/link";
import { auth, signIn, signOut } from "../../auth";

const LoginButton = async () => {
  const session = await auth();
  const user = session?.user;

  return (
    <div className="w-full flex items-center justify-center">
      {user ? (
        <div className="flex flex-row items-center justify-between w-full px-2">
          <Link
            className={`hover:underline transition-all duration-700`}
            href={"/account"}
          ></Link>
          <form
            className="text-center mx-auto  flex items-center justify-center"
            action={async () => {
              "use server";
              await signOut();
            }}
          >
            <button
              className="text-xs bg-white/20 backdrop-blur-3xl py-1 px-4 rounded-md"
              type="submit"
            >
              LogOut
            </button>
          </form>
        </div>
      ) : (
        <form
          className="w-full h-full text-center flex items-center justify-center"
          action={async () => {
            "use server";
            await signIn("google");
          }}
        >
          <button
            className="text-xs h-8 w-20 aspect-square bg-white/20 backdrop-blur-3xl py-1 px-4 rounded-md"
            type="submit"
          >
            LogIn
            {/* <CiReceipt /> */}
          </button>
        </form>
      )}
    </div>
  );
};

export default LoginButton;

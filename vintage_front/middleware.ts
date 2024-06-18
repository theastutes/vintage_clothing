// // import { auth } from "./auth";
// import authConfig from "./auth.config"
// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";
// import { getToken } from "next-auth/jwt";



// import NextAuth from "next-auth"

// type UserSession = {
//   user: {
//     name?: string;
//     email?: string;
//     image?: string;
    
//   };
// };
 
// // Use only one of the two middleware options below
// // 1. Use middleware directly
// // export const { auth: middleware } = NextAuth(authConfig)
 
// // 2. Wrapped middleware option
// const { auth  } = NextAuth(authConfig);
// export default auth(async function middleware(request: NextRequest) {
//   // const session = (await getToken({
//   //   req: request, secret: process.env.NEXTAUTH_SECRET as string,
//   //   salt: "karan"
//   // })) as UserSession | null;

//   const session = await auth();

//   console.log("Reached middleware ",session?.user)

//   const { pathname } = request.nextUrl;

//   // Define your role-based access control logic
//   const isAdminRoute = pathname.startsWith('/admin/*');
  
//   const isAdminRole = session?.user!.email === 'karanmaurya81002@gmail.com';

//   if (isAdminRoute && !isAdminRole) {
//     // If the user is not an admin and tries to access an admin route, redirect them
//     return NextResponse.redirect(new URL('/', request.url));
//   }

//   return NextResponse.next();
// })

// // Define a type for the user session


// // export async function middleware(request: NextRequest) {
// //   const session = (await getToken({
// //     req: request, secret: process.env.NEXTAUTH_SECRET as string,
// //     salt: "karan"
// //   })) as UserSession | null;

// //   const { pathname } = request.nextUrl;

// //   // Define your role-based access control logic
// //   const isAdminRoute = pathname.startsWith('/admin');
  
// //   const isAdminRole = session?.user.email === 'karanmaurya81002@gmail.com';

// //   if (isAdminRoute && !isAdminRole) {
// //     // If the user is not an admin and tries to access an admin route, redirect them
// //     return NextResponse.redirect(new URL('/', request.url));
// //   }

// //   return NextResponse.next();
// // }


export { auth as middleware } from "./auth";
// export const config = {
//   matcher: ["/","/store"],
// };

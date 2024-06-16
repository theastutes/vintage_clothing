import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import clientPromise from "./lib/mongodb_adapter";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import {User} from "./models/User";
import mongoose from "mongoose";
import { NextResponse } from "next/server";



export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  providers: [Google],
  secret: "secret",
  callbacks: {
    session({ session, user }) {
      session.user.id = user.id
      return session
    },
  }
  
  // pages: {
  //   error: "/",
  //   signIn: "/store",
  //   signOut: "/cart",
  // },
});

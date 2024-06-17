import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import clientPromise from "./lib/mongodb_adapter";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import authConfig from "./auth.config"
import {User} from "./models/User";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { AdapterUser } from "next-auth/adapters";


export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  
  secret: "secret",
  ...authConfig ,
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

import NextAuth from "next-auth"
 import Google from "next-auth/providers/google"
 import clientPromise from "./lib/db"
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import User from "./models/User"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  secret:"secret",
  adapter: MongoDBAdapter(clientPromise),
  callbacks: {
    async signIn({ user, account, profile }) {
        if (account?.provider === 'google') {
          // Check if the user exists in your MongoDB
          const existingUser = await User.findOne({ email: profile?.email });
          if (existingUser) {
            // Update user with any new data
            existingUser.name = profile?.name || existingUser.name;
            existingUser.image = profile?.picture || existingUser.image;
            await existingUser.save();
            return true; // Sign-in successful
          } else {
            // Create a new user in MongoDB
            const newUser = await User.create({
              name: profile?.name,
              email: profile?.email,
              image: profile?.picture,
            });
            return newUser ? true : false; // Sign-in successful if newUser is not null
          }
        }
        return true; // Sign-in successful for other providers
      },
      async session({ session, user }) {
        // Attach user data to the session
        session.user = user;
        return session;
      },
  }
})
// lib/custom-mongodb-adapter.ts

import { Adapter, AdapterSession, AdapterUser } from 'next-auth/adapters';
import { MongoDBAdapter } from '@auth/mongodb-adapter';
import {User,  IUser } from '../models/User';
import { MongoClient } from 'mongodb';



const CustomMongoDBAdapter = (clientPromise: Promise<MongoClient>): Adapter => {
  const defaultAdapter = MongoDBAdapter(clientPromise);

  const user:Partial<AdapterUser> = {
    id:'userId',
  }

  return {
    ...defaultAdapter,
    async getUser(id: string) {
      if (!defaultAdapter.getUser) {
        throw new Error('getUser method is not implemented.');
      }

      const user = await defaultAdapter.getUser(id);
      return user;
    },
    async getUserByEmail(email: string) {
      if (!defaultAdapter.getUserByEmail) {
        throw new Error('getUserByEmail method is not implemented.');
      }

      const user = await defaultAdapter.getUserByEmail(email);
      return user;
    },
    async getUserByAccount({ provider, providerAccountId }: { provider: string; providerAccountId: string }) {
      if (!defaultAdapter.getUserByAccount) {
        throw new Error('getUserByAccount method is not implemented.');
      }

      const user = await defaultAdapter.getUserByAccount({ provider, providerAccountId });
      return user;
    },
    async createUser(user: Partial<AdapterUser>) {
      if (!defaultAdapter.createUser) {
        throw new Error('createUser method is not implemented.');
      }

      const newUser = await defaultAdapter.createUser(user);
      return newUser;
    },
    async updateUser(user: Partial<AdapterUser>) {
      if (!defaultAdapter.updateUser) {
        throw new Error('updateUser method is not implemented.');
      }

      const updatedUser = await defaultAdapter.updateUser(user);
      return updatedUser;
    },
    async deleteUser(id: string) {
      if (!defaultAdapter.deleteUser) {
        throw new Error('deleteUser method is not implemented.');
      }

      await defaultAdapter.deleteUser(id);
    },
    async linkAccount(account: { userId: string; provider: string; providerAccountId: string }) {
      if (!defaultAdapter.linkAccount) {
        throw new Error('linkAccount method is not implemented.');
      }

      await defaultAdapter.linkAccount(account);
    },
    async unlinkAccount({ provider, providerAccountId }: { provider: string; providerAccountId: string }) {
      if (!defaultAdapter.unlinkAccount) {
        throw new Error('unlinkAccount method is not implemented.');
      }

      await defaultAdapter.unlinkAccount({ provider, providerAccountId });
    },
    async getSessionAndUser(sessionToken: string) {
      if (!defaultAdapter.getSessionAndUser) {
        throw new Error('getSessionAndUser method is not implemented.');
      }

      const { session, user } = await defaultAdapter.getSessionAndUser(sessionToken) || {};

      // If either session or user is null, return null
      if (!session || !user) {
        return null;
      }

      // Cast user to AdapterUser type
      const castedUser = user as unknown as AdapterUser;

      return { session, user: castedUser };
    },
    async createSession(session: { sessionToken: string; userId: string; expires: Date }) {
      if (!defaultAdapter.createSession) {
        throw new Error('createSession method is not implemented.');
      }

      const sessionCreated = await defaultAdapter.createSession(session);
      
      // Perform a null check before returning the session
      if (!sessionCreated) {
        throw new Error('Session creation failed.');
      }

      return sessionCreated;
    },
    async updateSession(session: any) {
      if (!defaultAdapter.updateSession) {
        throw new Error('updateSession method is not implemented.');
      }

      const updatedSession = await defaultAdapter.updateSession(session);
      return updatedSession;
    },
    async deleteSession(sessionToken: string) {
      if (!defaultAdapter.deleteSession) {
        throw new Error('deleteSession method is not implemented.');
      }

      await defaultAdapter.deleteSession(sessionToken);
    },
    async createVerificationToken(verificationToken: any) {
      if (!defaultAdapter.createVerificationToken) {
        throw new Error('createVerificationToken method is not implemented.');
      }

      const token = await defaultAdapter.createVerificationToken(verificationToken);
      return token;
    },
    async useVerificationToken({ identifier, token }: { identifier: string; token: string }) {
      if (!defaultAdapter.useVerificationToken) {
        throw new Error('useVerificationToken method is not implemented.');
      }

      const result = await defaultAdapter.useVerificationToken({ identifier, token });
      return result;
    },
  };
};

export default CustomMongoDBAdapter;

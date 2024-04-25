import NextAuth from "next-auth";
import mongoose from "mongoose";
import connectionToDb from "../../../lib/db";
import Providers from "next-auth/providers";
import { isPasswordValid } from "../../../lib/auth";
import {User} from '../../../lib/model/user';
export default NextAuth({
  session: {
    jwt: true,
  },
  providers: [
    Providers.Credentials({
      async authorize(credentials) {
        await connectionToDb();
        // Check if user exists
        const user = await User.findOne({ email: credentials.email });
        if (!user) {
          throw new Error("User doesn't exists!");
        }
        const isValid = await isPasswordValid(
          credentials.password,
          user.password
        );
        if (!isValid) {
          throw new Error("Password mismatch! kindly add correct password.");
        }
        return {
          email: user.email,
          message: 'hello'
        };
      },
    }),
  ],
});

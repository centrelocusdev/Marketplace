import mongoose from "mongoose";
import connectiontoDB from "@/lib/db";
import {User} from '@/lib/model/user';
import { hashPassword } from "@/lib/auth";

async function handler(req, res) {
  console.log(req.body);
    if (req.method !== "POST") {
      return;
    }
    try {
      await connectiontoDB();
  
      const { firstName, lastName, email, password, serviceType, userType } = req.body;
      // If user already exists
  
      const user = await User.findOne({ email });
      if (user) {
        throw new Error("User already exists, kindly login to continue!");
      }
      if(
        !firstName || !lastName || !email || !serviceType || !userType
      ){
        throw new Error('All the fields are mandatory to fill!')
      }
      if (
        !password ||
        password.trim().length < 7
      ) {
        throw new Error(
          "Invalid input data - password must have 7 characters atleast!"
        );
      }
  
      const hashedPassword = await hashPassword(password);
      const newUser = await User.create({
        firstName,
        lastName,
        email,
        password: hashedPassword,
        serviceType,
        userType

      });
      if(newUser){
        await newUser.save();
        res.status(200).json({
          message: "Signup Successful!",
          user: newUser,
        });
      }
     
    } catch (err) {
      res.status(400).json({
        message: err.message,
      });
    }
  }
  export default handler;
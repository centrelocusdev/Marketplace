import mongoose from "mongoose";
const db = process.env.DB_URL;

async function connectiontoDB(){
   try{
    await mongoose.connect(db);
    console.log('Connected to db');
   }catch(err){
    console.log("Error in connecting to db!");
   }
}
export default connectiontoDB;
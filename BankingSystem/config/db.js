import mongoose from "mongoose";
let connectDB = async()=>{
    await mongoose.Model(process.env.MONGODB_URL);

}
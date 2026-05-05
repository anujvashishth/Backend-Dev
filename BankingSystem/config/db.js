import mongoose from "mongoose";
let connectDB = async()=>{
     try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("connect database");
    } catch (error) {
        console.log("error form bd connection", error)
        
    }
}
export default connectDB; 


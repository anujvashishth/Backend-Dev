import { required } from "joi";
import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true,
        minLength:3,
        maxLength:30,
        
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true,
        
    },
    password:{
        type:String,
        minLength:6,
        maxLength:10,
        required:true

    }
    
})
let user = mongoose.model("user",userSchema);
export default user;
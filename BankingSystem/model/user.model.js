import { required } from "joi";
import mongoose from "mongoose";
let userSchema = mongoose.Schema({
    id:{
        type:String,
        required:true
    },
    name:{
        type: String,
        minLength:[3, "min name 3 word length"],
        maxLength:[200, "max length 200 word"],
        required:true
    },
    email:{
        type:String,
        minLength:[10, "min email length 10 honi chahiye"],
        maxLength:[20, "max email length 20 honi chahiye"],
        required:true
    },
    password:{
        type:String,
        minLength:6,
        maxLength:10,
        required:true
    },
    role:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,

    }

})
let user = mongoose.model(user,"userSchema");
export default user;
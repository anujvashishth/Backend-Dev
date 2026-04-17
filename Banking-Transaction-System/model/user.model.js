import { number } from "joi";
import mongoose from "mongoose";
let userSchema = mongoose.Schema({
    Account_number:{
        type:number,
        maxLength:[16, "maximun length 16"]
    }
})
import { required } from "joi";
import mongoose from "mongoose";
let transactionSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId, ref:"user",
        required:true
    },
    stockId:{
        type:mongoose.Schema.Types.ObjectId, ref:"stock",
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    type:{
        type:String,
        enum:["buy","sell"],
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})
let transaction = mongoose.model("transaction", transactionSchema);
export default transaction;


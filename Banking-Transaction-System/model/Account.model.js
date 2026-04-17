import mongoose from "mongoose";
let AccountSchema = mongoose.Schema({
    name:{
        type:String,
        minLength:[4, "name should be atmost 4 charchater"],
        maxLength:[50, "name should be maxmimun 50 charchater "]
    }
})
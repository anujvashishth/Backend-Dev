import express from "express";
let authrouters = express.Router()
authrouters.post("/", uservalidatesignup);
authrouters.get("/",uservalidatelogin);
 

export default authrouters;
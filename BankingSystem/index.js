import express from "express";
import { StatusCodes } from "http-status-pro-js";
import joi from "joi";
import jwt from  "jsonwebtoken";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
dotenv.config()
let app = express()
app.use(helmet())
app.use(cors())
let port = process.env.PORT||7000

app.get("/",(req,res)=>{
    res.send("<h1> todo server is running </h1>")
})
connectDB()
app.listen(port, async()=>{
    console.log("server connect");
});
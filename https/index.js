// import http from "http"
// let port = 8080
// let server = http.createServer((req, res)=>{
//     res.end("<h1> home </h1>")
// })
// server.listen(port, ()=>{
//     console.log("connect")
// })
import express from 'express';
import createUser from "./register.js";
import login from './login.js';
import dotenv from "dotenv";
import usermidd3 from "./midd.js"
dotenv.config();
let port = process.env.PORT
//let port = 8080;
const app = express();
app.use(express.json());

app.post("/signup", usermidd3, createUser);
app.post("/loginuser", usermidd3,login)
// app.post("/home", (req, res)=>{
//     let{id,name} =req.body
//     console.log(id,name);
//     res.send(`${id} and ${name}`)
// })

app.listen(port, ()=>{
    console.log("connect")
})
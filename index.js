import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userrouter from "./routers/user.router.js";
import sendMail from "./helperfile/nodemailer.js";


import logger from "./logger/log.js";
import { buyStoke } from "./controller/stoke.controller.js";
import stockdata from "./helperfile/stock.js";
const app = express();

app.use(express.json());
app.use(cors());
await stockdata()
app.use("/user", userrouter);
app.use("/stock",buyStoke);

mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log("Database connected successfully");

}).catch((error) => {
    logger.error(` error ${new Date().toISOString()}  ${error.message}`);
    console.log(error);
})

app.listen(process.env.PORT, () => {
    console.log(`server is running on port ${process.env.PORT}`);

})
import express from "express";
import {userlogin} from "../controller/user.controller.js"

let router = express.Router();
router.post("/login", userlogin)

export default router;
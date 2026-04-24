import express from "express";
import {register,login,logout,UpdateUser,deleteUser} from "../controller/user.controller.js";

const router = express.Router();


router.post("/register",register);
router.post("/login",login);
router.post("/logout",logout);
router.put("/update",UpdateUser);
router.delete("/delete",deleteUser);

export default router;
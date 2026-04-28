import express from "express";
import { buyStoke } from "../controller/stoke.controller";

const router=express.Router();

router.post("/stock",buyStoke);

export default router;
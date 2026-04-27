
import sendMail from "../helperfile/nodemailer.js";
import { StatusCodes } from "http-status-pro-js";
import logger from "../logger/log.js";

import StokeModel from "../model/Stoke.model.js";

export let buyStoke = async (req, res) => {
    try {
        let { symbol, name, price, quantity } = req.body;

        let buystoke = await StokeModel.create({
            symbol,
            name,
            price,
            quantity
        });

        return res.status(201).json({
            message: "Stock bought successfully",
            buystoke
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: error.message
        });
    }
};
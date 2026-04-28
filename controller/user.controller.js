import User from "../model/user.model.js";
import sendMail from "../helperfile/nodemailer.js";
import { StatusCodes } from "http-status-pro-js"
import jwt from "jsonwebtoken";
import logger from "../logger/log.js";


export let register = async (req, res) => {
    try {
        let { username, email, password } = req.body;
        await sendMail(email, " user create successful ")
        let user = await User.create({ username, email, password });
        return res.status(201).json({ message: "User created successfully", user });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

export let login = async (req, res) => {
    try {
        let { email, password } = req.body;
        let user = await User.findOne({ email })
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        if (user.password !== password) {
            return res.status(401).json({ message: "Invalid password" });
        }
        return res.status(200).json({ message: "User logged in successfully", user });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

export let logout = async (req, res) => {
    try {
        let { id } = req.body;
        let user = await User.findByIdAndUpdate(id, { isloggedin: false }, { new: true });
        return res.status(200).json({ message: "User logged out successfully", user });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

export let UpdateUser = async (req, res) => {
    try {
        let { id } = req.body;
        let user = await User.findByIdAndUpdate(id, req.body, { new: true });
        return res.status(200).json({ message: "User updated successfully", user });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

export let deleteUser = async (req, res) => {
    try {
        let { id } = req.body;
        let user = await User.findByIdAndUpdate(id, { isdeleted: true }, { new: true });
        return res.status(200).json({ message: "User deleted successfully", user });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
}
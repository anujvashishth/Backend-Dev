import joi from "joi";
import {StatusCodes} from "http-status-pro-js";
function usersingnup(req, res, next){
    try{
        let schema = join.object({
            name:joi.string().trim().lowercase().min(3).max(200).required(),
            email:joi.string().trim().lowercase().min(8).max(200).email().required(),
            password:joi.string().trim().


        })
    }

}
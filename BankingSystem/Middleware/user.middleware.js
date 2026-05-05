import joi from "joi";
import {Statuscodes} from "http-status-pro-js"
export function uservalidatesignup(req,res, next){
    try {
        let userschema = Joi.object({
            name:Joi.string().trim().lowercase().min(3).max(200),
            email:Joi.string().trim().required(),
            password:Joi.string().trim().min(6).max(10).required(),
           
        })
        let {value, error} = userschema.validate(req.body)
        if(error){
            return res.status(StatusCodes.BAD_REQUEST.code).json({
                code:StatusCodes.BAD_REQUEST.code,
                message:error.message,
                data:null
            })
        }
        req.body = value;
        next()
    } catch (error) {
        console.log("user validate", error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR.code).json({
            code:StatusCodes.INTERNAL_SERVER_ERROR.code,
            message:StatusCodes.INTERNAL_SERVER_ERROR.message,
            data:null
        })
    }
}
export function uservalidatelogin(req,res, next){
    try {
        let userschema = Joi.object({
            email:Joi.string().trim().required(),
            password:Joi.string().trim().min(6).max(10).required(),
           
        })
        let {value, error} = userschema.validate(req.body)
        if(error){
            return res.status(StatusCodes.BAD_REQUEST.code).json({
                code:StatusCodes.BAD_REQUEST.code,
                message:error.message,
                data:null
            })
        }
        req.body = value;
        next()
    } catch (error) {
        console.log("user validate", error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR.code).json({
            code:StatusCodes.INTERNAL_SERVER_ERROR.code,
            message:StatusCodes.INTERNAL_SERVER_ERROR.message,
            data:null
        })
    }
}
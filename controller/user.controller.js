import userloggingservice from "../middle/user.middle.js";
import {StatusCodes} from "http-status-pro-js"


 async function userlogincontroller(req, res) {
     try {
        let{email, password} = req.body
        let  res = userloggingservice(email, password)
        if(!res){
             res.status(StatusCodes.INTERNAL_SERVER_ERROR.code).json({
                    code:StatusCodes.INTERNAL_SERVER_ERROR.code,
                    message:"email or password is wrong",
                    data:null
                })

        }

     } catch (error) {
           console.log("usreloginservice", error);
                res.status(StatusCodes.INTERNAL_SERVER_ERROR.code).json({
                    code:StatusCodes.INTERNAL_SERVER_ERROR.code,
                    message:StatusCodes.INTERNAL_SERVER_ERROR.message,
                    data:null
                })
        
     }
    
 }
 export default userlogincontroller
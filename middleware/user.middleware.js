import User from "../model/user.model.js";

let userMiddleware = async (req,res,next)=>{
    try{
        let {username,email,password} = req.body;
        let user = await User.findOne({username});
        if(user){
            return res.status(400).json({message:"User already exists"});
        }
        next();
    }catch(error){
        console.log(error);
        return res.status(500).json({message:"Internal server error"});
    }
}
export default userMiddleware;
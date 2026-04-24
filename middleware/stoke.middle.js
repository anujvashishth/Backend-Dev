import stoke from "../model/Stoke.model";

let stokeMiddleware = async(req,res,next)=>{
    try{
        let {symbol,name,price,quantity} = req.body;
        let stoke = await stoke.findOne({symbol});
        if(stoke){
            return res.status(400).json({message:"Stoke already exists"});
        }
        next();
    }catch(error){
        console.log(error);
        return res.status(500).json({message:"Internal server error"});
    }
}
export default stokeMiddleware;
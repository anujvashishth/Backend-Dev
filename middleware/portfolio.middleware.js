import portfolio from "../model/portfolio.model";

let portfolioMiddleware = async(req,res,next)=>{
    try{
        let {userId,stockId,quantity,price,type,date} = req.body;
        let portfolio = await portfolio.findOne({userId,stockId});
        if(portfolio){
            return res.status(400).json({message:"Portfolio already exists"});
        }
        next();
    }catch(error){
        console.log(error);
        return res.status(500).json({message:"Internal server error"});
    }
}
export default portfolioMiddleware;
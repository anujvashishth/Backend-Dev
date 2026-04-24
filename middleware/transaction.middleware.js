import transaction from "../model/transaction.model";

let transactionMiddleware = async(req,res,next)=>{
    try{
        let {userId,stockId,quantity,price,type,date} = req.body;
        let transaction = await transaction.findOne({userId,stockId});
        if(transaction){
            return res.status(400).json({message:"Transaction already exists"});
        }
        next();
    }catch(error){
        console.log(error);
        return res.status(500).json({message:"Internal server error"});
    }
}
export default transactionMiddleware;
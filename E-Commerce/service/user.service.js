import userec from "../model/user.model.js";
import bcrypt from "bcrypt"
  async function   userloginservice(email, password){
    try {
         let isuser = await userec.find({email})
          if(!isuser){
            return false 
          }
          let  hasPassword =   bcrypt.compare(password, isuser.password)
           if(!hasPassword){
            return false
           }
            return isuser;


        
    } catch (error) {
         console.log(error)
         return false
        
    }
  }
   export default userloginservice
import fs from "fs"
 
   export  function  usercreate(name, email, password){
     try {
        let ob = {
            id:Date.now(), name, email, password
        }
        let users = [];
         if(fs.existsSync("user.json")){
            let data = JSON.parse(fs.readFileSync("user.json", "utf-8"))
            if(!data){
                return null
            }
            users = data
         }
         users.push(ob);
         fs.writeFileSync("user.json", JSON.stringify(users, null, 2))
         return { id: ob.id, name, email}
       
    } catch (error) {
        console.log("user create", error);
        return null
       
    }
  }
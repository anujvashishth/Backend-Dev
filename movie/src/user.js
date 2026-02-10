import fs from "fs";
function createUser(req, res){
    try{
        const {userid, username} = req.body;
        if (!userid || !username) {
      return res.status(400).send("userid and username are required");
    }
     (!fs.existsSync("user.json")) {
          return res.status(404).send("No users found");
  }
}
}
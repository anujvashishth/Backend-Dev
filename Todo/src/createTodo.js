import fs from "fs"
function createTodo(name, task){
    try{
        let obj = {
            id : new Date(),
            createTime : new Date(),
            task, status:false
        }
        if(fs.existsSync("todo.json")){
            let data = JSON.parse(fs.readFileSync("todo.json", "utf-8"))
            
        }
    }
}
const usermodel = require("../models/users")

module.exports.getTasks =async (req,res) => {
    const data =await usermodel.find()
    res.send(data)
}

module.exports.addTask =(req,res)=>{
            try {
                const data = req.body
                usermodel.create(data)
                console.log(data)
                res.send("success")
                }
            catch (err) {
                //console.log("error")
                res.send('error in adding data');
            
        }
    }

    module.exports.checkTask =(req,res)=>{
        try {
            const {user_name,pwd} = req.body
            const data2 =usermodel.findOne({user_name :user_name})
            console.log("testing...")
            if(data2){
                console.log("exist")
                res.json("match")
            }
            // else if(data2.uer_name==data.user_name && data2.pwd==data.pwd)
            //     res.send("success")
            else
                res.json("username or password is wrong")
            }
        catch (err) {
            //console.log("error")
            res.send('error in getting data');
            
        }
    }


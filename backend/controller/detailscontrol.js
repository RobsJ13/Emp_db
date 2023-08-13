const detailsmodel = require("../models/details")

module.exports.viewTasks = async (req, res) => {
    try{
    const data = await detailsmodel.find()
        //console.log(data)
    res.send(data)
    }
    catch(err){
        console.error(err)
    }
}

module.exports.updateTask = (req, res) => {
    try {
        const data = req.body
        detailsmodel.create(data)
        //console.log(data)
        res.send("success")
    }
    catch (err) {
        //console.log("error",req.body)
        console.log(err)
        res.send('error in adding data');
    }
}
module.exports.deleteTask = (req, res) => {
    try {
        const data = detailsmodel.find()
        res.send(data)
    }
    catch (err) {
        //console.log("error")
        res.send('error in getting data');

    }
}


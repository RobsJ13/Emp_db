const {Router} =require("express")
const router=Router();
const { getTasks, addTask, checkTask} =require("../controller/usercontrol")
const { viewTasks, updateTask, deleteTask} =require("../controller/detailscontrol")
//const {urlencoded} = require('body-parser');


router.get("/get",getTasks);
router.post("/add",addTask);
router.post("/validate",checkTask);
router.get("/view",viewTasks);
router.post("/update",updateTask);
// router.post("/delete",deleteTask);

module.exports =  router
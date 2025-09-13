const express=require('express');
const router=express.Router();
const homeController=require("../controller/home_controller");
console.log("router loaded")

router.get("/",homeController.home);
router.post('/add-task', homeController.addTask);
router.get('/delete-task', homeController.deleteTask);

module.exports=router;
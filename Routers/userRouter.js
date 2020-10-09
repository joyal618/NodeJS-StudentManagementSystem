const express = require("express")
const router = express.Router()

const usersCollection=require("../Model/user")

router.get("/",(req,res)=>{
  res.send("isss");

})

router.post("/add",(req,res)=>{
    const user= new usersCollection({
      userName :  req.body.userName,
      userEmail:  req.body.userEmail,
      userPassword: req.body.userPassword,
      userRole: req.body.userRole
    })  
    user.save().then((data) =>{
      res.send(data)
    }).catch(err =>{
      res.send(err)
    })
})

router.put("/update",(req,res)=>{
    usersCollection.findOneAndUpdate({userEmail:req.body.userEmail},{userName:req.body.userName}).then(data=>{
      res.send(data)
    }).catch(err =>{
      res.send(err)
    })
})
module.exports = router
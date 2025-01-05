import express from "express"

const router= express.Router()

router.post('/register', (req,res)=>{
    const {username, password}= req.body
    console.log(username,password)

})

router.post('/login',(req,res)=>{})





export default router



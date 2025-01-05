import express from "express";

const router = express.Router()



router.get('/', (req,res)=>{})// Get all todos for logged user

    .post('/',(req,res)=>{})//create a new in the todo

    .put('/:id', (req,res)=>{})//update the todo
    
    .delete('/:id', (req,res)=>{})//delete a todo or a todo is done


export default router
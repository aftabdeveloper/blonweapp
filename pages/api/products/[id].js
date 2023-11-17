import {update, remove } from '@/controller/products.controller'

const handlers = (req,res)=>{
    if(req.method === "PUT") return update(req,res)
    if(req.method === "DELETE") return remove(req,res)
    res.status(405).send("Method not allowed!")
}

export default handlers
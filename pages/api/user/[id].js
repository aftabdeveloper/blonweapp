import {update ,fetchUserCart } from '@/controller/user.controller'

const handlers = (req,res)=>{
    if(req.method === "PUT") return update(req,res)
    if(req.method === "GET") return fetchUserCart(req,res)
    res.status(405).send("Method not allowed!")
}

export default handlers
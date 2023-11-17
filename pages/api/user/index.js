import {create , fetch} from '@/controller/user.controller'

const handler = (req,res)=>{
    if(req.method === "POST") return create(req,res)
    if(req.method === "GET") return fetch(req,res)
    res.status(405).send("Method not allowed!")
}

export default handler
import { create } from "@/controller/payment.controller"
const handler = (req,res)=>{
    if(req.method === "POST") return create(req,res)
    res.status(405).send("Method not allowed")
}

export default handler
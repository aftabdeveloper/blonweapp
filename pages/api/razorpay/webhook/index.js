import { createPayment } from "@/controller/webhook.controller"
const handler = (req,res)=>{
    if(req.method === "POST") return createPayment(req,res)
    res.status(405).send("Method not allowed")
}

export default handler
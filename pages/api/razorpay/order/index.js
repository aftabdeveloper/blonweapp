import {createOrder} from "@/controller/razorpay.controller"

const handler = (req,res)=>{
    if(req.method === "POST") return createOrder(req,res)
    res.status(405).send("Method not allowed")
}

export default handler
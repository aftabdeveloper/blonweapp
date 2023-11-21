import { verifyPayment } from "@/controller/razorpay.controller"
const handler = (req,res)=>{
    if(req.method === "POST") return verifyPayment(req,res)
    res.status(405).send("Method not allowed")
}

export default handler
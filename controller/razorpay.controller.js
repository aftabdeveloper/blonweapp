import Razorpay from "@/modules/razorpay.modules"
import crypto from "crypto"
export const createOrder = async (req,res)=>{
    try
    {
        const {amount} = req.body
        const order = await Razorpay.orders.create({
            amount,
            currency: "INR",
            receipt: "dot-"+Date.now()
          })
          res.status(200).json(order)
    }
    catch(err)
    {
        res.status(500).json(err)
    }
}

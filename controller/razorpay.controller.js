import Razorpay from "@/modules/razorpay.modules"

export const createOrder = async (req,res)=>{
    try
    {
        const {amount} = req.body
        const x = await Razorpay.orders.create({
            amount,
            currency: "INR",
            receipt: "dot-"+Date.now()
          })
          res.status(200).json(x)
    }
    catch(err)
    {
        res.status(500).json(err)
    }
}
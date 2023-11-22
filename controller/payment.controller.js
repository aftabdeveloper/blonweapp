import "@/modules/db.modules"
import Payment from "@/schema/payment.schema"

export const create = async (req,res)=>{
 try
 {
    const payment = new Payment(req.body)
    await payment.save()
    res.status(200).json(payment)
 }
 catch(err)
 {
    res.status(500).json(err)
 }
}
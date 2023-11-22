import crypto from 'crypto'
import fs from "fs"
import axios from 'axios'
axios.defaults.baseURL = process.env.NEXT_PUBLIC_ENDPOINT
export const createPayment = async (req,res)=>{
    const secret = process.env.NEXT_PUBLIC_WEBHOOK_SECRET
    const data = req.body
    const signature = req.headers['x-razorpay-signature']
    const shasum = crypto.createHmac('sha256',secret)
    shasum.update(JSON.stringify(data))
    const digest = shasum.digest('hex')
    if(digest !== signature) 
    return res.status(401).json({success: false})
    if(data.event === "payment.captured"){
        try
        {
            await axios.post("/api/payment",data.payload.payment.entity)
            res.status(200).json({success: true})
        }
        catch(err)
        {
            throw res.status(500).json({success: false})
        }
        return res.status(200).json({success: true})
    }
    res.status(204).json({success: true})
}
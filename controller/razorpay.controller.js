import Razorpay from "@/modules/razorpay.modules"
import crypto from "crypto"
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

export const verifyPayment = (req,res)=>{
    try
    {
        const secret = 'aftab';
        console.log(req);

        const shasum = crypto.createHmac("sha256", secret);
        shasum.update(JSON.stringify(req.body));
        const digest = shasum.digest("hex");

        console.log(digest, req.headers["x-razorpay-signature"]);

        if (digest === req.headers["x-razorpay-signature"]) {
            console.log("request is legit");
            console.log(JSON.stringify(req.body, null, 4));
        } else {
            // ignore it
        }
        res.json({ status: "ok" });
    }
    catch(err)
    {
        res.status(500).json(err)
    }
}
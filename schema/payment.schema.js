import mongoose from "mongoose";
const {Schema} = mongoose

const paymentSchema = new Schema({
    id: {type: String, required: true},
    product: {type: Schema.ObjectId, ref: "Product", required: true},
    dues: {type: Boolean, required: true},
    amount:{type: Number, required: true},
    order_id:{type: String, required: true},
    description:{type: String, required: true},
    currency:{type: String, required: true},
    method:{type: String, required: true},
    email:{type: String, required: true},
    contact:{type: String, required: true},
    vpa:String,
    bank:String,
    wallet:String,
    card_id:String,
    international:Boolean,
    fee:{type: Number, required: true},
    tax:{type: Number, required: true},
    created_at: Date
})

mongoose.models = {}
const Payment = mongoose.model("Payment",paymentSchema)
export default Payment
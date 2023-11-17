import mongoose from 'mongoose'
const {Schema} = mongoose

const productSchema = new Schema({
    title: {type: String, required: true},
    price: {type: Number, required: true},
    discount : {type: Number, default : 0},
    image: String,
    qnt : {type : Number , required : true},
    category: {type: String, required: true},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
    
})

mongoose.models = {}
const Product = mongoose.model("Product",productSchema)
export default Product
import mongoose from "mongoose";
import bcrypt from 'bcrypt'
const {Schema} = mongoose;
const userSchema = new Schema({
    username: {type: String, required: true ,trim :true},
    email: {type: String, required: true  ,trim :true},
    password : {type: String, required:true  ,trim :true},
    cart: [{ type: Schema.ObjectId, ref: 'Product' }],
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
    
})
userSchema.pre('save', async function(next){
    const count = await mongoose.model("User").countDocuments({email : this.email})
    if(count) throw next(new Error("User already exist"))
    next()
})

userSchema.pre('save',async function(next){
    const encrypted = await bcrypt.hash(this.password.toString(),12)
    this.password = encrypted
    next()
})

mongoose.models = {}
const User = mongoose.model("User",userSchema)
export default User
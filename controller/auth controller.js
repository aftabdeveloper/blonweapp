import axios from 'axios'
axios.defaults.baseURL = process.env.NEXT_PUBLIC_ENDPOINT 
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import cookie from 'cookie'
export const signup = async (req , res)=>{
const {username , email, password} = req.body 
 try {
     const {data : Users} = await axios.post("/api/user",{username, email , password})
     const token = jwt.sign({
        id : Users._id,
        username : Users.username,
        email : Users.email
     },process.env.NEXT_PUBLIC_JWT_SECRET,
     {expiresIn : "7d"}
     )
     const userCookie =  cookie.serialize('authToken' ,token ,{
        httpOnly : true,
        maxAge : 604800,
        path : '/'
     })

     res.setHeader('Set-cookie',userCookie)
     res.status(200).json({success: true})
 } 
 catch (error) {
    res.status(error.response.status).json(error.response.data)
 }
   
}
export const login = async (req , res)=>{
try {
     const { email , password} = req.body;
     const userData = await axios.get(`/api/user?email=${email}`)
     const auth = await bcrypt.compare(password,userData.data[0].password)
     if(!auth) return res.status(401).json({"success":false})
     const token = jwt.sign({
     id  : userData.data[0]._id,
     username : userData.data[0].username,
     email : userData.data[0].email
   },process.env.NEXT_PUBLIC_JWT_SECRET,
   {expiresIn : '1d'}
   )
     const userCookie = cookie.serialize('authToken' , token,{
      httpOnly : true,
      expiresIn : 86400,
      path : '/'
     })
     
     res.setHeader("Set-cookie",userCookie)
     res.status(200).json({"success" : true})
} 
catch (error) {
    res.status(error.response.status).json(error.response.data)
}
}
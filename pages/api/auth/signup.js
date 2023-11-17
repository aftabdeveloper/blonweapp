import {signup} from '@/controller/auth controller'

const userSignup = (req,res)=>{
    if(req.method === "POST") return signup(req,res)
    res.status(405).send("Method not allowed!")
}

export default userSignup
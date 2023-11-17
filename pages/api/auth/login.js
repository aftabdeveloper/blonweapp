import {login} from '@/controller/auth controller'

const userSignup = (req,res)=>{
    if(req.method === "POST") return login(req,res)
    res.status(405).send("Method not allowed!")
}

export default userSignup
import { verifyToken } from "@/controller/jwt.controller";
const jwt = (req,res)=>{
    if(req.method === "GET") return verifyToken(req,res)
    res.status(405).send("Method not allowed!")
}

export default jwt
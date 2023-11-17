import jwt from  'jsonwebtoken'
export const verifyToken = (req , res)=>{
try {
    const data = jwt.verify(req.query.token , process.env.NEXT_PUBLIC_JWT_SECRET)
    res.status(200).json(data)
}
 catch (error) {
   res.status(401).json({success : false}) 
}

}
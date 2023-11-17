import User from "@/schema/users.schema"
import '@/modules/db.modules'
export const create = async(req ,res)=>{
 try {
    const data = new User(req.body)
    await data.save();
    res.status(200).json(data)
 } 
 catch (error) {
    res.status(424).json({err :error.message})
 }
}

export const fetch = async (req , res)=>{
   const user = await User.find(req.query)
   if(!user.length) return res.status(404).json({err: 'User doesn`t exist'})
   res.status(200).json(user)
   
}

// this is for populate
export const fetchUserCart = async (req, res) => {
   const data = await User.findById(req.query.id).populate('cart')
   res.status(200).json(data)
 };
 


export const update = async (req,res)=>{
   try {
       const newItem =  req.body.id;
        if(req.body.for == 'add')
         {
            console.log(req.body.for)
            const result =  await User.findOneAndUpdate({ _id: req.query.id }, { $push: { cart: newItem } } , { new: true })
            res.status(200).json(result)
         }
         else if(req.body.for == 'remove')
         {
            console.log(req.body.for)
            const result =  await User.findOneAndUpdate({ _id: req.query.id }, { $pull: { cart: newItem } } , { new: true })
            res.status(200).json(result)
         }
        
   }
   catch(err)
   {
       res.status(500).json({err: err.message})
   }
}


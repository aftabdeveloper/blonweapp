import '@/modules/db.modules'
import Product from '@/schema/products.schema'

export const fetch = async (req,res)=>{
    let limit = req.query.page ? 8 : "";
    const total = await Product.countDocuments()
    let page = req.query.page
    const query = req.query.page ? {} : req.query;
    const data = await Product.find(query).limit(limit).skip((page-1) * limit)
    res.status(200).json({data , total})
}


export const create = async (req, res)=>{
    try {
        const product = new Product(req.body)
        await product.save()

        res.status(200).json(product)
    }
     catch (error) {
        res.status(500).json(error.message)
    }
}

export const update = async (req,res)=>{
    try {
        await Product.updateOne({_id: req.query.id},req.body)
        res.status(200).json({success: true})
    }
    catch(err)
    {
        res.status(500).json({err: err.message})
    }
}

export const remove = async (req,res)=>{
    try {
        await Product.deleteOne({_id: req.query.id})
        res.status(200).json({success: true})
    }
    catch(err)
    {
        res.status(500).json({err: err.message})
    }
}
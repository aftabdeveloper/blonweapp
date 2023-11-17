// import ProductsLayout from "../shared/products-layout"
// import Image from "next/image";
// import Link from "next/link";
// import axios from "axios";
// import { Rate ,message ,Skeleton,Button } from 'antd';
// import { useEffect , useState } from "react";
// import useSWR ,{mutate} from "swr";
// import Cookies from 'universal-cookie' 


// const fetcher = async(url)=>{
//   try {
//     const {data} = await axios.get(url)
//     return data
//   } 
//   catch (error) {
//     return error
//   }
// }
// const cookie = new Cookies()

// const Products = ()=>{
 
//   const {data: products, error: productsErr, isLoading , ...test} = useSWR(`/api/products/`,fetcher);
//   const [loading , setLoading] = useState({index:null ,state: true})
//   const userCookieData  =  cookie.get('session');
//   // add item in cart
//   const addToCart = async (product ,index)=>{
//   try {
//     setLoading({index : index , state : true})
//     const {data} = await axios.put(`/api/user/${userCookieData.id}`, {id : product._id , for : 'add'})  
//     message.success(`1 item added total ${data.cart.length} in cart`)
    
//   } 
//   catch (error) {
//     message.error ("failed to add to cert")
//   }
//   finally {
//     setLoading({index : null , state : false})
//   }

//   }

  
//   return (
//     <ProductsLayout title="Products ">
//       <Skeleton loading ={isLoading} />
//       <div className="grid max-md:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//          {
//           products && products.data.map((item,index)=>(
//             <div key={index}>
//             <div><button className="bg-[#E53E3E] text-white text-xs h-5 rounded-sm font-bold px-2">{item.discount}%</button></div>
//             <Image src={process.env.NEXT_PUBLIC_S3_BUCKET_ENDPOINT+item.image} alt="body part " width={400} height={300} />
//             <div>
//             <Link href={'/products/'+item.title.toLowerCase().split(" ").join("-")} > <button className="text-sm font-semibold hover:underline overflow-hidden h-10 text-left capitalize"> {item.title} </button></Link>
//             <Rate allowHalf defaultValue={3} style={{ fontSize: '13px' }}  /> <span className="text-xs">3.7</span>
//             <div className="flex flex-col gap-y-3 mt-3">
//               <div className="flex justify-between items-center">
//                 <div className="leading-10">
//                   <h1 className="text-gray-400 line-through text-sm">${item.price}.00</h1>
//                   <h1 className="text-xl text-orange-600 font-semibold">${Math.floor(item.price - ((item.price*item.discount)/100))}.00</h1>
//                 </div>
//                 <Button loading={loading.index == index ? loading.state : false} className="bg-[#F96919] p-2 flex items-center rounded-md" onClick={()=>addToCart(item , index)}><i className='bx bx-cart text-2xl text-white'></i></Button>
//               </div>
//               <div className="flex gap-1 text-sm border rounded-full items-center max-w-fit px-1">
//               <i className='bx bx-package'></i> <p className="capitalize">today shipping</p>
//               </div>
//               <span className="text-green-500 text-xs">In Stock</span>
//             </div>
//             </div>
//           </div>
//           ))
//          }

//       </div>
    
//     </ProductsLayout>
//   )
// }

// export default Products
import useSWR from "swr"
import axios from "axios"
import { Skeleton } from 'antd';
import Image from "next/image"
import Cart from "@/components/cart"
import { addToCart } from "@/redux/slices/cart";
import { useDispatch } from "react-redux";
const fetcher = async (url)=>{
  try{
    const {data} = await axios.get(url)
    return data
  }
  catch(err)
  {
    throw new Error(err)
  }
}

const Products = ({products})=>{
  const dispatch = useDispatch()
  return(
    <>
    <Cart />
    <div className="grid grid-cols-4 gap-16 p-16">
      {
        products.map((product,productIndex)=>(
          <div key={productIndex}>
          <Image 
            src={product.image}
            width={220}
            height={200}
            alt={product.title}
          />
          <p>{product.title}</p>
          <button className="bg-blue-500 text-white p-2" onClick={()=>dispatch(addToCart())}>Add to cart</button>
          </div>
        ))
      }
    </div>
    </>
  )
  
}

export default Products

import Layout from "../shared/layout";
import { Breadcrumb ,Table ,message ,Alert , Progress ,Button , Empty} from "antd";
import axios from "axios";
import useSWR ,{mutate} from "swr";
import Cookies from 'universal-cookie'
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Subsceibe = ()=>{
    return(
        <>
        <div className="mx-auto container max-lg:px-5 lg:w-[83%] border-t-2 items-center py-14">
            <div className="flex md:justify-between max-md:flex-col max-md:gap-y-3">
                <div>
                    <h1 className="text-2xl mb-2 font-semibold">Join our newsletter for £10 offs</h1>
                    <p className="text-[#bbb]">Register now to get latest updates on promotions & coupons.<br/>Don’t worry, we not spam!</p>
                </div>
                <div>
            <div className="flex justify-between   mb-3  rounded-lg">
                <input
                  type="search"
                  id="search-dropdown"
                  class="bg-[#ECEEF0] focus:bg-white w-full  py-1 text-lg px-3 outline-[#F85900] outline-border-r-0 rounded-l-md"
                  placeholder="Enter Your Email Address"
                  required
                />
                <button
                  type="submit"
                  className="bg-[#F85900] items-center flex px-6 q rounded-r-md font-semibold text-white py-3 "
                >
                  Subscribe
                </button>
            </div>
            <span className="text-sm">By subscribing you agree to our <a href="#" className="text-[#F85900]">Terms & Conditions and Privacy & Cookies Policy.</a></span>
                </div>
                </div>
        </div>
        </>
    )
}
const Breadcrumbs = ()=>{
  return (
    <Breadcrumb
    separator=">"
    items={[
      {
        title: 'Home',
        href :'/'
      },
      {
        title: 'cart',
        href: '',
      },
  
    ]}
  />
  )
}
const fetcher = async(url)=>{
  try {
    const {data} = await axios.get(url)
    return data
  } 
  catch (error) {
    return error
  }
}
const Cart = ()=>{
  const [count ,setCount] = useState({index:null , numOfItem : 1})
  const cookie = new Cookies()
  const userCookieData = cookie.get('session')
  const {data: cartProducts, error: cartProductsErr, isLoading , ...test} = useSWR(`/api/user/${userCookieData && userCookieData.id }`,fetcher);

  const decreaseItem = (index)=>{
    setCount({
      index:index,
      numOfItem :1
    })
    setCount({
      index:index,
      numOfItem : count.numOfItem-1
    })
  
  } 

  const inreaseItem = (index)=>{
    setCount({
      index:index,
      numOfItem : 1
    })
    setCount({
      index:index,
      numOfItem : count.numOfItem+1
    })
  } 
// remove item from cart
  const delProduct = async(id)=>{
  try {
    const {data} = await axios.put(`/api/user/${userCookieData.id}`, {id : id , for : 'remove'})  
    message.success(`1 item Deleted total ${data.cart.length} in cart`)
    mutate(`/api/user/${userCookieData && userCookieData.id }`)
  } 
  catch(error)
   {
    message.success('Item delete failed')
  }
  }
  const itemLength = cartProducts && cartProducts.cart.length

  const EmptyMessage = ()=>{
    return(            <Empty
      image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
      imageStyle={{
      height: 60,
       }}
       description={
       <span className="text-center">
         No Item found
        </span>
        }
        >
      <Link href="/products"> Return to shop </Link>
  </Empty>)
  }

  return (
     <Layout name="hghg">
        <div className="mx-auto container w-[83%]">
         
        <Breadcrumbs className="" />
          {
           cartProducts && cartProducts.cart.length == 0 ?  <div className="flex justify-center">
            <EmptyMessage />
            </div>
            :
            <div className="grid grid-cols-12 gap-8 mt-7">
            <div className="col-span-9 py-8">
               <div className="w-full bg-[#FFF5F5] py-3 border-dashed border border-red-600 rounded-md  mb-6 px-4">
               <i className='bx bx-bookmark text-gray-400' ></i>
               <Progress percent={50} showInfo={false} strokeColor="#E53E3E" size='small' />
               </div>
               
            <table className="table-auto  w-full">
            <thead>
              <tr>
                <th className="border ">Products</th>
                <th className="border ">Price</th>
                <th className="border">Quantity</th>
                <th className="borde ">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              
                  {
                    cartProducts && cartProducts.cart.map((cart , index)=>( 
                     <tr key={index} className="border-b"> 
                       <td className="w-[50%]" > 
                         <div className="flex items-center gap-6">
                            <img src={process.env.NEXT_PUBLIC_S3_BUCKET_ENDPOINT+cart.image} width="15%" />
                            <Link href={cart.title}> <a className="capitalize">{cart.title}</a></Link>
                          </div> 
                       </td>
                       <td className=" text-center">$ {cart.price}.00 </td>
                       <td className="flex justify-center py-5">
                        <div className="border rounded-md px-2 ">
                        <div className="flex items-center justify-between  ">
                             <button className="text-4xl font-thin" onClick={()=> count.numOfItem>1 ? decreaseItem(index) : message.info('Min 1 item allowed')} >-</button> 
                             <input className="py-2 outline-red-600 text-center w-14" value={count.index == index ? count.numOfItem : 1} />
                             <button className="text-3xl font-thin" onClick={count.numOfItem < 10 ? ()=>inreaseItem(index):message.info('Max 10 item allowed') }>+</button>
                             </div>
                        </div>
                      </td>
                      <td>
                       <div className=" flex items-center justify-around">
                       $ {count.index == index ? (cart.price)*count.numOfItem : cart.price}
                        <button onClick={()=>delProduct(cart._id)}> <i className='bx bxs-x-circle text-red-600 text-2xl'></i> </button>
                       </div>
                      </td>
                     </tr>
                   
                    ))
                  }
              
  
            </tbody>
             </table>
  
             <div className="flex justify-between mt-5"> 
              <div className="flex items-center gap-2">
                <span>Coupun :</span>
                <input className=" py-2.5 bg-[#F1F3F5] rounded-md w-[350px] px-2 outline-orange-600" /> 
                <button className="bg-[#21AEC2] px-4 py-2.5 rounded-md text-white font-semibold "> Apply Coupon</button>
              </div>
              <button className="rounded-md border px-4 font-semibold"> Clear All</button>
             </div>
  
            </div>
  
            <div className="col-span-3  rounded-md py-8">
             <div className="w-full bg-[#F8F9FA] p-5 flex flex-col gap-y-5"> 
              <h1 className="text-lg border-b-2 font-semibold pb-2">Cart total</h1>
              <div className="text-sm text-gray-700 border-b-2 pb-2 flex justify-between">
                <span>Subtotal</span> <span> $548.72</span>
              </div>
              <div className=" text-sm text-right text-gray-700 border-b-2 pb-2 flex justify-between items-center">
                <span> Shipping</span>
                <div className="flex flex-col gap-y-2">
                  <div className=""><span> Free Shipping</span> <input type="radio" name="shipping" /></div>
                  <div className=""><span> Local Pickup</span> <input type="radio" name="shipping" /></div>
                  <div className=""><span> Free Shipping</span> to <span className="font-bold"> CA</span> </div>
                  <span className="text-red-600"> Change Address </span>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span>Total</span> <span className="text-xl font-semibold text-orange-600"> $548.72</span>
              </div>
              <button className="text-white bg-orange-600 py-3 rounded-md"> Proceed to checkout</button>
             </div> 
             
            </div>
            </div>
           
          }
        </div>
      <Subsceibe />
     </Layout>
  )
}

export default Cart

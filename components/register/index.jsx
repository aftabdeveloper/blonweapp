import Link from "next/link"
import Layout from "../shared/layout"
import axios from "axios"
axios.defaults.baseURL = process.env.NEXT_PUBLIC_ENDPOINT 
import { Breadcrumb ,Form ,Input ,Button ,Checkbox ,Spin , message} from "antd"
import { useState } from "react"
import {useRouter} from 'next/router'
const Register = ()=>{
  const [loading , setLoading] = useState(false)
  const [loginLoading , setLoginLoading] = useState(false)
  const router = useRouter()
    const Breadcrumbs = ()=>{
        return (
          <Breadcrumb
          separator=">"
          items={[
            {
              title: 'Home',
            },
            {
              title: 'My account',
              href: '',
            },
        
          ]}
        />
        )
      }
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
   const [form] = Form.useForm()
   const [loginForm] = Form.useForm()
    const login = async (values)=>{
      try {
        setLoginLoading(true)
        const data  = await axios.post('/api/auth/login',values)
        loginForm.resetFields()
        message.success("login success")
        router.push('/products')
      }
       catch(error) {
        message.error(error.response.data.err);
      }

      finally{
        setLoginLoading(false)
      }
    }

    const register = async (values)=>{
   try {
       setLoading(true)
       const data = await axios.post('/api/auth/signup',values)
       message.success('Signup success')
       form.resetFields()
       console.log(data)
   } 
   catch (error) {
    message.error(error.message)
   }
   finally{
    setLoading(false)
   }
   }
    
  return (
    <Layout title='Register'>
     <div className="lg:w-[83%] max-lg:px-5 mx-auto container">
     <Breadcrumbs />
     <div className="grid md:grid-cols-2 mt-4 gap-8">
        { /* Login */}
     <div>
        <h1 className="capitalize  text-xl"> login</h1>
      <Spin spinning={loginLoading}>
      <Form onFinish={login} form ={loginForm} >
         <label htmlFor="" className="text-xs text-gray-400">Username or email address *</label>
            <Form.Item name ="email" rules={[{required : true ,message :"Usename is Required"}]}>
                <Input className="bg-[#ECEEF0] py-2.5 focus:bg-white hover:border-orange-600  focus:border-orange-600" />
            </Form.Item>
            <label htmlFor="" className="text-xs text-gray-400">Password *</label>
            <Form.Item name ="password" rules={[{required : true,message :"Password is Required"}]}>
                <Input className="bg-[#ECEEF0] py-2.5 focus:bg-white hover:border-orange-600  focus:border-orange-600" />
            </Form.Item>
            <Checkbox className="mb-2 mt-2">Remember me </Checkbox>
            <Form.Item>
                <Button htmlType="submit" type="text" className="bg-[#F96919] px-5 text-white h-10 font-semibold" > Login</Button>
            </Form.Item>
            <Link href="#"  className="text-[#F96919] underline text-lg capitalize"> lost your password </Link>
  
         </Form>
      </Spin>
     </div>

{/* signup */}
     <div>
        <h1 className="capitalize  text-xl"> Register</h1>
         <Spin spinning={loading}>
         <Form onFinish={register} form={form}>
          <label htmlFor="" className="text-xs text-gray-400"> Username *</label>
            <Form.Item name ="username" rules={[{required : true ,message :"Usename is Required"}]}>
                <Input className="bg-[#ECEEF0] py-2.5 focus:bg-white hover:border-orange-600  focus:border-orange-600" />
            </Form.Item>
            <label htmlFor="" className="text-xs text-gray-400">Email *</label>
             <Form.Item name ="email" rules={[{required : true ,message :"Email is Required"}]}>
                <Input type="email" className="bg-[#ECEEF0] py-2.5 focus:bg-white hover:border-orange-600  focus:border-orange-600" />
            </Form.Item>
            <label htmlFor="" className="text-xs text-gray-400">Password *</label>
             <Form.Item name ="password" rules={[{required : true,message :"Password is Required"}]}>
                 <Input className="bg-[#ECEEF0] py-2.5 focus:bg-white hover:border-orange-600  focus:border-orange-600" />
            </Form.Item>
            <p className="text-lg mb-4">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <Link href="#"  className="text-[#F96919]  capitalize" >privacy and policy</Link></p>
            <Form.Item>
                <Button htmlType="submit" type="text" className="bg-[#F96919] px-5 text-white h-10 font-semibold" > Register</Button>
            </Form.Item>
         
  
         </Form>
         </Spin>
     </div>
        
     </div>

     </div>
<Subsceibe />
    </Layout>
  )
}

export default Register

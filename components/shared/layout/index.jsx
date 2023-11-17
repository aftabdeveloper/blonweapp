import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { Dropdown , Space,Button ,Menu , Badge ,Modal ,Form ,Input ,Checkbox} from 'antd';
import { useReducer ,useRef ,useState } from 'react';
import { UserOutlined ,HeartOutlined , ShoppingCartOutlined , DownOutlined, BoldOutlined, RetweetOutlined} from '@ant-design/icons';
import axios from "axios";
import useSWR ,{mutate} from "swr";
import { useRouter } from 'next/router';
import Cookies from 'universal-cookie'
const fetcher = async(url)=>{
  try {
    const {data} = await axios.get(url)
    return data
  } 
  catch (error) {
    return error
  }
}
const leftMenus = [
    {
        label : "track order",
        icon :  "bx bxs-cube-alt bx-rotate-90",
        icon_status :true
    },
    {
        label : "about us",
        icon_status :false
    },
    {
        label : "contact",
        icon_status :false
    },
    {
        label : "FAQ",
        icon_status :false
    },
]
const selectOption = [
   {
    option : "all"
   },
   {
    option : "body parts"
   },
   {
    option : "brake disk and pads"
   },
   {
    option : "oil & fluids"
   },
   {
    option : "engine parts"
   },
   {
    option : "tyres & wheels"
   },
   {
    option : "tool & equipment"
   },

]
const footerMenuOne = [
  {
    label : "Accessibility Statement"
  },
  {
    label : "Your Orders"
  },
  {
    label : "Returns & Replacements"
  },
  {
    label : "Shipping Rates & Policies"
  },
  {
    label : "Refund and Returns Policy"
  },
  {
    label : "Privacy Policy"
  },
  {
    label : "Terms and Conditions"
  },
  {
    label : "Cookie Settings"
  },
  {
    label : "Help Center"
  },



]

const secondMenuOne = [
  {
    label : "Sell on Blonwe"
  },
  {
    label : "Sell Your Services on Blonwe"
  },
  {
    label : "Sell on Blonwe Business"
  },
  {
    label : "Sell Your Apps on Blonwe"
  },
  {
    label : "Become an Affilate"
  },
  {
    label : "Advertise Your Products"
  },
  {
    label : "Sell-Publish with Us"
  },
  {
    label : "Become an Blonwe Vendor"
  },
]

const thirdMenuOne = [
  {
    label : "Careers for Blonwe"
  },
  {
    label : "About Blonwe"
  },
  {
    label : "Inverstor Relations"
  },
  {
    label : "Blonwe Devices"
  },
  {
    label : "Customer reviews"
  },
  {
    label : "Social Responsibility"
  },
  {
    label : "Store Locations"
  }
]

const social = [
  {
   icon : "bx bxl-facebook"
  },
  {
    icon : "bx bxl-youtube"
  },
  {
    icon : "bx bxl-whatsapp"
  },

   {
    icon : "bx bxl-instagram"
   },

   {
    icon : "bx bxl-telegram"
   }


]

var items = [
    {
      label: 'Spanish',
      key: '1',
    },
    {
      label: 'Hindi',
      key: '2',
    },
    {
      label: 'German',
      key: '3',
    },
  ];

  var currency = [
    {
      label: 'inr',
      key: '1',
    },
    {
      label: 'gbp',
      key: '2',
    },
    {
      label: 'eur',
      key: '3',
    },
  ];

const menus = [
    {
      label: <Link href="/" legacyBehavior><a className="capitalize font-semibold">Home</a></Link>,
      key : '1'
  },
  {
      label: <Link href="/" legacyBehavior><a className="capitalize font-semibold">shop <i className='bx bx-chevron-down' ></i></a></Link>,
      key : "2"  ,
      children: [
        {
            key: 'shop',
            label: 'shop lists'
        },
        {
            key: 'product',
            label: 'product detail'
        },
        {
          key: 'shop',
          label: 'shop wide'
      },
    ]                             
  },
  {
      label: <Link href="/" legacyBehavior><a className="capitalize font-semibold">Tires & Wheel</a></Link>,
      key : "3"
  },
  {
      label: <Link href="/" legacyBehavior><a className="capitalize font-semibold">Oils & Fluids</a></Link>,
      key : "4"
  },
  {
      label: <Link href="/" legacyBehavior><a className="capitalize font-semibold">blog</a></Link>,
      key : "5"
  },
  {
      label: <Link href="/" legacyBehavior><a className="capitalize flex items-center font-semibold"> <i class='bx bxs-offer text-2xl'></i> best discount <i className='bx bx-chevron-down' ></i></a></Link>,
      key : "6",
      children: [
        {
            key: 'new-song',
            label: 'New Song'
        },
        {
            key: 'latest-song',
            label: 'Latest Song'
        }
    ]
  }
]

const Layout = ({children, title="Page title is empty" ,name})=>{
  const cookie = new Cookies();
  const userCookieData = cookie.get('session')
  const { data: cart, error: cartErr, isLoading, ...test } = useSWR( userCookieData && `/api/user/${userCookieData.id}`,
    fetcher,  {refreshInterval: 3000}
  );
  
  const themeReducer = (initial , action)=>{
    if(action === "dark theme")
    {
      return ("light theme")
    }
      return ("dark theme")
  }
  const [mode , setmode] = useReducer(themeReducer,'dark theme');
  const darkLight = ()=>{
    setmode(mode)
  }
 const menuReducer = (initial, action)=>{
  if(action === "block")
  {
 return ('hidden')
  }
 else{
  return ("block")
 }
 }
const [menu , setMenu] = useReducer(menuReducer,'hidden');
const slideMenu = ()=>{
 return setMenu(menu);
}
const [isModalOpen, setIsModalOpen] = useState(false);
const showModal = () => {
  setIsModalOpen(true);
};
const handleOk = () => {
  setIsModalOpen(false);
};
const handleCancel = () => {
  setIsModalOpen(false);
};
const login = (values)=>{
  console.log(values);
}
const router = useRouter()

const LoginModal =()=>{
 return(  
<Modal className='relative p-0' footer={null}  width={1000} okType='text' okText=" " cancelText=" " open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>


<div className="grid md:grid-cols-2 relative gap-12 -top-[20px] -left-[24px]">
  <div className='relative h-[107.3%] '>
    <Image alt='demo' src={"/auth-modal-image.jpg"} layout='fill' className='rounded-l-md'>
     
    </Image>
  </div>
  <div className='py-16 px-5 relative'>
     <h1 className='text-2xl text-center mb-8 font-semibold '> Login</h1>
     <Form onFinish={login}  >
         <label htmlFor="" className="text-xs text-gray-400">Username or email address *</label>
            <Form.Item name ="username" rules={[{required : true ,message :"Usename is Required"}]}>
                <Input className="bg-[#ECEEF0] py-2.5 focus:bg-white hover:border-orange-600  focus:border-orange-600" />
            </Form.Item>
            <label htmlFor="" className="text-xs text-gray-400">Password *</label>
            <Form.Item name ="password" rules={[{required : true,message :"Password is Required"}]}>
                <Input className="bg-[#ECEEF0] py-2.5 focus:bg-white hover:border-orange-600  focus:border-orange-600" />
            </Form.Item>
            <Checkbox className="mb-2 mt-2">Remember me </Checkbox>
            <Form.Item>
                <Button htmlType="submit" type="text" className="bg-[#F96919] w-full text-white h-12 text-lg font-semibold" > Login</Button>
            </Form.Item>
            <center><Link href="#"  className="text-[#F96919] underline text-lg  capitalize"> lost your password </Link>
            <p className="text-xs mb-4 mt-8">By continuing, you accept the Website Regulations , Regulations for the sale of alcoholic beverages and the<Link href="#"  className="text-[#F96919]  capitalize" >privacy and policy</Link></p>
            </center>
         </Form>
         <center>
      <div className='absolute -bottom-10 mx-auto left-1/2 transform -translate-x-1/2  border-t-2 w-full py-2'>
      <span className='capitalize text-center'>You dont have an account ?</span>
      <Link href="/register"><button className='font-semibold text-sky-600 ml-1'>Register Now </button></Link>
    </div>
  </center>
  </div>
 
</div>
</Modal>
)
}

  return (
    <div> 
        <Head>
            <title>{title}</title>
        </Head>
      <nav className="bg-[#132530] border-b max-lg:hidden border-slate-700">
        <div className="container mx-auto py-1 w-[83%] flex justify-between">
          <div>
            <ul className='flex items-center gap-6'>
              {
                leftMenus.map((items,index)=>(
                 <li key={index}>
                  <Link href="/" legacyBehavior>
                   {
                    items.icon_status ? <div className='flex items-center gap-x-1'>
                    <i className={`${items.icon} text-white`} ></i>
                    <a className='text-white capitalize text-xs font-normal cursor-pointer'> {items.label} </a>
                    </div> : <a className='text-white capitalize text-xs font-normal cursor-pointer'> {items.label} </a>
                   }
                  </Link>
                 </li> 
                 ))
              }
            </ul>
          </div>
           
          <div>
          <ul className='flex items-center gap-6'>
              <li>
                <button className='text-white text-xs font-normal flex items-center gap-x-0.5'>
                <i className='bx bx-phone-call text-white text-xl'></i>
                You can contact us 24/7
                </button>
              </li>
              <li>
                <Link href="#" legacyBehavior> 
                 <a className='text-xs font-bold cursor-pointer text-yellow-400'> 0 800 300-353 </a>
                </Link>
              </li>
                <h1 className='text-slate-500'>
                    |
                </h1>
               <li>
               <Space direction="vertical">
                <Dropdown
                  
                  size="small"
                  arrow = {true}
                  className='bg-transparent capitalize'
                  menu={{items}}
                >
                 <Button className='text-white outline-none border-none flex items-center p-0 ' > english <i className='bx bxs-chevron-down'></i> </Button>
               </Dropdown>
              </Space>
              </li> 
              <li>
              <Space direction="vertical">
                <Dropdown
                  
                  size="small"
                  arrow = {true}
                  className='bg-transparent uppercase'
                  menu={{items}}
                >
                 <Button className='text-white outline-none border-none flex items-center p-0' > usd <i className='bx bxs-chevron-down'></i> </Button>
               </Dropdown>
              </Space>
             
              </li> 
              <li>
                 <button className='flex items-center gap-x-1 text-white capitalize text-xs font-normal' onClick={darkLight}>
                  <i className='bx bx-sun text-lg bg-slate-700 p-1 rounded-lg opacity-70 hover:bg-slate-600'></i> 
                   {mode}
                 </button>
              </li> 
            </ul>
          </div>
        </div>
      </nav>

{/* middle menu*/}
    <nav className="bg-[#132530] ">
     <div className="container mx-auto max-md:p-3 md:py-6 lg:w-[83%] flex justify-between max-lg:flex-wrap-reverse items-center">
       <button className='cursor-pointer lg:hidden' onClick={slideMenu}>
       <i className='text-3xl bx bx-menu text-white'></i>
       </button>
       <div className='flex gap-x-9'>
         <img src="https://klbtheme.com/blonwe/autoparts/wp-content/uploads/sites/8/2023/10/logo-auto-part.png" alt="" className='w-[170px]' /> 
     </div> 
   <div className='flex gap-5 max-lg:hidden'>
      <button className='bg-[#34444D] opacity-90 capitalize py-2 px-2 rounded-sm text-white flex items-center  gap-x-1' onClick={slideMenu}>
       <i className='bx bx-menu text-white text-3xl'></i>
          menu 
      </button>
       <div className='flex border-orange-500 border-2 rounded-md max-lg:hidden'>
          <select name="" id="" className={`max-w-fit rounded-l-sm px-2 outline-none capitalize  ${mode == "dark theme" ? 'bg-white text-black ': 'bg-black text-white'}`}>
               {
                selectOption.map((item , index)=>(
                  <option key={index} className='capitalize'> {item.option} </option>
                ))
               }
          </select>
          <input type="text" className={ `w-[450px] px-7 py-2 outline-none ${mode == "dark theme" ? 'bg-white ': 'bg-black'} `} placeholder='Search for products' />
          <button className='bg-[#F85900] px-3 flex items-center rounded-r-sm'> <i className='bx bx-search text-3xl text-white'></i> </button>
      </div>
 </div>

 <div className='flex gap-x-7'>
   <button className='flex gap-x-3 items-center max-lg:hidden' onClick={cart ? null : showModal}>
    <UserOutlined className="text-3xl text-white" />
      <div className='flex flex-col items-start  text-left leading-3'>
       <Link href="#" legacyBehavior> 
         <a className='capitalize text-xs text-slate-400'> sign in</a>
       </Link>
       <Link href='#' legacyBehavior> 
       <a className='capitalize text-sm text-white'>{cart ? cart.username : 'account'}</a>
       </Link>
    </div>
   </button>
   <LoginModal />
   <Badge size='small' count={5} className="max-lg:hidden">
    <HeartOutlined className="text-3xl text-white" />
    </Badge>

   <button className='flex gap-x-3 items-center' onClick={()=>router.push('/cart')}>
   <Badge size='small' count={(cart && cart.cart.length)}>
   <ShoppingCartOutlined className="text-3xl text-white" />
    </Badge>
      <div className='flex flex-col items-start  text-left leading-3 max-lg:hidden'>
       <Link href="#" legacyBehavior> 
         <a className='capitalize text-xs text-slate-400'> total</a>
       </Link>
       <Link href='#' legacyBehavior> 
       <a className='capitalize text-sm text-white'> 
       $0.00</a>
       </Link>
    </div>
   </button>
 </div>
 </div> 
  </nav>
{/* slide menu*/}
<div className={` max-md:w-60 md:w-80 h-screen fixed top-0 px-5 left-0 z-50 animate__animated ${mode == "dark theme" ? 'bg-white text-black ': 'bg-black text-white'} ${menu}`}>
  <div className='flex justify-between items-center cursor-pointer border-b py-2' onClick={slideMenu}> 
     <Image 
      src={mode == 'dark theme' ?'/blonwe-dark.png' : '/blonwe-light.png'}
      alt="blonwe"
      width ="150"
      height ="150"
     />
     <i className='bx bx-x bx-spin-hover text-4xl bx-flip-horizontal' ></i>
  </div>
  <div className='mt-2'>
    <p className='text-xs text-slate-400 ml-5 uppercase font-semibold'>Main menu</p>
    <Menu
          className= {`w-full p-0 capitalize ${mode == "dark theme" ? 'bg-white text-black ': 'bg-black text-white'}`}
          mode="vertical"
          items={menus}
          
        />
  </div>
</div>

{/* bottom menu*/}

   <nav className={`border-b ${mode == "dark theme" ? 'bg-white text-black ': 'bg-black text-white'}`}>
     <div className={`container py-1  flex justify-between max-lg:px-2 lg:w-[83%] mx-auto`}>
       <div className='flex gap-x-9 w-[50%] lg:w-[90%]'>
       <Menu
          className= {`w-full border p-0 capitalize ${mode == "dark theme" ? 'bg-white text-black ': 'bg-black text-white'}`}
          mode="horizontal"
          items={menus}
          
        />
       </div>
      <Link href="#" legacyBehavior> 
          <a className='flex items-center gap-x-3 text-orange-600'>
           <i className='bx bxs-zap'></i>
           <span className='text-md max-lg:text-xs font-bold capitalize cursor-pointer'> buy theme</span>
          </a>
      </Link>

     </div>
   </nav>
   {/* here all coding*/}

   <div className={`${mode == "dark theme" ? 'bg-white text-black ': 'bg-black text-white'}`}>{children}</div>

{/* footer menu */}

  <footer className='bg-[#1B1F22]'>
    <div className='container max-lg:px-5 lg:w-[83%] py-20 mx-auto'>
     <div className='grid  md:grid-cols-2 lg:grid-cols-4 mb-12'>
      <div className='flex flex-col gap-y-3 border-r border-gray-600 pr-12'>
        <h1 className='capitalize text-white font-semibold'> do you need help ? </h1>
        <p className='text-white text-sm'> Autoseligen syr. Nek diarask fröbomba. Nör antipol kynoda nynat. Pressa fåmoska.</p>

        <div>
          <h1 className='text-2xl text-orange-600 font-semibold'>0 800 300-353</h1>
          <p className='text-xs text-gray-400'> Free from fixed and mobile phones in USA.</p>
        </div>
        <div>
          <span className='text-sm text-gray-400'> Email :</span> <span className='text-sm text-slate-50'> info@example.com</span>
        </div>
        <div>
          <h1 className='text-sm text-gray-400 capitalize'>call centers</h1>
          <p className='text-sm text-slate-50 font-semibold'>Mon-Sun 09:00-19:00</p>
        </div>
       </div>
{/* first footer menu */}

       <div className='flex flex-col md:px-16 gap-y-2'>
         <h1 className='capitalize text-white font-semibold mb-2'>Let Us Help You</h1>
          {
            footerMenuOne.map((items,index)=>(
              <Link key={index} href="#" legacyBehavior>
               <a className='text-white text-sm hover:underline'>  {items.label} </a>
              </Link>
            ))
          }
       </div>
 {/* second footer menu */}   

 <div className='flex flex-col md:px-16 gap-y-2'>
         <h1 className='capitalize text-white font-semibold mb-2'>Let Us Help You</h1>
          {
            secondMenuOne.map((items,index)=>(
              <Link key={index} href="#" legacyBehavior>
               <a className='text-white text-sm hover:underline'>  {items.label} </a>
              </Link>
            ))
          }
       </div>
 {/* second footer menu */}   

 <div className='flex flex-col md:px-16 gap-y-2'>
         <h1 className='capitalize text-white font-semibold mb-2'>Let Us Help You</h1>
          {
            thirdMenuOne.map((items,index)=>(
              <Link key={index} href="#" legacyBehavior>
               <a className='text-white text-sm hover:underline'>  {items.label} </a>
              </Link>
            ))
          }
  </div> 
</div>
{/*middle footer */}
<div className='flex justify-between border-t border-b max-lg:flex-col border-slate-600 py-8'> 
  <div>
    <div className='flex  gap-2 items-center'>
      <span className='capitalize text-slate-200'>follow us :</span>
      {
        social.map((items,index)=>(
          <i className={`text-white text-xl rounded-full p-2 bg-slate-700 opacity-80 hover:bg-slate-600 cursor-pointer ${items.icon}`} key={index}></i>
        ))
      }
    </div>
  </div>
  <div>
    <div className='flex max-lg:flex-col gap-1 items-center'>
      <span className='capitalize text-white'> download now : </span>
      <Image
        src="/app-store.png" 
        alt="app store"
        width={100} 
        height={100} 
      />

       <Image
        src="/google-play.png"
        alt="google play"
        width={100} 
        height={100}
      />
    </div>
  </div>
</div>

{/*bottom footer */}
<div className='flex justify-between max-lg:flex-col mt-5'>
  <span className='text-white'> Copyright 2023 © Blonwe WordPress Theme. All right reserved. Powered by KLBTheme.</span>

  <div className='flex items-center max-lg:flex-col'>
    <span className='text-white'> we accept :</span>
    <Image
        src="/payment.png" 
        alt="payment"
        width={300} 
        height={200} 
     />
  </div>
</div>

  </div>
  </footer> 

  </div>
  )
}

export default Layout;

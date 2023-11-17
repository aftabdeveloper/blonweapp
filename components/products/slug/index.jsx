import Layout from "@/components/shared/layout"
import { Breadcrumb ,Rate ,message,Tabs,Progress ,Form , Input,Checkbox,Button  } from "antd"
import Image from "next/image"
import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/router";

const user = [
  {
    rate : 4,
    name : 'amar',
    date : 'Nov 2 2023',
    desc : 'mmodi perspiciatis unde omnis iste natus aliquam sit voluptatem exercitationem doloremque laudantium.'
  },
  {
    rate : 3,
    name : 'amar',
    date : 'Nov 2 2023',
    desc : 'mmodi perspiciatis unde omnis iste natus aliquam sit voluptatem exercitationem doloremque laudantium.'
  },
  {
    rate : 4.5,
    name : 'amar',
    date : 'Nov 2 2023',
    desc : 'mmodi perspiciatis unde omnis iste natus aliquam sit voluptatem exercitationem doloremque laudantium.'
  },

]
const relproducts = [
  {
    title : "Spyder® – LED Tail Lights",
    path : '/products/bodyparts14.png',
    rate : 4,
    discount : 6,
    originalPrice : 189,
    discountPrice : 219,
  },
  {
    title : "Spyder® – LED Tail Lights",
    path : '/products/bodyparts13.png',
    rate : 3.7,
    discount : 13,
    originalPrice : 189,
    discountPrice : 219,
  },
  {
    title : "Spyder® – LED Tail Lights",
    path : '/products/bodyparts12.png',
    rate : 4.6,
    discount : 8,
    originalPrice : 189,
    discountPrice : 219,
  },
  {
    title : "Spyder® – LED Tail Lights",
    path : '/products/bodyparts11.png',
    rate : 3,
    discount : 4,
    originalPrice : 189,
    discountPrice : 219,
  },
 ]
const Slug = () => {
 
  const router = useRouter();
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
      },
      {
        title: 'Tools & Equipment',
        href: '',
      },
      {
        title: '0.1″ CD/DVD Multimedia Receiver with Apple CarPlay and Android Auto – CAR8000',
        href: '',
      },
  
    ]}
  />
  )
}
const [count , setCount] = useState(1)
const Social = ()=>{
  return(
    <div className="flex gap-1">
       <button className="border-blue-600 border text-blue-600 rounded-full h-8 flex items-center justify-center w-8 hover:bg-blue-600 hover:text-zinc-50 ">
        <i className='bx bxl-facebook text-lg'></i>
       </button>
       <button className="border-sky-600 border text-sky-400 rounded-full h-8 flex items-center justify-center w-8 hover:bg-sky-600 hover:text-zinc-50 ">
        <i className='bx bxl-twitter text-lg'></i>
       </button>
       <button className="border-red-600 border text-red-600 rounded-full h-8 flex items-center justify-center w-8 hover:bg-red-600 hover:text-zinc-50 ">
        <i className='bx bxl-pinterest text-lg'></i>
       </button>
       <button className="border-blue-600 border text-blue-600 rounded-full h-8 flex items-center justify-center w-8 hover:bg-blue-500 hover:text-zinc-50 ">
        <i className='bx bxl-linkedin text-lg'></i>
       </button>
       <button className="border-orange-600 border text-orange-600 rounded-full h-8 flex items-center justify-center w-8 hover:bg-orange-600 hover:text-zinc-50 ">
        <i className='bx bxl-reddit text-lg'></i>
       </button>
    </div>
  )
}

const DescForm = ()=>{
  return(
    <div className="flex flex-col gap-y-3 max-w-[800px]">
    <h1 className="text-2xl font-semibold text-gray-700">Add a review </h1>
    <p className="text-sm text-gray-500">Your email address will not be published. Required fields are marked *</p>
    <div>
      <p className="text-gray-500">Your rating *</p>
      <div className="flex gap-4">
        <Rate count={1}  className="text-[#FCC419] border-r pr-3 text-xs" />
        <Rate count={2}  className="text-[#FCC419] border-r pr-3 text-xs" />
        <Rate count={3}  className="text-[#FCC419] border-r pr-3 text-xs" />
        <Rate count={5}  className="text-[#FCC419] border-r pr-3 text-xs" />
        <Rate count={4}  className="text-[#FCC419] border-r pr-3 text-xs" />
      </div>
    </div>
    <div>
      <Form className="flex flex-col gap-y-2">
        <Form.Item name='Description'>
          <Input.TextArea className="bg-[#ECEEF0] focus:bg-white outline-none hover:border-orange-600 focus:border-2 focus:border-orange-600 " style={{height : '160px',outline : 'none'}} />
        </Form.Item>
        <div className="flex w-full max-lg:flex-col gap-5">
          <Form.Item name='name' >
          <label className="text-gray-400"> Name *</label>
            <Input className=" lg:w-[390px] bg-[#ECEEF0] focus:bg-white h-12 hover:border-orange-600 focus:border-2 focus:border-orange-600 " />
          </Form.Item>

          <Form.Item name='email'>
          <label className="text-gray-400"> Email *</label>
          <Input className="lg:w-[390px] bg-[#ECEEF0] focus:bg-white h-12 hover:border-orange-600 focus:border-2 focus:border-orange-600 " />
          </Form.Item>
        </div>
    <Checkbox className="text-gray-600"> Save my name, email, and website in this browser for the next time I comment.</Checkbox>
    <Button htmlType="submit" className=" bg-orange-600 text-white h-12 w-32 text-sm font-semibold">
      Submit
    </Button>
      </Form>
    </div>
  </div>
  )
}
 const Tab = ()=>(
  <Tabs  >
  <Tabs.TabPane
     key="1"
     tab={
       <div className=" text-sm font-semibold text-black">
         Description
       </div>
     }
   >
  <div className="leading-7 text-lg text-gray-600"> 
    <h1 >Quisque varius diam vel metus mattis, id aliquam diam rhoncus. Proin vitae magna in dui finibus malesuada et at nulla. Morbi elit ex, viverra vitae ante vel, blandit feugiat ligula. Fusce fermentum iaculis nibh, at sodales leo maximus a. Nullam ultricies sodales nunc, in pellentesque lorem mattis quis. Cras imperdiet est in nunc tristique lacinia. Nullam aliquam mauris eu accumsan tincidunt. Suspendisse velit ex, aliquet vel ornare vel, dignissim a tortor. </h1> 
   <h1 className="mt-4">
   Morbi ut sapien vitae odio accumsan gravida. Morbi vitae erat auctor, eleifend nunc a, lobortis neque. Praesent aliquam dignissim viverra. Maecenas lacus odio, feugiat eu nunc sit amet, maximus sagittis dolor. Vivamus nisi sapien, elementum sit amet eros sit amet, ultricies cursus ipsum. Sed consequat luctus ligula. Curabitur laoreet rhoncus blandit. Aenean vel diam ut arcu pharetra dignissim ut sed leo. Vivamus faucibus, ipsum in vestibulum vulputate, lorem orci convallis quam, sit amet consequat nulla felis pharetra lacus. Duis semper erat mauris, sed egestas purus commodo vel.
   </h1>

  </div>

  </Tabs.TabPane>

   <Tabs.TabPane
    key="2"
    tab={
      <div className=" text-sm font-semibold text-black">
        Reviews<span>(4)</span>
      </div>
    }
   >
   <div className="my-5 w-[100%]">
    <h1 className="text-xl font-semibold ">{router.query.slug && router.query.slug.split("-").join(" ")}</h1>

{/* rating */}
    <div className="flex gap-x-20 w-full border-b py-12 max-md:flex-col">
      <div className="flex items-center gap-4 max-sm:flex-col">
        <h1 className="text-7xl">4.00</h1>
        <div className="flex flex-col ">
        <Rate allowHalf defaultValue={4} className="text-[#FCC419] " style={{fontSize :'23px'}} />
        <h1>Average of <span className="font-bold">3 Reviews</span> </h1>
        </div>
      </div>
      <div className="w-[450px]">
     <div className="flex items-center gap-3">
      <div className="flex items-center gap-1">
        <i className='bx bxs-star text-[#FCC419]' ></i>
        <span>5</span>
     </div>
      <Progress percent={30} showInfo={false} strokeColor='#FCC419' size={"small"} className="mt-1" />
      <span> 1</span>
     </div>
     <div className="flex items-center gap-3">
      <div className="flex items-center gap-1">
        <i className='bx bxs-star text-[#FCC419]' ></i>
        <span>4</span>
     </div>
      <Progress percent={30} showInfo={false} strokeColor='#FCC419' size={"small"} className="mt-1" />
      <span> 1</span>
     </div>
     <div className="flex items-center gap-3">
      <div className="flex items-center gap-1">
        <i className='bx bxs-star text-[#FCC419]' ></i>
        <span>3</span>
     </div>
      <Progress percent={30} showInfo={false} strokeColor='#FCC419' size={"small"} className="mt-1" />
      <span> 1</span>
     </div>
     <div className="flex items-center gap-3">
      <div className="flex items-center gap-1">
        <i className='bx bxs-star text-[#FCC419]' ></i>
        <span>2</span>
     </div>
      <Progress percent={0} showInfo={false} strokeColor='#FCC419' size={"small"} className="mt-1" />
      <span> 0</span>
     </div>
     <div className="flex items-center gap-3">
      <div className="flex items-center gap-1">
        <i className='bx bxs-star text-[#FCC419]' ></i>
        <span>1</span>
     </div>
      <Progress percent={0} showInfo={false} strokeColor='#FCC419' size={"small"} className="mt-1" />
      <span> 0</span>
     </div>
      </div>
    </div>

    {/* user message */}
      <div className="flex flex-col gap-y-4 my-6"> 
      {
      user.map((item,index)=>(
        <div className="flex items-start gap-3 border-b py-8 " key={index}>
        <button>
        <i className='bx bxs-user-circle text-6xl text-gray-300' ></i>
        </button>
        <div className="flex flex-col gap-y-2">
          <div className="flex flex-col">
            <Rate defaultValue={item.rate} allowHalf className="text-sm text-[#FCC419]"  />
           <div>
            <span className="text-gray-400 capitalize">{item.name}</span>
            <span className="text-gray-400"> {item.date}</span>
           </div> 
          </div>
          <h1 className="text-lg text-gray-600">{item.desc}</h1>
        </div>
      </div>
      ))
     }
      </div>
      {/*user response */}
     <DescForm />
   </div>
   </Tabs.TabPane>
  </Tabs>
 )

  return (
    <Layout title="slug">
      <div className="container mx-auto max-lg:px-5 lg:w-[83%]">
        <div className="mb-5"> <Breadcrumbs /> </div>
        <div>
          <h1 className=" md:text-3xl max-md:text-2xl font-semibold capitalize ">{router.query.slug && router.query.slug.split("-").join(" ")}</h1>
          <div className="flex gap-2 items-center">  
          <Rate allowHalf defaultValue={4} style={{fontSize : '12px' , color:'#FCC419'}} /> 
          <span className="text-xs font-semibold"> 4 reviews</span>
         </div>
        </div>

        <div className="grid md:grid-cols-12 border-t border-b mt-4"> 
         <div className=" col-span-4 relative py-6">
          <Image src='/products/bodyparts14.png' alt="Moniter" width={420} height={100} />
          <button className="bg-[#E53E3E] p-3 rounded-full h-14 w-14 font-semibold absolute top-10 text-white"> 6% </button>
         </div>
         <div className=" col-span-5 py-6 lg:px-5 flex flex-col gap-y-6">
          <span className="text-green-500 font-semibold bg-green-50 rounded-md text-sm px-4 py-1 w-fit"  > In stock</span>
          <p className="text-gray-400">
          Fusce sapien urna, tristique non sapien nec, rutrum fringilla eros. Etiam accumsan odio eget tempus consectetur. Aliquam et sapien nulla. Suspendisse lobortis leo ante, imperdiet tristique magna tristique eu. Nullam ultrices vulputate odio, eu iaculis nulla congue quis.
          </p>

          <div className="bg-[#FFF1E6] text-orange-500 text-xs flex items-center gap-4 p-2 rounded-md">
          <i className='bx bx-cart text-2xl'></i> <span>This product has been added to <span className="font-bold">1 people</span> carts.</span>
          </div>
          <ul>
            <li>
             <i className='bx bx-check text-xl text-emerald-700' ></i> 
             <span className="font-bold text-sm">Delivered today </span> <span className="text-gray-500 text-sm"> (order Mon-Fri before 12:00, delivery between 17:00 and 22:00)</span>
            </li>

            <li>
             <i className='bx bx-check text-xl text-emerald-700' ></i> 
             <span className="font-bold text-sm">Including  </span> <span className="text-gray-500 text-sm"> shipping costs, sent by blonwe.com</span>
            </li>

            <li>
             <i className='bx bx-check text-xl text-emerald-700' ></i> 
             <span className="text-gray-500 text-sm">Pick up at a blonwe.com collection point is possible</span>
            </li>
            <li>
             <i className='bx bx-check text-xl text-emerald-700' ></i> 
             <span className="text-gray-500 text-sm">30 days to change your mind and free returns</span>
            </li>
            <li>
             <i className='bx bx-check text-xl text-emerald-700' ></i> 
             <span className="text-gray-500 text-sm">Day and night customer service</span>
            </li>
          </ul>
          <div>
             <div className="text-sm">
              <span className="text-gray-400"> SKU :</span> 
              <span> U5Z8B9I6Q1</span>
              </div>
              <div className="text-sm">
              <span className="text-gray-400"> Categories :</span> 
              <span> Body Parts,Tools & Equipment  </span>
              </div>
              <div className="text-sm">
              <span className="text-gray-400"> Tags :</span> 
              <span> Android Auto,CarPlay</span>
              </div>
          </div>
             <Social />   
         </div>
         <div className=" col-span-3 py-6 md:pl-7 ">
          <div className="w-full rounded-md md:border md:p-5 flex md:flex-col md:gap-y-4 max-md:fixed max-md:bottom-0 max-md:justify-between max-md:left-0 max-md:bg-white max-md:items-center z-20 max-md:px-5">
            <div className="max-md:hidden">
              <span className="line-through text-xl text-gray-400 mr-3"> $369.00 </span>
              <span className="text-3xl font-semibold text-red-600"> $350.00 </span>
            </div>
            <div className="flex items-center justify-between border-b ">
              <button className="text-4xl font-thin" onClick={()=> count>1 ? setCount(count-1) : message.info('Min 1 item allowed')} >-</button> 
            <input className="py-2 outline-red-600 text-center max-md:w-10" value={count} />
            <button className="text-3xl font-thin" onClick={count < 10 ? ()=>setCount(count+1) :message.info('Max 10 item allowed') }>+</button>
            </div>
            <button className="bg-[#2F9E44] py-2.5 mb-5 max-md:mt-5 max-md:w-[50%] rounded-md text-white font-semibold">Add to cart </button>
          </div>
          <div className=" flex items-center mt-5 gap-2">
          <i className='bx bx-heart text-2xl' ></i>
          <span className="text-sm font-semibold"> Add to wishlist</span>
         </div>
         </div>
       
        </div>
        {/*tab section */}
    
        <Tab />

   {/*related products */}

   <div className="my-12 py-3">
    <h1 className="text-xl font-semibold mb-4 text-gray-600"> Related Products</h1>
      <div className="grid max-md:grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-4 ">
        {
          relproducts.map((item,index)=>(
            <div key={index}>
            <div><button className="bg-[#E53E3E] text-white text-xs h-5 rounded-sm font-bold px-2">{item.discount}%</button></div>
            <Image src={item.path} alt="body part " width={400} height={300} />
            <div>
            <Link href="#" > <button className="text-sm font-semibold hover:underline overflow-hidden h-10 text-left"> {item.title} </button></Link>
            <Rate allowHalf defaultValue={item.rate} style={{ fontSize: '13px' }}  /> <span className="text-xs">{item.rate}</span>
            <div className="flex flex-col gap-y-3 mt-3">
              <div className="flex justify-between items-center">
                <div className="leading-10">
                  <h1 className="text-gray-400 line-through text-sm">${item.originalPrice}.00</h1>
                  <h1 className="text-xl text-orange-600 font-semibold">${item.discountPrice}.00</h1>
                </div>
                <button className="bg-[#F96919] p-2 flex items-center rounded-md"><i className='bx bx-cart text-2xl text-white'></i></button>
              </div>
              <span className="text-green-500 text-xs">In Stock</span>
            </div>
            </div>
          </div>
          ))
         }
   </div>
   </div>

   </div>

    <Subsceibe />
    </Layout>
  )
}

export default Slug

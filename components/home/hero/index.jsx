import Link from "next/link";
import Image from 'next/image';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



// import required modules
import { Navigation } from 'swiper/modules';
const topMenu =[
    {
        label :"Installments Without Card",
        icon: "bx-dollar-circle",
        href: "#"

    },
    {
        label : "Free pickup in stores",
        icon: "bxs-cube-alt bx-rotate-90",
        href: "#"

    },{
        label : "Free delivery from €35",
        icon: "bxs-truck",
        href: "#"

    },
    {
        label : "Track your order",
        icon: "bx-dollar-circle",
        href: "#"

    },
    {
        label : "100% Customer satisfaction rate",
        icon: "bx-like",
        href: "#"

    },

]
const year = [
    {
     year : 2001
    },
    {
     year : 2002
    },
    {
     year : 2003
    },
    {
     year : 2004
    },
    {
     year : 2005
    },
]
const carBrand = [
    {
        label : "audi"
    },
    {
        label : "bmw"
    },
    {
        label : "toyota"
    },
    {
        label : "mg"
    },
    {
        label : "mahindra"
    }
];

const carModel = [
    {
        label : "x3"
    },
    {
        label : "fortuner"
    },
    {
        label : "scorpio"
    },
    {
        label : "q7"
    },
    {
        label : "phantom"
    }
];

const Hero = ()=>{
  return (
    <div className="container max-lg:px-5 lg:w-[83%] mx-auto py-4">
      <div className="flex gap-x-4 items-center justify-center mb-5 max-lg:hidden"> 
            {
                topMenu.map((items , index) =>(
                   <Link key={index} href={items.href} legacyBehavior >
                     <a className="flex items-center gap-2.5"> <i className={` bx ${items.icon} text-red-500 text-2xl`}> </i> {items.label}  </a>
                   </Link>
              ))
            }
      </div>
      <div className="grid md:grid-cols-3 gap-5">
        <div className="border-2 border-orange-600 rounded-md max-md:p-4 md:p-9">
          <h1 className="text-2xl font-semibold">Find The Right Parts Faster</h1>
          <p className="text-slate-500 text-sm leading-6">Having the right automotive parts and car accessories will help you to boost your travel comfort and go on the long-distance journey comfortably that you have been planning.</p>
          <form action="" className="flex  flex-col gap-y-4">

          <select name="" id="" className="w-full p-3 capitalize rounded-md outline-none bg-gray-200">
            <option value=""> select make</option>
                {   
                    carBrand.map((item,index)=>(
                        <option key={index}> {item.label}</option>
                    ))
                }
            </select>

            
          <select name="" id="" className="w-full p-3 rounded-md capitalize outline-none bg-gray-200">
          <option value=""> select model</option>
                {
                    carModel.map((item,index)=>(
                        <option key={index}> {item.label}</option>
                    ))
                }
            </select>

            <select name="" id="" className="w-full p-3 rounded-md capitalize outline-none bg-gray-200">
            <option value=""> select year</option>
                {
                    year.map((item,index)=>(
                        <option key={index}> {item.year}</option>
                    ))
                }
            </select>
            <button type="submit" className="bg-[#F85900] p-2 text-white capitalize"> find auto parts </button>
          </form>

        </div>

        <div className=" col-span-2 max-md:hidden "> 
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper ">
        <SwiperSlide>
        <Image
        src="/image/slide1.png" 
        alt="slider image"
        width="1000"
        height="510"
        className="w-full rounded-md cursor-pointer"
       />
        </SwiperSlide>
        <SwiperSlide>
        <Image
        src="/image/slide2.png" 
        alt="slider image"
        width="1000"
        height="510"
        className="w-full rounded-md cursor-pointer"
       />
        </SwiperSlide>
        <SwiperSlide>
        <Image
        src="/image/slide3.png" 
        alt="slider image"
        width="1000"
        height="510"
        className="w-full rounded-md cursor-pointer"
       />
        </SwiperSlide>
        
      </Swiper>
        
        </div>
     </div> 
      
      </div>
  )
}

export default Hero

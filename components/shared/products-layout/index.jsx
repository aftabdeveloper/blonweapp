import Layout from "../layout";
import React, { Children } from 'react'
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumb ,Select ,Slider , Checkbox , Button, Drawer} from 'antd';
import { useState ,useEffect } from "react";

const ProductsLayout = ({children}) => {

const BeardCrumb = ()=>{
    return (
        <Breadcrumb
        separator=">"
        items={[
          {
            title: 'Home',
            href :''
          },
          {
            title: 'Body parts',
            href: '',
          }
        ]}
      />
    )
}
 const SortItem = ()=>{
    return (
        <Select
      defaultValue="Default sorting"
      style={{
        padding:0
      }}
      bordered ={false}
      className="w-36"
   
      options={[
        {
          value: 'Default sorting',
          label: 'Default sorting',
        },
        {
          value: 'Sort by popularity',
          label: 'Sort by popularity',
        },
        {
          value: 'Sort by average rating',
          label: 'Sort by average rating',
        },
        {
            value: 'Sort by latest',
            label: 'Sort by latest',
        },
        {
            value: 'Sort by price low to high',
            label: 'Sort by price low to high',
        },   {
            value: 'Sort by price high to low',
            label: 'Sort by price high to low',
        },
      ]}
    />
    )
 }

 const Items = ()=>{
    return (
        <Select
      defaultValue="16 items"
      style={{
        width:100,
        padding:0
      }}
      bordered ={false}
   
      options={[
        {
          value: '16 items',
          label: '16 items',
        },
        {
          value: '32 items',
          label: '32 items',
        },
        {
          value: '64 items',
          label: '64 items',
        }
      ]}
    />
    )
 }

 
 const filterColor = [
  {
    color : '#000000',
    count : 2,
    colorName : 'black'
  },
  {
    color : '#1B67AB',
    count : 3,
    colorName : 'blue'
  },  {
    color : '#C6892E',
    count : 6,
    colorName : 'brown'
  },  {
    color : '#6B6B6B',
    count : 4,
    colorName : 'gray'
  },  {
    color : '#74C13B',
    count : 9,
    colorName : 'green'
  },  {
    color : '#D7B531',
    count : 5,
    colorName : 'orange'
  },
  {
    color : '#C62E2E',
    count : 2,
    colorName : 'red'
  },
 ]

 const brands = [
  {
    brand : 'vouge',
    count : 2,
  },
  {
    brand : 'vision',
    count : 3,
  },
 ]
 
  const [value , setValue] = useState(20)
  const handleSlider = (value)=>{
    setValue(value[1])
  }
  const [position , setPosition] = useState('relative');
  useEffect(() => {
    window.onscroll = () => {
      const height = Math.floor(window.scrollY);
      const dHeight = window.innerHeight
      console.log(height ,dHeight);
      if (height > 10000 ) {
        setPosition('relative');
      } else if (height > 630 && height<1800 ) {
        setPosition('fixed');
      } else {
        setPosition('relative');
      }
    };
  }, []);
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

 const PriceSlider = ()=>{
 
  return (
    <Slider trackBg = {'#000'} range step={1} max={500} defaultValue={[0, value]} trackStyle={{ backgroundColor: '#000' }} onAfterChange={handleSlider} />
  )
 }
 const onChange = (e) => {
  console.log(`checked = ${e.target.checked}`);
};

const Subsceibe = ()=>{
    return(
        <div className="mx-auto container max-lg:px-5 lg:w-[83%] mt-10 border-t-2 items-center py-14">
            <div className="flex lg:justify-between max-md:flex-col max-lg:gap-y-3">
                <div>
                    <h1 className="text-2xl mb-2 font-semibold">Join our newsletter for £10 offs</h1>
                    <p className="text-[#bbb]">Register now to get latest updates on promotions & coupons.<br/>Don’t worry, we not spam!</p>
                </div>
                <div>
                 <div className="flex justify-between   mb-3  rounded-lg">
                <input
                  type="search"
                  id="search-dropdown"
                  class="bg-[#ECEEF0] focus:bg-white w-full  py-1 text-lg px-3 outline-[#F85900] outline-border-r-0 rounded-l-lg"
                  placeholder="Enter Your Email Address"
                  required
                />
                <button
                  type="submit"
                  className="bg-[#F85900] items-center flex px-6 q rounded-r-lg font-semibold text-white py-3 "
                >
                  Subscribe
                </button>
            </div>
            <span className="text-sm">By subscribing you agree to our <a href="#" className="text-[#F85900]">Terms & Conditions and Privacy & Cookies Policy.</a></span>
                </div>
                </div>
        </div>
    )
}

const FilterSlider = ()=>{
  return (
    <div className={`pr-6 max-lg:w-[100%] col-span-3 ${open ? null : 'max-lg:hidden'} relative border-r-2 flex flex-col gap-y-6 `}>
              <div className={`top-1 ${position} `}>
              <h1 className="font-semibold ">Filter by Color</h1>
             <ul className="w-full flex flex-col gap-y-3">
               {
                filterColor.map((items,index)=>(
                  <li className={`flex justify-between text-gray-500`} key={index}>
                  <div className={`flex gap-2 items-center`}>
                  <div className={` w-5 h-5 flex gap-10 rounded-full`} style={{backgroundColor : items.color}}> </div>
                  <Link href='#'> <button className=" capitalize"> {items.colorName}  </button></Link>
                  </div>
                  <span> ({items.count})</span>
               </li>
                ))
               }
             </ul>
              <div>
                 <h1 className="font-semibold mb-4"> Filter by Price</h1>
                 <div className="flex justify-between gap-x-4 items-center">
                   <div>
                     <p className="text-xs text-[#C4C6BF]">Min price</p>
                     <input className="p-2 outline-orange-600 rounded-lg w-[130px] bg-[#F1F3F5] focus:bg-white "/>
                   </div>
                   _
                   <div>
                     <p className="text-xs text-[#C4C6BF]">Max price</p>
                     <input value={value} className="p-2 outline-orange-600 rounded-lg w-[130px] bg-[#F1F3F5] focus:bg-white"/>
                   </div>
                 </div>
                <PriceSlider />
              <div className="flex justify-between items-center">
                <div className="text-gray-600 text-sm flex gap-3">
                  <span>Price:</span>
                  <div>
                  <span>$0</span> -
                  <span>$300</span>
                  </div>
                </div>
                <button className="bg-[#f1f3f5] p-2 px-4 font-semibold rounded-lg">
                  Filter
                </button>
              </div>
              </div>

              {/* Brands*/}
             <div>
             <h1 className="font-semibold capitalize mb-4">brands</h1>
             <ul className="w-full flex flex-col gap-y-3">
               {
                brands.map((items,index)=>(
                  <li className={`flex justify-between text-[#C4C6BF]`} key={index}>
                  <div className={`flex gap-2 items-center`}>
                  <Checkbox > 
                  <Link href='#'> <button className=" uppercase text-gray-500"> {items.brand}  </button></Link>
                  </Checkbox>
                  </div>
                  <span> ({items.count})</span>
               </li>
                ))
               }
             </ul>
             </div>
             {/* ptoducts  */}
             <div>
              <h1 className="font-semibold capitalize mb-4">products status</h1>
             <ul className="w-full flex flex-col gap-y-3">
                  <li className={`flex justify-between text-[#C4C6BF]`} >
                  <div className={`flex gap-2 items-center`}>
                  <Checkbox onChange={onChange}>
                  <Link href='#'> <button className=" capitalize text-gray-500"> in stock  </button></Link>
                  </Checkbox>
                  </div>
                   </li>
                   <li className={`flex justify-between text-[#C4C6BF]`} >
                  <div className={`flex gap-2 items-center`}>
                  <Checkbox onChange={onChange}>
                  <Link href='#'> <button className=" capitalize text-gray-500"> on sale </button></Link>
                  </Checkbox>
                  </div>
                   </li>
             </ul>
             </div>
              </div>
            </div>
  )
}

  return (
    <Layout>
    <div className="relative w-[100%] max-lg:h-52 lg:h-80">
            <Image
            alt="dummy image"
            src = "/image/banner-67.jpg"
            layout="fill"
            />
            <div className="absolute flex flex-col gap-y-2 justify-center items-center h-[100%] w-[100%]">
              <h1 className="lg:text-lg font-semibold text-white"> Contact Us For Blonwe</h1>
              <h1 className="lg:text-6xl max-lg:text-3xl text-white font-semibold"> Our Shop</h1>
              <p className=" lg:text-lg  text-white text-center md:w-[45%] leading-6">Contact us for all your questions and opinions, or you can solve your problems in a shorter time with our contact offices.</p>
            </div>
        </div>

       <div className="container max-lg:px-5 lg:w-[83%]  mx-auto">
        <BeardCrumb />
        <div className=" border-b py-2 w-full flex justify-between items-center mb-10">
         <h1 className="text-gray-400 text-xs max-lg:hidden"> Showing all 5 results</h1>
         <button className="flex items-center gap-1 lg:hidden" onClick={showDrawer}>
        <i className='bx bx-filter-alt'></i> <span>Filter</span>
        </button>
         <div className="flex items-center gap-4">
           <div className="flex items-center gap-1">
            <h1 className="text-gray-400 text-sm">Sort:</h1> <SortItem />
           </div>

           <div className="flex items-center gap-1 max-lg:hidden">
            <h1 className="text-gray-400 text-sm">Show:</h1> <Items />
           </div>
            <button className="max-lg:hidden">
            <i className='bx bx-grid-alt text-xl bg-[#ECEEF0] font-thin text-gray-500 p-1 rounded-lg'></i>
            </button>
            <button className="max-lg:hidden">
            <i className='bx bx-menu text-2xl  text-gray-400 hover:bg-[#ECEEF0] p-1 rounded-lg ' ></i>
            </button>
         </div>
        </div>
        <div className="grid lg:grid-cols-12">
            {/*here filter bar coding */}
            
            <FilterSlider />

            {/* side filter menu foir mobile */}
            <Drawer title={<h1 className="text-right">filter</h1>} placement="left" onClose={onClose} open={open}>
              <FilterSlider />
            </Drawer>

          <div className="col-span-9  lg:pl-10 ">
           <div> {children} </div>
          </div>
        </div>
       </div>  
       <div className=" bg-white fixed bottom-0 z-40 py-2 w-full md:hidden rounded-t-md text-4xl flex justify-evenly text-gray-400 font-thin border-t"> 
          <button><i className='bx bx-store'></i> <p className="text-sm">Store</p> </button>
          <button><i className='bx bx-search'></i> <p className="text-sm">Search</p> </button>
          <button><i className='bx bx-heart'></i> <p className="text-sm">Wishlist</p></button>
          <button><i className='bx bx-user-circle'></i> <p className="text-sm"> Account</p></button>
          <button><i className='bx bx-menu'></i> <p className="text-sm">Categories</p></button>
       </div>
       {/* subsceibe  */}
       <Subsceibe />
    </Layout>
  )
}

export default ProductsLayout

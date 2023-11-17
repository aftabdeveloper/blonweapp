import React from 'react'
import Image from 'next/image';
const ProductSlider = () => {
  return (
    <div className='container mx-auto max-lg:px-5 lg:w-[83%] py-8'>
      <div className='flex items-center justify-between'>
        <h1 className='text-xl'> Don&apos;t miss this week&apos;s sales</h1>
        <button className='capitalize flex items-center text-sm'> view all <i className='bx bx-arrow-back bx-flip-horizontal' ></i></button>
      </div>
     <div className='grid md:grid-cols-2 gap-9 my-10'> 
       <div className='relative h-[200px] lg:h-[270px]'>
              <Image
               src="/image/b5.jpg"
               alt="slider image"
               layout='fill'
               className='rounded-md'
              
             />
      </div>
      <div className='relative h-[200px] lg:h-[270px]'>
              <Image
               src="/image/b6.jpg"
               alt="slider image"
               layout='fill'
               className='rounded-md'
              
             />
      </div>
     </div>
    </div>
  )
}

export default ProductSlider

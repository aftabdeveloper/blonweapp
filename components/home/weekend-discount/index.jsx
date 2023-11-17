import Image from 'next/image';
const WeekendDiscount = () => {
  return (
    <div className='container mx-auto max-lg:px-5 lg:w-[83%] py-8'>
     <div className='grid md:grid-cols-2 gap-9 my-10'> 
       <div className='relative lg:h-[270px] max-lg:h-[170px]'>
              <Image
               src="/image/b7.jpg"
               alt="slider image"
               layout='fill'
               className='rounded-md'
              
             />
      </div>
      <div className='relative max-lg:h-[170px] lg:h-[270px]'>
              <Image
               src="/image/b8.jpg"
               alt="slider image"
               layout='fill'
               className='rounded-md'
              
             />
      </div>
     </div>
    </div>
  )
}

export default WeekendDiscount

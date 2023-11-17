import Image from 'next/image';
const carDetail = [
        {
        title :"Praesent blandit ligula non molestie euismod",
        desc : "Donec euismod, arcu sit amet bibendum malesuada, turpis risus posuere nulla, a varius erat tellus vitae nisl.",
        icon : "bx-color"
    },
    
    {
        title :"Praesent blandit ligula non molestie euismod",
        desc : "Donec euismod, arcu sit amet bibendum malesuada, turpis risus posuere nulla, a varius erat tellus vitae nisl.",
        icon : "bxs-car-wash"
    },
    
    {
        title :"Praesent blandit ligula non molestie euismod",
        desc : "Donec euismod, arcu sit amet bibendum malesuada, turpis risus posuere nulla, a varius erat tellus vitae nisl.",
        icon : "bx-filter-alt"
    },
    
    {
        title :"Praesent blandit ligula non molestie euismod",
        desc : "Donec euismod, arcu sit amet bibendum malesuada, turpis risus posuere nulla, a varius erat tellus vitae nisl.",
        icon : "bx-color"
    },  

]
const Details = () => {
  return (
    <div className="container max-lg:px-5 lg:w-[83%] mx-auto py-9">
      <div className=" flex flex-col items-center lg:px-28 mb-8">
        <h1 className="md:text-3xl max-md:text-2xl text-center font-semibold mb-5">Genuine Auto Parts You Can Find at Affordable Prices</h1>
        <p className="text-slate-400 text-center">In hac habitasse platea dictumst. Pellentesque viverra sem nec orci lacinia, in bibendum urna mollis. Quisque nunc lacus, varius vel leo a, pretium lobortis metus. Vivamus consectetur consequat justo. Sed interdum nunc ut tristique congue.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-10 py-8 my-5">
        <div className='flex flex-col  gap-y-10 lg:pr-20'>
          {
            carDetail.map((item,index)=>(
             <div key={index} className='flex gap-x-7 items-start  max-md:flex-col'> 
              <i className={` bx text-5xl p-2 bg-[#F85900] text-white rounded-md ${item.icon}`}> </i>
              <div className='flex flex-col gap-y-4'>
                <h1 className='lg:text-xl font-semibold leading-6'>{item.title}</h1>
                <p className='text-gray-500 text-sm leading-4'>{item.desc}</p>
              </div>
             </div>
            ))
          }
        </div>
        
        <div className='relative h-[680px]'>
             <Image
               src="/image/car-banner.png"
               alt="slider image"
               layout='fill'
             />
        </div>
        <div className='flex flex-col  gap-y-10 lg:pl-20'>
        {
            carDetail.map((item,index)=>(
             <div key={index} className='flex gap-x-7 items-start max-md:flex-col '> 
              <i className={` bx text-5xl p-2 bg-[#F85900] text-white rounded-md ${item.icon}`}> </i>
              <div className='flex flex-col gap-y-4'>
                <h1 className='lg:text-xl font-semibold leading-6'>{item.title}</h1>
                <p className='text-gray-500 text-sm leading-4'>{item.desc}</p>
              </div>
             </div>
            ))
          }
        </div>

      </div>

      <div className='grid grid-cols relative max-lg:h-[160px] lg:h-[250px]'>
             <Image
               src="/image/b4.jpg"
               alt="slider image"
               layout='fill'
               className='rounded-md'
             />
      </div>
    </div>
  )
}

export default Details

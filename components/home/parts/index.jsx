import Image from 'next/image';
import Link from "next/link";
const partsCategory = [
    {
        label : "body parts",
        path : "/image/body.png",
        route : "/products"
    },
    {
        label :" brake disks & pads",
        path : "/image/brakes.png",
        route : "/products"
    },
   
    {
        label : "tyres",
        path : "/image/tyres.png",
        route : "/products"

    },
    {
        label : "tools and equipments",
        path : "/image/tuning.png",
        route : "/products"

    },
    {
        label : "engine parts",
        path : "/image/transmission.png",
        route : "/products"

    },
    {
        label : "filters",
        path : "/image/filters.png",
        route : "/products"

    },
    {
        label : "oils and fluids",
        path : "/image/oils.png",
        route : "/products"

    },

]

const Parts = () => {
  return (
    <div className="container mx-auto max-lg:px-5 lg:w-[83%]">
       <div className="grid md:grid-cols-7 gap-8 py-8 border-b mb-7 ">
        {
            partsCategory.map((items,index)=>(
              <div key={index} className='flex  flex-col items-center'>
              <Image
               src={items.path}
               alt="slider image"
               width="120"
               height="100"
              
              />
             <Link href={items.route} legacyBehavior >
             <a className='capitalize font-semibold text-sm hover:text-orange-600'>{items.label}</a>
             </Link>
             </div>
          ))
        }
       </div>

       <div>
        <div className='grid md:grid-cols-3 max-md:gap-y-6'>
              <Image
               src="/image/b1.jpg"
               alt="slider image"
               width="400"
               height="100"
               className='rounded-md shadow-md'
              
             />

             <Image
               src="/image/b2.jpg"
               alt="slider image"
               width="400"
               height="100"
               className='rounded-md shadow-md'
              
             />

             <Image
               src="/image/b3.jpg"
               alt="slider image"
               width="400"
               height="100"
               className='rounded-md shadow-md'
              
             />   
        </div>
       </div>
    </div>
  )
}

export default Parts

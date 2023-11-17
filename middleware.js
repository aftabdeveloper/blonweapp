
import { NextResponse } from 'next/server'
const res = NextResponse

export const middleware = async (req)=>{
    const auth = req.cookies.has('authToken')
 /*
   if(req.nextUrl.pathname.startsWith('/products') || req.nextUrl.pathname.startsWith('/cart'))
   {
   try {
       const {value} = req.cookies.get('authToken')  
       const response = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT}/api/jwt/${value}`)
       if(response.status != 200) return res.redirect(new URL('/register', req.url))
       const userData = await response.json()
       const header = res.next()
       header.cookies.set({
           name: 'session',
           value: JSON.stringify(userData),
           path: '/'
       })
       return header
       
   } 
   catch(error){
       return res.redirect(new URL('/register',req.url))
   }
   }
*/
   if(req.nextUrl.pathname.startsWith('/register')){
    try {
        const {value} = req.cookies.get('authToken')  
        const response = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT}/api/jwt/${value}`)
        if(response.status != 200) return res.next()
        const userData = await response.json()
        const header = res.next()
        header.cookies.set({
            name: 'session',
            value: JSON.stringify(userData),
            path: '/'
        })

       return(
          header,
          res.redirect(new URL('/products',req.url))
       )
    } 
    catch(error){
    return res.next()
    }
   }

   return res.next()
}

export const config = {
    matcher: [
        '/products',
        '/register',
        '/cart'
    ]
}
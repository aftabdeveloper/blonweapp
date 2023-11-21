import axios from 'axios'
import useRazorpay from "react-razorpay";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_ENDPOINT

const Test = ()=>{

    const razorpay = useRazorpay()
    const payNow = async (amount)=>{
    try
    {
       const {data:{id}} = await axios.post("/api/razorpay/order",{amount})
       const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // Enter the Key ID generated from the Dashboard
        amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: "INR",
        name: "DOT PRODUCT",
        description: "React course payment",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png",
        order_id: id, //This is a sample Order ID. Pass the `id` obtained in the response of createOrder().
        handler: async function (response) {
          const x = await axios.post("/api/razorpay/payment",response)
        },
        prefill: {
          name: "aftab",
          email: "youremail@example.com",
          contact: "9999999999",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
        
    }
    const rzp1 = new Razorpay(options);
  
    rzp1.open();
}
        catch(err)
        {
            alert(err.message)
        }
    }
    return (
        <button onClick={()=>payNow(5000)}>Pay now</button>
    )
}


export default Test
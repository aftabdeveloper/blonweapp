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
        name: "Acme Corp",
        description: "React course payment",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png",
        order_id: id, //This is a sample Order ID. Pass the `id` obtained in the response of createOrder().
        handler: function (response) {
          alert(response.razorpay_payment_id);
          alert(response.razorpay_order_id);
          alert(response.razorpay_signature);
        },
        prefill: {
          name: "Piyush Garg",
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

    rzp1.on("payment.failed", function (response) {
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
    });
  
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
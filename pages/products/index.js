import Products from "@/components/products";
import axios from "axios";

const ProductsEl = ({data})=>{
    return <Products products={data}/>
    
}

export default ProductsEl

// export const getServerSideProps = async ()=>{
//     console.log("successs")
//         const {data} = await axios.get("https://fakestoreapi.com/products")
//         return {
//             props: {data}
//         }
// }

export const getStaticProps = async ()=>{
    console.log("testing")
    const {data} = await axios.get("https://fakestoreapi.com/products")

    return {
        props: {data},
        revalidate: 60
    }
}
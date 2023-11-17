import Products from "@/components/products";
import axios from 'axios'

const ProductsEl = ({products})=>{
    return <Products data={products} />
}

export default ProductsEl

export const getStaticProps = async ()=>{
    const {data} = await axios.get('http://localhost:4141/products')
    return {
        props: {products: data},
        revalidate: 10
    }
}
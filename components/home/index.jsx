import Layout from "../shared/layout";
import Hero from "./hero";
import Parts from "./parts";
import ProductSlider from "./product-slider";
import Details from "./details";
import WeekendDiscount from "./weekend-discount";
const Home = ()=>{
  return (
     <Layout title="Homepage">
        <Hero />
        <Parts />
        <ProductSlider />
        <Details />
        <WeekendDiscount />
     </Layout>
  )
}

export default Home

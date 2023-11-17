import { configureStore } from "@reduxjs/toolkit";
import cart from "@/redux/slices/cart"
const store = configureStore({
    reducer: {
        cart
    }
})

export default store
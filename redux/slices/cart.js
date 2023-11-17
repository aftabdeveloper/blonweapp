import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: 0,
    reducers: {
        addToCart: (state)=>{
            return (state+1)
        }
    }
})

export const {addToCart} = cartSlice.actions
export default cartSlice.reducer
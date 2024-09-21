import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../content/productlist";

const initialState = {
   product:{},
}

export const exactSlice = createSlice({
    name:'exactProduct',
    initialState,
    reducers:{
        setExactProduct:(state, action)=>{
            state.product = {...state.product, ...action.payload}
            console.log(state.product)
        },
    }
})

export const {setExactProduct} = exactSlice.actions;
export default exactSlice.reducer;
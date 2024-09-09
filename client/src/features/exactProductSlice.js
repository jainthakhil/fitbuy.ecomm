import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id:'',
    img:'',
    name:'',
    price:'',
    description:''
}

export const exactSlice = createSlice({
    name:'exactProduct',
    initialState,
    reducers:{
        setExactProduct:(state, action)=>{
            state.id = action.payload.id;
            state.name = action.payload.name;
            state.img = action.payload.img;
            state.price = action.payload.price;
            state.description = action.payload.description;
        }
    }
})

export const {setExactProduct} = exactSlice.actions;
export default exactSlice.reducer;
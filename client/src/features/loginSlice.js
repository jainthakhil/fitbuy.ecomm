import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name:'username',
    email:''

}

export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        setUserName:(state, action)=>{
            state.name = action.payload;
        },
        setUserEmail:(state, action)=>{
            state.email = action.payload;
        },
    }

})

export const { setUserName, setUserEmail } = userSlice.actions;
export default userSlice.reducer;
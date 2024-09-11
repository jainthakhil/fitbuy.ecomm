import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    items:[],
    itemsInCart:0,
}


const cartSlice = createSlice({
    name: "cart",
   initialState,
    reducers:{
        addItem: (state, action) => {
          state.items.push(action.payload);
            // // Check if the item already exists in the cart
            // const exists = state.items.find(item => item.id === action.payload.id);
            // // Only add the item if it's not already in the cart
            // if(exists){
            //   exists.numberOfProduct += 1;
            // }
            // else {
            //   // If it doesn't exist, add it to the cart with quantity 1
            //   state.items.push({action.payload})
           
            // }
          },
          removeItem: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload.id);
            console.log('remove item slice')
          },
          increaseItemsInCart: (state, action)=>{
            state.itemsInCart +=1;
          },
          decreaseItemsInCart: (state, action)=>{
            state.itemsInCart -=1;
          }

        },
});

export const {addItem, removeItem, increaseItemsInCart, decreaseItemsInCart} = cartSlice.actions;
export default cartSlice.reducer;
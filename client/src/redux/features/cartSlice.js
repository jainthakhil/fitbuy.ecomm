import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  items: [],
  itemsInCart: 0,
  totalPrice: 0,
  actualCart: [],
}


const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(item => 
        item.id === action.payload.id &&
        item.color === action.payload.color &&
        item.size === action.payload.size &&
        item.name === action.payload.name
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.actualCart.push(action.payload)
      const total = state.itemsInCart += 1
        console.log(total);
      
    },
    removeItem: (state, action) => {
      console.log("remover reducer used")
      const existingItem = state.items.find(item => 
        item.id === action.payload.id &&
        item.color === action.payload.color &&
        item.size === action.payload.size &&
        item.name === action.payload.name
      );
      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else {
          state.items = state.items.filter(item => 
            !(item.id === action.payload.id &&
              item.color === action.payload.color &&
              item.size === action.payload.size &&
              item.name === action.payload.name)
          );
        }
        state.actualCart = state.actualCart.filter(item => 
          !(item.id === action.payload.id &&
            item.color === action.payload.color &&
            item.size === action.payload.size &&
            item.name === action.payload.name))
        const total = state.itemsInCart -= 1
      }
    },
    increaseItemsInCart: (state, action) => {
      state.itemsInCart += 1;
      console.log(state.items.length)
    },
    decreaseItemsInCart: (state, action) => {
      state.itemsInCart -= 1;
    },
    increaseTotalPrice: (state, action) => {
      state.totalPrice += action.payload.price
    },
    decreaseTotalPrice: (state, action) => {
      state.totalPrice -= action.payload.price
    },

    removeSingleItem: (state, action) => {
      const { id, color, size } = action.payload;

      // Find the index of the first occurrence of the item
      const indexToRemove = state.actualCart.findIndex(
        (item) => item.id === id && item.color === color && item.size === size
      );

      // Remove only one instance of the item
      if (indexToRemove !== -1) {
        state.actualCart.splice(indexToRemove, 1);
      }
    },

  },
});

export const { addItem, removeItem, increaseItemsInCart, decreaseItemsInCart, increaseTotalPrice, decreaseTotalPrice, removeSingleItem } = cartSlice.actions;
export default cartSlice.reducer;
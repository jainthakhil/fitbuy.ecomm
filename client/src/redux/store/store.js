import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/loginSlice'; 
import exactProductReducer from '../features/exactProductSlice'
import cartSlice from '../features/cartSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    exactProduct: exactProductReducer,
    cart: cartSlice,
  }
});

export default store;

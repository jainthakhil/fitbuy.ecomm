import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/loginSlice'; 

const store = configureStore({
  reducer: {
    user: userReducer 
  }
});

export default store;

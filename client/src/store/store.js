import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/loginSlice'; 
import exactProductReducer from '../features/exactProductSlice'

const store = configureStore({
  reducer: {
    user: userReducer,
    exactProduct: exactProductReducer
  }
});

export default store;

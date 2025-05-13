import { configureStore } from '@reduxjs/toolkit';  
import authReducer from '../slices/AuthSlice';  
import productsReducer from '../slices/ProductSlice';  
import cartReducer from '../slices/CartSlice';  

const store = configureStore({  
  reducer: {  
    auth: authReducer,  
    products: productsReducer,  
    cart: cartReducer,  
  },  
});  

export default store; 
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice'; // Ensure CartSlice is correctly exported

const store = configureStore({
    reducer: {
        cart: cartReducer, // Add your cart reducer here
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware(), // Uncomment if you need to customize middleware
});

export default store;

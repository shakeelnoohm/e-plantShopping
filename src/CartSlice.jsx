import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [], // Holds the items in the cart
    },
    reducers: {
        // Add an item to the cart
        addItem: (state, action) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                // If the item already exists, increase its quantity
                existingItem.quantity += action.payload.quantity; // Ensure payload has quantity
            } else {
                // If it doesn't exist, add it to the cart with quantity
                state.items.push({
                    ...action.payload,
                    quantity: action.payload.quantity || 1, // Default to 1 if quantity not provided
                });
            }
        },
        // Remove an item from the cart
        removeItem: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload.id);
        },
        // Update the quantity of an item in the cart
        updateQuantity: (state, action) => {
            const item = state.items.find(item => item.id === action.payload.id);
            if (item) {
                item.quantity = action.payload.quantity; // Update the quantity
            }
        },
    },
});

// Export actions for use in components
export const { addItem, removeItem, updateQuantity } = cartSlice.actions;

// Export the reducer to be used in the store
export default cartSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        addToCart: (state, action) => {
            const ifexists = state.items.find(item => item.id === action.payload.id);
            if (ifexists) {
                ifexists.qty = ifexists.qty += 1; // Increment quantity if item already exists
                console.log('Item already exists in cart, incrementing quantity:', ifexists);
            }else {
                state.items.push({...action.payload, qty: 1 }); // Add new item with quantity 1
                console.log('Adding new item to cart:', action.payload);
            }
        },
        removeFromCart: (state, action) => {
            const ifexists = state.items.find(item => item.id === action.payload.id);
            if (ifexists) {
                if (ifexists.qty > 1) {
                    ifexists.qty -= 1; // Decrement quantity if more than 1
                    console.log('Decrementing quantity of item in cart:', ifexists);
                } else {
                    state.items = state.items.filter(item => item.id !== action.payload.id); // Remove item if quantity is 1
                    console.log('Removing item from cart:', action.payload.id);
                }
            } else {
                console.log('Item not found in cart:', action.payload.id);
            }
        },
        clearCart: (state) => {
            console.log('Clearing cart dispatcher');
            state.items = [];
        },
    }
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions; 
export default cartSlice.reducer;
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
            } else {
                state.items.push({ ...action.payload, qty: 1 }); // Add new item with quantity 1
                console.log('Adding new item to cart:', action.payload);
            }
        },
        removeFromCart: (state, action) => {
            const ifexists = state.items.find(item => item.id === action.payload.id);
            if (ifexists) {
                state.items = state.items.filter(item => item.id !== action.payload.id);
                console.log('Removing item from cart:', action.payload.id);
            } else {
                console.log('Item not found in cart:', action.payload.id);
            }
        },
        increaseQTY: (state, action) => {
            const item = state.items.find(item => item.id === action.payload.id);
            if (item) {
                item.qty += 1;
            } else {
                console.log('Item not found in cart for increasing quantity:', action.payload.id);
            }
        },
        decreaseQTY: (state, action) => {
            const item = state.items.find(item => item.id === action.payload.id);
            if (item) {
                if (item.qty > 1) {
                    item.qty -= 1;
                } else {
                    state.items = state.items.filter(item => item.id !== action.payload.id);
                    console.log('Removing item from cart due to zero quantity:', action.payload.id);
                }
            } else {
                console.log('Item not found in cart for decreasing quantity:', action.payload.id);
            }
        },
        clearCart: (state) => {
            console.log('Clearing cart dispatcher');
            state.items = [];
        },
    }
});

export const { addToCart, removeFromCart, clearCart, increaseQTY, decreaseQTY } = cartSlice.actions;
export default cartSlice.reducer;
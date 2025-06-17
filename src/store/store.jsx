import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import authReducer from '../slice/authSlice';
import cartReducer from '../slice/cartSlice';
import { configureStore } from '@reduxjs/toolkit';

const persistConfig = {
    key: 'cart', //key under which data will be stored in localStorage
    storage // use
};

//wrap cart reducer with persistReducer 
const persistCartReducer = persistReducer(persistConfig, cartReducer);
const persistAuthReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
    reducer: {
        cart: persistCartReducer,
        auth: persistAuthReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                // Ignore these action types for serializable check
                ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE']
            }
        })
});

export const persistor = persistStore(store);

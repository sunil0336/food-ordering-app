import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import authReducer from '../slice/authSlice';
import cartReducer from '../slice/cartSlice';
import { configureStore } from '@reduxjs/toolkit';

const cartPersistConfig = {
    key: 'cart',
    storage
};
const authPersistConfig = {
    key: 'auth',
    storage
};

const persistCartReducer = persistReducer(cartPersistConfig, cartReducer);
const persistAuthReducer = persistReducer(authPersistConfig, authReducer);

export const store = configureStore({
    reducer: {
        cart: persistCartReducer,
        auth: persistAuthReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE']
            }
        })
});

export const persistor = persistStore(store);

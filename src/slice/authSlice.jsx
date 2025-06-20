import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { useSelector } from 'react-redux';

const persistConfig = {
    key: 'auth',
    storage
};

const initialState = {
    isAuthenticated: false,
    user: null,
    users: []
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            const { username, password } = action.payload;
            const found = state.users.find(
                (u) => u.username === username && u.password === password
            );
            if (found) {
                state.isAuthenticated = true;
                state.user = { username };
            } else {
                state.isAuthenticated = false;
                state.user = null;
            }
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.user = null;
        },
        register: (state, action) => {
            const { username, password } = action.payload;
            const exists = state.users.some((u) => u.username === username);
            if (!exists) {
                state.users.push({ username, password });
            }
            // If exists, do nothing (or handle error in your Register component)
        }
    }
});

export const { login, logout, register } = authSlice.actions;
export default persistReducer(persistConfig, authSlice.reducer);

// localStorage.clear();

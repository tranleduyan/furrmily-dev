import { configureStore, createSlice } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const initialState = {
    userData: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserData: (state, action) => {
            state.userData = action.payload;
        },
        signOutUser: (state) => {
            state.userData = null; // Reset user data to null on sign out.
        }
    },
});

const persistConfig = {
    key: 'root',
    storage,  
};

const persistedReducer = persistReducer(persistConfig, userSlice.reducer);

const store = configureStore({
    reducer: persistedReducer,
});

const persistor = persistStore(store);

export const { setUserData, signOutUser } = userSlice.actions;

export {store, persistor};
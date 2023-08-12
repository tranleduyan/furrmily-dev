import { configureStore, createSlice } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const initialState = {
    userData: null,
    petTypes: [],
    petBreeds:[],
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
        },
        setPetTypes: (state, action) => {
            state.petTypes = action.payload;
        },
        setPetBreeds: (state, action) => {
            state.petBreeds = action.payload;
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
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

const persistor = persistStore(store);

export const { setUserData, signOutUser, setPetBreeds, setPetTypes } = userSlice.actions;

export {store, persistor};
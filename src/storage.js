import { configureStore, createSlice } from '@reduxjs/toolkit';

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
    },
});

const storage = configureStore({
    reducer: userSlice.reducer,
});

export const { setUserData } = userSlice.actions;

export default storage;
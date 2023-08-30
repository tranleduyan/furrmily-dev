//#region Import Components
import { configureStore, createSlice } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from 'redux';
//#endregion


//#region User

//Initial State
const userInitialState = {
    userData: null,
};

//Slice
const userSlice = createSlice({
    name: 'user',
    initialState: userInitialState,
    reducers: {
        setUserData: (state, action) => {
            state.userData = action.payload;
        },
        signOutUser: (state) => {
            state.userData = null; // Reset user data to null on sign out.
        },
    },
});

//#endregion

//#region Options - Options Data for the Drop Downs

//Initial State
const optionsInitialState = {
    petTypes: [],
    petBreeds: []
}

//Slice
const optionsSlice = createSlice({
    name: 'options',
    initialState: optionsInitialState,
    reducers: {
        setPetTypes: (state, action) => {
            state.petTypes = action.payload;
        },
        setPetBreeds: (state, action) => {
            state.petBreeds = action.payload;
        }
    }
})

//#endregion

//#region User Pet Profiles

//Initial State
const petProfilesInitialState = {
    data: [],
};

//Slice
const petProfilesSlice = createSlice({
    name: 'petProfiles',
    initialState: petProfilesInitialState,
    reducers: {
        setPetProfilesData: (state, action) => {
            state.data = action.payload;
        },
        clearPetProfilesData: (state) => {
            state.data = [];
        }
    },
});

//#endregion

//Reducers
const rootReducer = combineReducers({
    user: userSlice.reducer,
    options: optionsSlice.reducer,
    petProfiles: petProfilesSlice.reducer,
});

//#region Persist

//Configuration for Persist
const persistConfig = {
    key: 'root',
    storage,  
    whitelist: ['user', 'options']
};

//Persist Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

//Configuration for store
const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

//Persist Store
const persistor = persistStore(store);

//#endregion

//#region Export
export const { setUserData, signOutUser } = userSlice.actions;

export const { setPetBreeds, setPetTypes } = optionsSlice.actions;

export const { setPetProfilesData, clearPetProfilesData } = petProfilesSlice.actions;

export {store, persistor};
//#endregion
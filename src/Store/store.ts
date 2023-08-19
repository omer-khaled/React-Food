import {configureStore} from '@reduxjs/toolkit'
import { menuesReducer } from './placesSlice'
import {authReducer} from './authSlice';
import { mealReducer } from './MealSlice';
import { categoriesReducer } from './categoriesSlice';
import { areasReducer } from './areaSlice';
import { ingradiantesReducer } from './ingeradiantSlice';
import { searchReducer } from './searchSlice';
const store = configureStore({
    reducer:{
        auth:authReducer,
        places:menuesReducer,
        meal:mealReducer,
        categories:categoriesReducer,
        areas:areasReducer,
        ingradiantes:ingradiantesReducer,
        search:searchReducer
    }
});
const currentState = store.getState();
export type AppDispatch = typeof store.dispatch;
export type AppSelector = typeof currentState;
export default store;
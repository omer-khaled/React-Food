import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { initialStateCategoriesType } from "../Types/types";
// https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast
const initialState:initialStateCategoriesType= {categories:null,loading:null};
const getCategories = createAsyncThunk('categories/getCategories',async({url}:{url:string},{rejectWithValue})=>{
    try{
        let fetchedData = await(await fetch(url)).json();
        return fetchedData;
    }catch(error){
        return rejectWithValue((error as TypeError).message);
    }
});
const categoriesSlice = createSlice({
    name:'categories',
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(getCategories.fulfilled,(state,action)=>{
            state.categories = action.payload.meals;
            state.loading  =  true;
        });
        builder.addCase(getCategories.pending,(state,action)=>{
            state.loading  =  null;
        });
        builder.addCase(getCategories.rejected,(state,action)=>{
            state.loading  =  false;
        });
    }
});
const {reducer:categoriesReducer} = categoriesSlice;
export {categoriesReducer,getCategories};
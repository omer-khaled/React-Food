import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { initialStateSearchType } from "../Types/types";
const initialState:initialStateSearchType = {meals:null,loading:null};
const getSearchMeals = createAsyncThunk('search/getSearchMeals',async({url}:{url:string},{rejectWithValue})=>{
    try{
        let fetchedData = await(await fetch(url)).json();
        return fetchedData;
    }catch(error){
        return rejectWithValue((error as TypeError).message);
    }
});
const categoriesSlice = createSlice({
    name:'search',
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(getSearchMeals.fulfilled,(state,action)=>{
            state.meals = action.payload.meals;
            state.loading  =  true;
        });
        builder.addCase(getSearchMeals.pending,(state,action)=>{
            state.loading  =  null;
        });
        builder.addCase(getSearchMeals.rejected,(state,action)=>{
            state.loading  =  false;
        });
    }
});
const {reducer:searchReducer} = categoriesSlice;
export {searchReducer,getSearchMeals};
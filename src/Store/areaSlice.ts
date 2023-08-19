import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { initialStateAreasType } from "../Types/types";
const initialState:initialStateAreasType = {area:null,loading:null};
const getAreas = createAsyncThunk('areas/getAreas',async({url}:{url:string},{rejectWithValue})=>{
    try{
        let fetchedData = await(await fetch(url)).json();
        return fetchedData;
    }catch(error){
        return rejectWithValue((error as TypeError).message);
    }
});
const categoriesSlice = createSlice({
    name:'areas',
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(getAreas.fulfilled,(state,action)=>{
            state.area = action.payload.meals;
            state.loading  =  true;
        });
        builder.addCase(getAreas.pending,(state,action)=>{
            state.loading  =  null;
        });
        builder.addCase(getAreas.rejected,(state,action)=>{
            state.loading  =  false;
        });
    }
});
const {reducer:areasReducer} = categoriesSlice;
export {areasReducer,getAreas};
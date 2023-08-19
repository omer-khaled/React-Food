import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { initialStateIngradianteType } from "../Types/types";
const initialState:initialStateIngradianteType = {ingradiantes:null,loading:null};
const getIngradiante = createAsyncThunk('ingradiantes/getIngradiante',async({url}:{url:string},{rejectWithValue})=>{
    try{
        let fetchedData = await(await fetch(url)).json();
        return fetchedData;
    }catch(error){
        return rejectWithValue((error as TypeError).message);
    }
});
const categoriesSlice = createSlice({
    name:'ingradiantes',
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(getIngradiante.fulfilled,(state,action)=>{
            state.ingradiantes = action.payload.meals;
            state.loading  =  true;
        });
        builder.addCase(getIngradiante.pending,(state,action)=>{
            state.loading  =  null;
        });
        builder.addCase(getIngradiante.rejected,(state,action)=>{
            state.loading  =  false;
        });
    }
});
const {reducer:ingradiantesReducer} = categoriesSlice;
export {ingradiantesReducer,getIngradiante};
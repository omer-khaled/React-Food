import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {initialStateType} from "../Types/types";

const initialState:initialStateType = {
    plates : [],
    caseHandle:null
}
const getAllMeals = createAsyncThunk('places/getAllMeals',async(payload:any,{rejectWithValue})=>{
    // const {rejectWithValue} = thunkAPI;
    try{
        const {url,query} = payload;
        let fetchedData = await(await fetch(`${url}?${query}`,{method:"GET"})).json();
        return fetchedData;
    }catch(error:unknown){
        return rejectWithValue((error as Error).message);
    }

})
const memusesSlice = createSlice({
    name:'places',
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(getAllMeals.rejected,(state,action)=>{
            // throw new Response('error in Api server',{status:404,statusText:`${action.payload} in Server in Error`});
            state.caseHandle = false;
        });
        builder.addCase(getAllMeals.fulfilled,(state,action)=>{
            state.caseHandle = true;
            state.plates = action.payload.meals;
        });
    }
})
const {reducer:menuesReducer} = memusesSlice;
export {menuesReducer,getAllMeals};
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { initialStateTypeMeal } from "../Types/types";
const initialState:initialStateTypeMeal= {
    meal:null
}
const getMeal = createAsyncThunk("meal/getMeal",async(payload:any,{rejectWithValue})=>{
    try{
        const {id} = payload;
        let fetchedData = await(await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,{method:"GET"})).json();
        return fetchedData;
    }catch(error:unknown){
        return rejectWithValue((error as Error).message);
    }
});
const mealSlice = createSlice({
    name:'meal',
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(getMeal.fulfilled,(state,action)=>{
            state.meal = action.payload.meals[0];
        })
    }
});
const {reducer:mealReducer} = mealSlice;
export {mealReducer,getMeal};
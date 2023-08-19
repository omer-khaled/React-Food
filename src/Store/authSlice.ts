import { createSlice } from "@reduxjs/toolkit";
interface authIntial{
    loggin:boolean
}
const initialState:authIntial = {
    loggin:false,
}
const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        signIn:(state)=>{
            state.loggin = true;
        },
        logout:(state)=>{
            state.loggin = false;
        }
    },
});

const {reducer:authReducer,actions:{signIn,logout}} = authSlice;
export {authReducer,signIn,logout};
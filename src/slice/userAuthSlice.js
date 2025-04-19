import { use } from "react";
import axoisInstance from "../api/axoisInstances"
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const signUpUser = createAsyncThunk("auth/signupUser", async(useData,thunkApi) =>{
    try{
        const response = await axoisInstance.post("signup", useData,{
            headers:{
                "Content-type": "application/json",
            },
            withCredentials: true,
        });
        return response.data;
    }
    catch(err){
        return thunkApi.rejectWithValue(err.response.data)
    }
});


const authSlice = createSlice({
    name: "auth",
    initialState: {
        user:null,
        loading:false,
        error:null
    },
    reducers:{},
    extraReducers: (builder) =>{
        builder
            .addCase(signUpUser.pending, (state) =>{
                state.loading=  true,
                state.error = null
            })
            .addCase(signUpUser.fulfilled,(state,action) =>{
                state.loading=  false;
                state.user = action.payload.user;
            })
            .addCase(signUpUser.rejected,(state) =>{
                state.loading=  false;
                state;
            })
    }
})


export default authSlice.reducer;
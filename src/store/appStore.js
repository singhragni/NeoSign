import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../slice/userAuthSlice'
const appStore = configureStore({
    reducer:{
        auth: authReducer
    }
})


export default appStore;


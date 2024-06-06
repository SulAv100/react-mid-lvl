import { configureStore } from "@reduxjs/toolkit";
import bikeReducer from './Slice.jsx'


const store = configureStore({
    reducer:{
        bikes: bikeReducer
    }
})

export default store;
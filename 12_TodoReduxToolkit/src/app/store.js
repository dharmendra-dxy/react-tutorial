// NOTE: "react-redux" and "redux-toolkit" are different
// STEPS: create a store:


import {configureStore} from "@reduxjs/toolkit";


import todoReducer from "../features/todo/todoSlice";


export const store = configureStore( {
    reducer: todoReducer
} );
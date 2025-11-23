// This file can alse be created inside a folder "features"
// authSlice will track the user authentication:

import { createSlice } from "@reduxjs/toolkit";

// create inital state:
const initialState = {
    status : false,
    userData: null
};


// create authSlice:
const authSlice = createSlice({

    name : "auth",  
    initialState,
    reducers : {

        // login method:
        login : (state, action) => {
            state.status = true;
            state.userData = action.payload.userData;
        },

        // logout method:
        logout : (state) => {
            state.status = false;
            state.userData = null;
        } 
    }

});


// export login and logout:
export const { login, logout } = authSlice.actions;

// export reducer:
export default authSlice.reducer;

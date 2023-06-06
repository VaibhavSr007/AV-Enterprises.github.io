import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice( {
    name: "user",
    initialState: {
        currentUser: null,
        isFetching: false,
        error: false
    },

    reducers:{
        loginStart:(state) =>{
            state.isFetching = true;
        },
        loginSuccess:(state,action) =>{
            state.isFetching = false;
            state.error = false;
            state.currentUser = action.payload;
        },
        loginFailure:(state) =>{
            state.isFetching = false;
            state.error = true;
        },


        // GET
        getUsersStart: (state)=>{
            state.isFetching = true;
            state.error = false;
        },
        getUsersSuccess: (state, action)=>{
            state.isFetching = false;
            state.users = action.payload
        },
        getUsersFailure: (state)=>{
            state.isFetching = false
            state.error = true
        },

        //DELETE
        deleteUsersStart: (state)=>{
            state.isFetching = true;
            state.error = false;
        },
        deleteUsersSuccess: (state, action)=>{
            state.isFetching = false;
            state.users.splice(
                state.users.findIndex( (item) => item._id === action.payload),
                1
            );
        },
        deleteUsersFailure: (state)=>{
            state.isFetching = false
            state.error = true
        },
    }
});

export const {loginStart, loginSuccess, loginFailure, getUsersStart, getUsersSuccess, getUsersFailure, deleteUsersStart, deleteUsersSuccess, deleteUsersFailure} = userSlice.actions;
export default userSlice.reducer;
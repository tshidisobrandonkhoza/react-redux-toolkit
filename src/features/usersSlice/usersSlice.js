import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchUsers = createAsyncThunk('users/fetchUsers', () => {
    return axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then(response => response.data )
});


const usersSlice = createSlice({
    name: 'users',
    initialState: {
        loading: false,
        users: [],
        error: ''
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, state => {
            state.loading = true
        })
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false
            state.users = action.payload
        })
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.error = action.error.message
        })
    }
});

export default usersSlice.reducer;

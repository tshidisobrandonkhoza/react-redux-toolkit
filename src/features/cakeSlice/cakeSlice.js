import { createSlice } from "@reduxjs/toolkit";

const cakeSlice = createSlice({
    name: 'cake',
    initialState: {
        numofCake: 20
    },
    reducers: {
        ordered: (state, action) => {
            state.numofCake -= action.payload
        },
        restocked: (state, action) => {
            state.numofCake += action.payload
        }
    }
});


export default cakeSlice.reducer;
export const { ordered, restocked } = cakeSlice.actions;
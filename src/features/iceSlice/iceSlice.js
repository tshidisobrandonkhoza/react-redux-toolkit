import { createSlice } from "@reduxjs/toolkit";
import { ordered as cakeOrdered } from "../cakeSlice/cakeSlice";

const iceSlice = createSlice({
    name: 'ice',
    initialState: {
        numofIce: 10
    },
    reducers: {
        ordered: (state, action) => {
            state.numofIce -= action.payload
        },
        restocked: (state, action) => {
            state.numofIce += action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(cakeOrdered, (state, action) => {
            state.numofIce >= action.payload ? state.numofIce -= action.payload : state.numofIce -= action.payload - (action.payload - state.numofIce)

        })
    }
});

export default iceSlice.reducer;
export const { ordered, restocked } = iceSlice.actions;
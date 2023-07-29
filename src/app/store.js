 
import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "../features/cakeSlice/cakeSlice";
import usersReducer from "../features/usersSlice/usersSlice";
import iceReducer from "../features/iceSlice/iceSlice";



const store = configureStore({
    reducer: {
        cake: cakeReducer,
        ice: iceReducer,
        users: usersReducer
    }
});

export default store
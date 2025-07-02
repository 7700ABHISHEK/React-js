import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        count: 0,
    },
    
    reducers: {
        increament: (state, action) => {
            state.count = state.count + 1;
        },
        
        decreament: (state, action) => {
            state.count = state.count - 1;
        }
    }

})

export default counterSlice.reducer;

export const {increament, decreament} = counterSlice.actions
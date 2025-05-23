import { createSlice } from "@reduxjs/toolkit";

const composerSlice = createSlice({
    initialState : "",
    name : "Composer",
    reducers : {
        addResponse : (state, action) => {
            return action.payload
        }
    }
})

export default composerSlice.reducer
export const{addResponse} = composerSlice.actions
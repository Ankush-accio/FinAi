import { createSlice } from "@reduxjs/toolkit";

const currentUserSlice = createSlice({
    initialState : 0,
    name : "CurrentUser",
    reducers : {
        changeUser : (state, action) => {
            return action.payload
        }
    }
})

export default currentUserSlice.reducer
export const{changeUser} = currentUserSlice.actions


import {configureStore} from "@reduxjs/toolkit"
import UserSliceReducer from "./UsersDataSlice"
import CurrentUserSliceReducer from "./CurrentUser"

const store = configureStore({
    reducer:{
        User : UserSliceReducer,
        CurrentUser : CurrentUserSliceReducer
    }
})

export default store
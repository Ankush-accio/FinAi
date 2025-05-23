import {configureStore} from "@reduxjs/toolkit"
import UserSliceReducer from "./UsersDataSlice"
import CurrentUserSliceReducer from "./CurrentUser"
import ComposerSliceReducer from "./ComposerSlice"

const store = configureStore({
    reducer:{
        User : UserSliceReducer,
        CurrentUser : CurrentUserSliceReducer,
        Composer : ComposerSliceReducer
    }
})

export default store
import {configureStore} from "@reduxjs/toolkit"
import cartReducer from "../features/cart/cartSlice"
import modalReducer from "../features/modal/modalSlice"
import  userReducer  from "../features/users/userSlice"
import registrationSlice from "../features/registration/registrationSlice"

export const store = configureStore({
    reducer : {
        cart : cartReducer,
        modal : modalReducer,
        user : userReducer,
        registration : registrationSlice
    }
})
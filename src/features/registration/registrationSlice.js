import { createSlice } from "@reduxjs/toolkit"



const initialState = {
    step : 1,
    name : "",
    lastName : "",
    houseNo : "",
    city : "",
    jobTitle : "",
    company : ""

}

const registrationSlice = createSlice({
    name : "registration",
    initialState,
    reducers : {
        moveNext : (state) => {
           state.step += 1 ;
        },
        moveBack : (state) => {
            state.step -= 1 ;
         },
         handleFormState : (state, action) => {    
            const {propName, value} = action.payload
            state[propName] = value
         }
    }

})

export const {moveNext, moveBack, handleFormState} = registrationSlice.actions
export default registrationSlice.reducer
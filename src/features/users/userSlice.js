import { createSlice } from "@reduxjs/toolkit";

const initialState = [{ id : 1, name : "tina", surname : "diwan"}, {id : 2,  name : "sagarika", surname : "pandey"}]

const userSlice = createSlice({
    name : "users",
    initialState,
    reducers : {
        addUser : (state, action) => {
            const payload = {...action.payload, id : state.length + 1}
            state.push(payload)
        },
        deleteUser : (state, action) => {
            console.log(action.payload)
            return state.filter(item => item.id != action.payload)
        }
    }
})

export const {addUser, deleteUser} = userSlice.actions

export default userSlice.reducer
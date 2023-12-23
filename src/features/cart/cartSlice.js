import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import cartItems from "../../cartItems"
import axios from "axios";
import { openModal } from "../modal/modalSlice";


const BASE_URL = "https://course-api.com/react-useReducer-cart-project"


const initialState = {
    cartItems : [],
    amount : 2,
    total : 0,
    isLoading : false,
    isError : false
}
export const fetchCartItems = createAsyncThunk("cart/fetchCartItems", async (prop, thunkApi) => {
    try{
        const res = await axios.get(BASE_URL)
        return res.data
    }
    catch(error){

    }

})

const cartSlice = createSlice({
    name : "cart",
    initialState,
    reducers : {
        clearCart : (state) => {
            state.cartItems = [];
        },
        increaseAmount : (state, action) => {
           const item =  state.cartItems.find( (item) => item.id === action.payload )
            item.amount = item.amount +1 ;
        },
        removeItem : (state, action) => {
            const items = state.cartItems.filter(item =>  item.id !== action.payload)
            state.cartItems = items
        },
        decreaseAmount : (state, action) =>{
            const item =  state.cartItems.find( (item) => item.id === action.payload )
            item.amount = item.amount -1 ;
        },
        calculateTotal : (state) => {
            let amount = 0;
            let total = 0;
            state.cartItems.forEach(item => {
                amount += item.amount;
                total += Number(item.price) * Number(item.amount)

            })
            state.total = Math.ceil(total);
            state.amount = amount;
        }
    },
    extraReducers : {
        [fetchCartItems.pending] : (state) =>{
            state.isLoading = true
        },
        [fetchCartItems.fulfilled] : (state, action) => {
            state.isLoading = false;
            state.cartItems = action.payload;
        },
        [fetchCartItems.rejected] : (state) => {
            state.isLoading = false;
            state.isError = true
        }
    }
})

export const { clearCart, increaseAmount, removeItem, decreaseAmount, calculateTotal } = cartSlice.actions

export default cartSlice.reducer
import { List, Typography, Divider, Box, Button } from '@mui/material'
import React, { useEffect } from 'react'
import CartItems from './CartItems'
import { useDispatch, useSelector } from 'react-redux'
import {calculateTotal, fetchCartItems} from "../features/cart/cartSlice"
import {openModal} from "../features/modal/modalSlice"
import Model from '../component/Model'

export default function CartConatiner() {
    const dispatch =  useDispatch();
    const state = useSelector(store => store.cart)
    const {cartItems, isLoading} = useSelector(store => store.cart)
    const cartItemHtml = cartItems.map(item => <CartItems key = { item.id} cartItem= {item} />)
    useEffect(() => {
        dispatch(calculateTotal())
    }, [state]);

    useEffect(() => {
      dispatch(fetchCartItems())
    }, [])
  return (
    <>

      {isLoading ?
       <Typography variant='h6' align='center'>...Loading </Typography> : 
       <> < Model />
      <Typography align='center' margin={2} variant='h6' component="h1">Your Bag</Typography>
      <List sx={{ width: '100%', bgcolor: 'background.paper', my : "2" }}>
        {cartItemHtml}
      </List>
      <Divider textAlign="center" sx={{fontSize: "bold"}}>Total bill £{state.total}</Divider>

      <Box sx = {{display : "flex", margin : "2rem 0",  justifyContent : "right", alignItems : "center"}}>

      <Button onClick= {()=> dispatch(openModal())}variant='contained' color='error'>Clear cart</Button>

      </Box>
      </> 
      }
   
    </>
  )
}

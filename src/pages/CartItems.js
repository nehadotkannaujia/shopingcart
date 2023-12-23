import { Avatar, Box, Button, IconButton, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import DoDisturbOnIcon from '@mui/icons-material/DoDisturbOn';
import {increaseAmount, removeItem, decreaseAmount} from "../features/cart/cartSlice"
import { useDispatch } from 'react-redux';

export default function CartItems({ cartItem }) {
    const dispatch = useDispatch()
  return (
    <ListItem alignItems="flex-start">
        <ListItemAvatar>
            <Avatar alt="" src={cartItem.img}></Avatar>
        </ListItemAvatar>
        <ListItemText 
        primary={cartItem.title} 
         secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
               {cartItem.price}
               <Box></Box>
               <Button onClick={() => dispatch(removeItem(cartItem.id))} variant='text' display="block" color='error'>remove</Button>
              </Typography>
            </React.Fragment>
          }
          ></ListItemText>
          <IconButton onClick={() => dispatch(increaseAmount(cartItem.id))}><ControlPointIcon /></IconButton>
          <Typography margin={1} variant='body-text'>{cartItem.amount}</Typography>
          <IconButton disabled={cartItem.amount < 2 ? true : false} onClick={() => dispatch(decreaseAmount(cartItem.id))}>< DoDisturbOnIcon /></IconButton>
        
    </ListItem>
      
  )
}

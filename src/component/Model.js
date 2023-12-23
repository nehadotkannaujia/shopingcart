import React, { useState } from 'react'
import { Box, Modal, Typography, Button} from '@mui/material'
import { useDispatch, useSelector } from "react-redux";
import {closeModal} from "../features/modal/modalSlice"
import {clearCart} from "../features/cart/cartSlice"
import { Margin } from '@mui/icons-material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export default function Model() {
    const { isOpen } = useSelector((store) => store.modal)
    const dispatch = useDispatch();
    
  return (
    <>        
    <Modal 
        open = {isOpen}
        onClose = {() => dispatch(closeModal())}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                Clear bag
              </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
               Are you sure you want to clear your bag?
            </Typography>

            <Button variant='contained' color='error' sx={{margin : "2rem 1rem"}} onClick={() => {dispatch(clearCart()); dispatch(closeModal())  }}>Confirm</Button>
            <Button variant='contained' color='error' onClick={() => dispatch(closeModal())} >cancel</Button>
            </Box>
    </Modal>

        </>
   
  )
}

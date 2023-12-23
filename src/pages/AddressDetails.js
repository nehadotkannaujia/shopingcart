import React from 'react'
import { Box, Button, FormControl, Input, InputLabel, Typography } from '@mui/material'
import {useSelector} from "react-redux"

export default function AddressDetails({handleFormData}) {
  const {houseNo, city} = useSelector(state => state.registration)
  return (
    <Box>
    <Typography variant='h6' component="h2">Address details</Typography>
    <form>
      <FormControl sx={{display: "block", margin: "2rem 0"}}>
          <InputLabel htmlFor="houseNo">House Number</InputLabel>
          <Input size='small' value={houseNo} name="houseNo" id="houseNo" onChange={(e) => handleFormData(e)}></Input>
      </FormControl>
  
      <FormControl sx={{display: "block", margin: "2rem 0"}}>
          <InputLabel htmlFor="city">City</InputLabel>
          <Input size='small' value={city} name="city" id="city" onChange={(e) => handleFormData(e)}></Input>
      </FormControl>

    </form>
  </Box>
  )
}

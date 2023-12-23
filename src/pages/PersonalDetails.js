import { Box, Button, FormControl, Input, InputLabel, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

export default function PersonalDetails({handleFormData}) {
  const {name, lastName} = useSelector(state => state.registration)

  return (
    <Box>
      <Typography variant='h6' component="h2">Personal details</Typography>
      <form>
        <FormControl sx={{display: "block", margin: "2rem 0"}}>
            <InputLabel htmlFor="name">Name</InputLabel>
            <Input size='small'  value={name} name="name" id="name" onChange={(e) => handleFormData(e)}></Input>
        </FormControl>
    
        <FormControl sx={{display: "block", margin: "2rem 0"}}>
            <InputLabel htmlFor="lastName">Last Name</InputLabel>
            <Input size='small' name="lastName" value={lastName} id="lastName" onChange={(e) => handleFormData(e)}></Input>
        </FormControl>
      </form>
    </Box>
  )
}

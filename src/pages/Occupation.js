import React from 'react'
import { Box, Button, FormControl, Input, InputLabel, Typography } from '@mui/material'
import {useSelector} from "react-redux"

export default function Occupation({handleFormData}) {
    const {jobTitle, company} = useSelector(state => state.registration)
  return (
    <Box>
    <Typography variant='h6' component="h2">Occupation details</Typography>
    <form>
      <FormControl sx={{display: "block", margin: "2rem 0"}}>
          <InputLabel htmlFor="jobTitle">Job title</InputLabel>
          <Input size='small' value={jobTitle} name="jobTitle" id="jobTitle" onChange={(e) => handleFormData(e)}></Input>
      </FormControl>
  
      <FormControl sx={{display: "block", margin: "2rem 0"}}>
          <InputLabel htmlFor="company">Company Name</InputLabel>
          <Input size='small' value={company} name="company" id="company" onChange={(e) => handleFormData(e)}></Input>
      </FormControl>

    </form>
  </Box>
  )
}

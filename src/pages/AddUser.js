import { Container, FormControl, FormLabel, Input, Box, Button} from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {addUser} from "../features/users/userSlice"
import { useNavigate } from 'react-router-dom'

export default function AddUser() {
  const [formData, setData] = useState({})
  const dispatch = useDispatch()
  const navigate = useNavigate()

  function setFormData(event){
    const {value, name} = event.target
    setData(prev => {
      return { ...prev, [name] : value}
    })

  }
  console.log(JSON.stringify(formData))
  return (
    <Box textAlign="center">
    <FormControl>
      <FormLabel htmlFor='name'>Name</FormLabel>
      <Input  name="name" id="name" value={formData.name} onChange={(e) => setFormData(e)}></Input>
    </FormControl>
    <Box sx={{margin: "2rem 0"}}>
      <FormControl>
      <FormLabel htmlFor='name'>Surname</FormLabel>
      <Input  name="surname" id="surname" value={formData.surname} onChange={(e) => setFormData(e)}></Input>
      </FormControl>
    </Box>
   <Button variant='contained' onClick={() => {dispatch(addUser(formData)); navigate("/profile");}}>Add user</Button>
  </Box>
      
   
  )
}

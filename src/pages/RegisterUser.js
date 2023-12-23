import { Box, Typography, Button } from '@mui/material'
import React from 'react'
import Occupation from "./Occupation"
import PersonalDetails from "./PersonalDetails"
import AddressDetails from "./AddressDetails"
import { useSelector, useDispatch } from 'react-redux'
import {moveNext, moveBack, handleFormState} from "../features/registration/registrationSlice"
import CheckAnswers from './CheckAnswers'

const TOTAL_PAGES = 4

export default function RegisterUser() {
  const {step} = useSelector(state => state.registration)
  const dispatch = useDispatch();
  console.log(step)

  function showPage(){

    switch(step){
      case 1 : 
        return <PersonalDetails handleFormData = {handleFormData} />
        case 2 :
         return <AddressDetails handleFormData = {handleFormData} />
          case 3 : 
          return <Occupation handleFormData = {handleFormData} />
          case 4 : 
          return <CheckAnswers handleFormData = {handleFormData} />
          default :
           return <PersonalDetails handleFormData = {handleFormData} />
    }

  }


  function showPreviousPage(){
    dispatch(moveBack())

  }
  function showNextPage(){
    dispatch(moveNext())
    
  }

  function handleFormData(e){
      const {value, name} = e.target;
      dispatch(handleFormState({propName : name, value : value}))
  }

  return (
    <Box>
      <Typography textAlign="center" marginTop={5} variant='h6' component="h1">Register your details</Typography>
       {showPage()}
       <Button  sx={{marginRight : "1rem", display : step === 1 ? "none" : ""}} variant='contained' onClick={ () => showPreviousPage()}>Back</Button>
       <Button sx={{display : step === TOTAL_PAGES ? "none" : ""}} variant='contained' onClick={ () => showNextPage()}>Next</Button>
    </Box>
  )
}

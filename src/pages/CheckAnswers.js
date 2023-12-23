import React from 'react'
import {Button} from "@mui/material"
import {useSelector} from "react-redux"

export default function CheckAnswers() {
    const { 
        name,
        lastName,
        houseNo,
        city,
        jobTitle,
        company} = useSelector(state => state.registration)

  return (
    <div>

        <h1> check answers</h1>
        <p>{name}</p>
        <p>{lastName}</p>
        <p>{houseNo}</p>
        <p>{city}</p>
        <p>{jobTitle}</p>
        <p>{company}</p>
       <Button variant="contained">Confirm and submit</Button>
    </div>
  )
}

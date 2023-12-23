import { Typography } from '@mui/material'
import React from 'react'
import {Outlet} from "react-router-dom"

export default function Profile() {
  return (
    <>
      <Typography marginTop={4} marginBottom={4} variant='h6' component="h1">Manage users</Typography>
      <Outlet></Outlet>
    </>
  )
}

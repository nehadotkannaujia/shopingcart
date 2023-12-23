import { Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Button} from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {deleteUser} from "../features/users/userSlice"

export default function AllUsers() {
  const state = useSelector(store => store.user)
  const dispatch = useDispatch();

  return (
   
      <TableContainer>
        <Table sx={{ minWidth: 500 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Surname</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {state?.map( (item) => { 
         return     <TableRow key={item.id}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.surname}</TableCell>
                  <TableCell>
                    <Button variant='contained'  sx={{margin: ".5rem"}}>Update</Button>
                    <Button variant='contained' color="error"  margin={2} onClick={() => dispatch(deleteUser(item.id))}>Delete</Button>
                  </TableCell>
              </TableRow> })}
        </TableBody>
        </Table>
        <Link to="AddUser"><Button variant='contained' sx={{margin: "2rem 0"}}>Add user +</Button></Link>
      </TableContainer>
   
  )
}

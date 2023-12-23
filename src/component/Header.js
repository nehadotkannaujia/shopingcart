import { AppBar, Badge, IconButton, Toolbar, Typography, Container, Button} from '@mui/material'
import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import  {useSelector}  from "react-redux"
import {Link} from "react-router-dom"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GroupAddIcon from '@mui/icons-material/GroupAdd';

export default function Header() {
    const {amount} = useSelector( (store) => store.cart)
    function handleMenu(){}
  return (
    <Container>
        <AppBar position='static'>
            <Toolbar >
                <Link to="/" style={{ color : "white"}}><Button color='inherit'>My shopping app </Button></Link>
                <Link to="register" style={{marginLeft : "auto", color : "white"}} >
                    <IconButton
                        color = "inherit"
                        size ="large"
                        aria-label='user details'
                        aria-haspopup="false"
                      >
                            < GroupAddIcon />
                    </IconButton>
                </Link>
                
                <Link to="cart" style={{color : "white"}}>
                    <IconButton
                        color = "inherit"
                        size ="large"
                        aria-label='shoping cart'
                        aria-haspopup="true"
                        onClick={handleMenu}>
                            <Badge badgeContent={amount} color="error">
                                < ShoppingCartIcon />
                            </Badge>
                    </IconButton>
                </Link>
                <Link to="profile" style={{color : "white"}} >
                    <IconButton
                        color = "inherit"
                        size ="large"
                        aria-label='profile'
                        aria-haspopup="true"
                      >
                            < AccountCircleIcon />
                    </IconButton>
                </Link>
               
            </Toolbar>
            
        </AppBar>
    </Container>
  )
}

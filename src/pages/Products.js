import React from 'react'
import { Card, CardContent, CardMedia , Typography, Box, Grid, TextField } from '@mui/material'

export default function Products({listItem}) {
  return (
    <Grid key={listItem.id} item xs={12} md={4}><Card key={listItem.id} sx={{ maxWidth: 345 }}>
            <CardMedia height="140" component="img" alt="" image={listItem.image}></CardMedia>
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {listItem.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
               {listItem.description}
            </Typography>
            </CardContent>
            </Card>
            </Grid>
  )
}

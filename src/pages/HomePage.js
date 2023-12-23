import React, { useEffect, useMemo, useState, useDeferredValue} from 'react'
import { Card, CardContent, CardMedia , Typography, Box, Grid, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import Products from "./Products"
import axios from 'axios'

const BASE_URL = "https://course-api.com/react-store-products"

export default function HomePage() {
  const [list, setListData] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const deferedInputValue = useDeferredValue(searchValue)
 
  const filteredData = useMemo(() => { 
    return list?.filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase()))}, [list, deferedInputValue])
 
  useEffect(() => {
      const fetchData = async () => {
      try{
          const data = await axios.get(BASE_URL)
          setListData(data.data)
      }
      catch(error){
  
      }
  }
   fetchData();
  },[])


  useEffect(() => { 
    console.log(`value is ${searchValue} and deffered value is ${deferedInputValue}`)
  }, [list, deferedInputValue])
  return (
    <>
    <Box sx={{margin : "2rem 0", display : 'flex', justifyContent:'right', alignItems: "center", gap: "1em"}} textAlign="right">
     <SearchIcon color="primary" fontSize='large' />
     <TextField variant="outlined" label="Type to search" type='search' value={searchValue} onChange = {(e) => setSearchValue(e.target.value)} />
    </Box>
     
    <Grid container spacing={3} textAlign="center">
     
    {filteredData?.map((listItem) => {

           return  <Products listItem = {listItem} />
    })}
       
    </Grid>
    </>
  )
}

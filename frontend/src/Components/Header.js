import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom';

//MUI Imports
import { Button, Typography, Grid, AppBar, Toolbar } from '@mui/material';
import { makeStyles } from '@mui/styles';

//Components
import CustomCard from './CustomCard';



const useStyles = makeStyles({
  leftNav: {
      marginRight: 'auto'
  },
  rightNav: {
      marginLeft: 'auto',
      marginRight: '10rem'
  },

  propertyBtn: {
      backgroundColor: 'green',
      color: 'white',
      width: "15rem",
      fontSize: "1.1rem",
      marginRight: "1rem",
      '&:hover': {
        backgroundColor: 'blue',
    }
  },

  loginBtn: {
      backgroundColor: 'white',
      color: 'black',
      width: "15rem",
      fontSize: "1.1rem",
      marginLeft: "1rem",
      '&:hover': {
          backgroundColor: 'green',
      }
  },

  
})

function Header() {
    const classes = useStyles();
    const navigate = useNavigate();
    return ( 
    <AppBar position="static" style={{backgroundColor: 'black' }} >
    <Toolbar>
        <div className={classes.leftNav}>
        <Button color="inherit" onClick={()=>navigate('/')}>
            <Typography variant="h4">LBREP</Typography>{" "}
        </Button>
        </div>
        <div>
        <Button color="inherit" onClick={()=>navigate('/listings')}style={{marginRight: '2rem'}}>
            <Typography variant='h6'>Listings</Typography>{" "}
            </Button>
      <Button color="inherit" style={{marginLeft: '2rem'}}>
      <Typography variant='h6'>Agencies</Typography>{" "}
          </Button>
        </div>
        <div className={classes.rightNav}>
        <Button  className={classes.propertyBtn}>
        <Typography>Add Property</Typography>
        </Button>
      <Button  className={classes.loginBtn} onClick={()=>navigate('/login')}>
      <Typography>Login</Typography>
          </Button>
        </div>
      
      
    </Toolbar>
  </AppBar>
    )
}

export default Header
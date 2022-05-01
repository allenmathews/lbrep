import React, {useState} from 'react'
import { Button, Typography, Grid, AppBar, Toolbar } from '@mui/material';
import { makeStyles } from '@mui/styles';
import {Link} from 'react-router-dom';
import CustomCard from './CustomCard';
import CssBaseline from '@mui/material/CssBaseline';
import city from './Assets/city.jpg'

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

  cityImg: {
      width: '100%',
      height: '92vh'
  },

  overlayText: {
    position: 'absolute',
    zIndex: "100",
    top: '100px',
    left: '20px',
    textAlign: 'center',
  },

  homeText:{
    color: 'white',
    fontWeight: 'bolder',

  },

  homeBtn:{
      fontSize: '3.5rem',
      borderRadius: '15px',
      backgroundColor: 'green',
      marginTop: '2rem',
      boxShadow: '3px 3px 3px white',
  }
})

function Home() {
    const [btnColor, setBtnColor] = useState("error");
    const classes = useStyles();
    return (
      <>
      <CssBaseline />
      <AppBar position="static" style={{backgroundColor: 'black' }} >
        <Toolbar>
            <div className={classes.leftNav}>
            <Button color="inherit">
                <Typography variant="h4">LBREP</Typography>{" "}
            </Button>
            </div>
            <div>
            <Button color="inherit" style={{marginRight: '2rem'}}>
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
          <Button  className={classes.loginBtn}>
          <Typography>Login</Typography>
              </Button>
            </div>
          
          
        </Toolbar>
      </AppBar>
      <div style={{position: 'relative'}}>
      <img src={city} className={classes.cityImg} />
      <div className={classes.overlayText}>
          <Typography variant="h1" className={classes.homeText}>FIND YOUR <span style={{color: 'green'}}>NEXT PROPERTY</span> ON THE LBREP WEBSITE</Typography>
          <Button variant="contained" className={classes.homeBtn}>SEE ALL PROPERTIES</Button>
      </div>
      </div>
      
      </>
  );
}


export default Home
import React, {useState} from 'react'
import { Button, Typography, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import {Link} from 'react-router-dom';
import CustomCard from './CustomCard';
import CssBaseline from '@mui/material/CssBaseline';


const useStyles = makeStyles({
    divStyle: {
        width: "100%", border: "2px solid red", padding:"15px"
    },

    btnStyle: {
        backgroundColor: "yellow",
    }
})

function Home() {
    const [btnColor, setBtnColor] = useState("error");
    const classes = useStyles();
    return (
      <>
      <CssBaseline />
      <Grid 
      direction="column"
      justifyContent="space-evenly" alignItems="flex-start" container style={{height: '100vh', backgroundColor: 'grey'}}>


        <Grid item container>
        <Grid item xs={5}>
        <CustomCard />
        </Grid>
        </Grid>
        <Grid item container>
        <Grid item xs={5}>
        <CustomCard />
        </Grid>
        </Grid>

        
        
       
        </Grid>
      </>
  );
}


export default Home
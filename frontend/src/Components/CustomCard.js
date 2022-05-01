import React, {useState} from 'react'
import { Button, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import {Link} from 'react-router-dom';


const useStyles = makeStyles({
    divStyle: {
        width: "100%", border: "2px solid red", padding:"15px"
    },

    btnStyle: {
        backgroundColor: "yellow",
    }
})

function CustomCard() {
    const [btnColor, setBtnColor] = useState("error")
    const classes = useStyles();
    return ( 
        <div className={classes.divStyle}>
        <Typography  variant="h4">
        This is the title
        </Typography>
        <Typography variant="body1">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe culpa ipsam quasi sit consequatur molestias quas ut. Porro vitae, ullam accusamus soluta, suscipit temporibus totam enim dolor nobis corrupti excepturi.
        </Typography>
        <Button 
        onClick={()=> setBtnColor("success")}
        variant="contained"
        size="medium"
        className={classes.btnStyle}
        >
        
        GO
        </Button>
        </div>
    )
}

export default CustomCard
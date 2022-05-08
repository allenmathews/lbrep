import React, {useState} from 'react'

//react leaflet
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';
import {Icon} from 'leaflet'
//MUI
import {Grid, AppBar, Typography, Button, Card, CardHeader, CardMedia, CardContent} from '@mui/material';
import {makeStyles} from "@mui/styles"

//Map icons
import houseIconPng from './Assets/Mapicons/house.png'
import apartmentIconPng from './Assets/Mapicons/apartment.png'
import officeIconPng from './Assets/Mapicons/office.png'

//Assets
import img1 from './Assets/img1.jpg'
import myListings from './Assets/Data/Dummydata';

const useStyles = makeStyles({
  cardStyle: {
    margin: '0.5rem', 
    border: '1px solid black',
  },
  pictureStyle: {
    paddingRight: '1rem', 
    paddingLeft: '1rem', 
    height: '20rem',
    width: '30rem',
    
  }

})

function Listings() {
  const classes = useStyles();
  const houseIcon = new Icon({
    iconUrl: houseIconPng,
    iconSize: [40, 40],
  })
  const apartmentIcon = new Icon({
    iconUrl: apartmentIconPng,
    iconSize: [40, 40],
  })
  const officeIcon = new Icon({
    iconUrl: officeIconPng,
    iconSize: [40, 40],
  })

  const [latitude, setLatitude] =useState(51.505)
  const [longitude, setLongitude] =useState(-0.09)

  
  function GoEast(){
    setLatitude(51.503239260017104)
    setLongitude(0.002996114044557854)
  }
  function GoCenter(){
    setLatitude(51.505)
    setLongitude(-0.09)
  }
  
  function GoNorth(){
    setLatitude(51.53672361867518)
    setLongitude(-0.08917497809899141)
  }

  function GoSouth(){
    setLatitude(51.48226639265579)
    setLongitude(-0.08836028869962749)
  }

    return ( 
      <Grid container>
        <Grid item xs={4}>
          {myListings.map((listing)=>{
            return (
              <Card key={listing.id} className={classes.cardStyle}>
      <CardHeader
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title={listing.title}
      />
      <CardMedia
      className={classes.pictureStyle}
        component="img"
        image={listing.picture1}
        alt={listing.title}
      />
      <CardContent>
        <Typography variant="body2" >
          {listing.description.substring(0,200)}...
        </Typography>
      </CardContent>
      {/* <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions> */}
    </Card>
            )
          })}
        </Grid>
        <Grid item xs={8}>          
        <AppBar position="sticky">
        <div style={{height: '100vh'}}>
       <MapContainer center={[51.505, -0.09]} zoom={14} scrollWheelZoom={true}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      //url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
    />
      {myListings.map((listing)=>{
        function IconDisplay(){
          if(listing.listing_type === 'House'){
            return houseIcon;
          }
          else if(listing.listing_type === 'Apartment'){
            return apartmentIcon;
          } else if(listing.listing_type === 'Office'){
            return officeIcon;
          }
        }
        return (
          <Marker 
          key={listing.id}
          icon={IconDisplay()}
          position={[
            listing.location.coordinates[0],
            listing.location.coordinates[1],
            ]}>
        <Popup>
          <Typography variant="h5">{listing.title}</Typography>
          <img src={listing.picture1} style={{height: '14rem', width: '18rem'}}/>
          <Typography variant='body1'>{listing.description.substring(0, 150)}...</Typography>
          <Button variant="contained" fullWidth>Details</Button>
        </Popup>
          </Marker>
        )
      })}

    {/* <Marker 
    icon={officeIcon} position={[latitude, longitude]}>
      <Popup>
        <Typography variant="h5">A title</Typography>
        <img src={img1} style={{height: '14rem', width: '18rem'}}/>
        <Typography variant='body'>This is some text below the title</Typography>
        <Button variant="contained" fullWidth>A link</Button>
      </Popup>
    </Marker> */}
    </MapContainer>
      </div>
        </AppBar>
        </Grid>
      </Grid>
    )
}

export default Listings
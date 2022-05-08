import React from 'react'

//react leaflet
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';
import {Icon} from 'leaflet'
//MUI
import {Grid, AppBar, Typography, Button} from '@mui/material';

//Map icons
import houseIconPng from './Assets/Mapicons/house.png'
import apartmentIconPng from './Assets/Mapicons/apartment.png'
import officeIconPng from './Assets/Mapicons/office.png'

//Assets
import img1 from './Assets/img1.jpg'

function Listings() {
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
    return ( 
      <Grid container>
        <Grid item xs={4}>
          <Typography variant='h1'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda qui libero optio vero magnam illum natus esse asperiores ipsam, tempora nesciunt commodi enim nobis provident repellendus iure voluptate mollitia! Iste commodi aut quas qui mollitia perferendis, aspernatur soluta cupiditate fugiat saepe recusandae ad magnam officia debitis aliquam quidem cumque, nisi quaerat ipsa voluptatem facilis non ex consectetur autem. Quis blanditiis mollitia magnam repellat? Fugit fuga earum ab explicabo iure? Porro impedit accusamus suscipit debitis dolorum, atque tempore non ducimus repudiandae! Sequi perspiciatis quas facere officiis saepe praesentium aperiam, suscipit aut illum nostrum, vel non accusantium, cupiditate placeat quam ut deserunt.
            </Typography>          
          BLANK SPACE
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
    <Marker 
    icon={officeIcon} position={[51.505, -0.09]}>
      <Popup>
        <Typography variant="h5">A title</Typography>
        <img src={img1} style={{height: '14rem', width: '18rem'}}/>
        <Typography variant='body'>This is some text below the title</Typography>
        <Button variant="contained" fullWidth>A link</Button>
      </Popup>
    </Marker>
    </MapContainer>
      </div>
        </AppBar>
        </Grid>
      </Grid>
    )
}

export default Listings
import React from 'react'

//react leaflet
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';
//MUI
import {Grid, AppBar, Typography} from '@mui/material';

//Map icons
import houseIconPng from './Assets/Mapicons/houseonIcPng'
import apartmentIconPng from './Assets/Mapicons/apartmentIconPng'
import houseIconPng from './Assets/Mapicons/houseIconPng'

function Listings() {
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
    <Marker position={[51.505, -0.09]}>
    {/* <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup> */}
    </Marker>
    </MapContainer>
      </div>
        </AppBar>
        </Grid>
      </Grid>
    )
}

export default Listings
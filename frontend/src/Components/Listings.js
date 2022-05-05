import React from 'react'

//react leaflet
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';
//MUI
import {Grid, AppBar, Typography} from '@mui/material';

function Listings() {
    return ( 
      <Grid container>
        <Grid item xs={4}>
          <Typography variant='h1'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur repellat voluptate laboriosam reprehenderit culpa similique illo autem est assumenda sed. Reprehenderit eos eius corrupti voluptate autem placeat esse dolorem ea optio doloribus, nostrum reiciendis, nemo ullam, eligendi obcaecati vitae tempora. Beatae quisquam, sint eum eaque, necessitatibus quam, facere illum commodi impedit natus tempore ratione debitis rem non cupiditate ea tenetur unde. Voluptates dicta magnam, ab rem eos, maxime neque veritatis similique ut suscipit explicabo voluptatum exercitationem cupiditate possimus nesciunt totam ipsum praesentium aspernatur. Ad iste non ipsam. Explicabo, mollitia iure quaerat, recusandae necessitatibus praesentium cumque, voluptatem excepturi saepe magni tempora.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur repellat voluptate laboriosam reprehenderit culpa similique illo autem est assumenda sed. Reprehenderit eos eius corrupti voluptate autem placeat esse dolorem ea optio doloribus, nostrum reiciendis, nemo ullam, eligendi obcaecati vitae tempora. Beatae quisquam, sint eum eaque, necessitatibus quam, facere illum commodi impedit natus tempore ratione debitis rem non cupiditate ea tenetur unde. Voluptates dicta magnam, ab rem eos, maxime neque veritatis similique ut suscipit explicabo voluptatum exercitationem cupiditate possimus nesciunt totam ipsum praesentium aspernatur. Ad iste non ipsam. Explicabo, mollitia iure quaerat, recusandae necessitatibus praesentium cumque, voluptatem excepturi saepe magni tempora.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur repellat voluptate laboriosam reprehenderit culpa similique illo autem est assumenda sed. Reprehenderit eos eius corrupti voluptate autem placeat esse dolorem ea optio doloribus, nostrum reiciendis, nemo ullam, eligendi obcaecati vitae tempora. Beatae quisquam, sint eum eaque, necessitatibus quam, facere illum commodi impedit natus tempore ratione debitis rem non cupiditate ea tenetur unde. Voluptates dicta magnam, ab rem eos, maxime neque veritatis similique ut suscipit explicabo voluptatum exercitationem cupiditate possimus nesciunt totam ipsum praesentium aspernatur. Ad iste non ipsam. Explicabo, mollitia iure quaerat, recusandae necessitatibus praesentium cumque, voluptatem excepturi saepe magni tempora.
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
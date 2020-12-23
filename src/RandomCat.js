import React from 'react'; 

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { makeStyles } from '@material-ui/core/styles';

import "leaflet/dist/leaflet.css";

const useStyles = makeStyles((theme) => ({
  MapContainer: {
    
    margin:'7%',
    width: '60vw',
    height:'60vh'  
  }, 
}));

export default function RandomCat() {
  const classes = useStyles();
  const position = [-13.52264, -71.96734]
  return ( 
    <MapContainer className={classes.MapContainer} center={position} zoom={13} maxZoom={18} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.  
      </Popup>
    </Marker>
  </MapContainer>
  );
}
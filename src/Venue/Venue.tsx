import * as React from 'react';
import { GoogleMap, InfoWindow, Marker, withGoogleMap, withScriptjs } from 'react-google-maps';
import { View } from '../Basic';

import './venue.css';

const marker = {
  position: {
    lat: 43.7661407,
    lng: 11.272173899999984
  },
  key: 'Radisson Blu Hotel',
  defaultAnimation: 2
};

const infoWindow = {
  content: (
    <div>
      <strong>
        <a href="http://www.hotelmediterraneofirenze.com/" target="blank">
          Grand Hotel Mediterraneo
        </a>
      </strong>
      <div>Lungarno del Tempio, 44</div>
      <div>50121 Firenze</div>
    </div>
  )
};

const Map = withScriptjs(
  withGoogleMap(() => (
    <GoogleMap
      defaultCenter={marker.position}
      defaultZoom={13}
      options={{ scrollwheel: false, draggable: false }}
    >
      <Marker {...marker}>
        <InfoWindow>{infoWindow.content}</InfoWindow>
      </Marker>
    </GoogleMap>
  ))
);

export function Venue() {
  return (
    <View column className="venue">
      <View hAlignContent="center">
        <h3>VENUE</h3>
      </View>
      <View>
        <View grow className="map">
          <Map
            // tslint:disable-next-line:max-line-length
            googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAl-M7eb3lhLRgCqAjSj2q6ieJQXdVeghI"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ width: '100%' }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </View>
        <img className="venue-picture" height="400px" src={require('../assets/mediterraneo.jpg')} />
      </View>
    </View>
  );
}

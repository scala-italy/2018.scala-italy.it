import React from 'react';
import GoogleMapLoader from 'react-google-maps/lib/GoogleMapLoader';
import GoogleMap from 'react-google-maps/lib/GoogleMap';
import InfoWindow from 'react-google-maps/lib/InfoWindow';
import Marker from 'react-google-maps/lib/Marker';
import { props, pure, skinnable } from 'revenge';

import './map.scss';

@pure
@skinnable()
@props({ })
export default class Map extends React.Component {

  getLocals() {
    const marker = {
      position: {
        lat: 45.432457,
        lng: 12.3142232
      },
      key: 'Santa Marta',
      defaultAnimation: 2
    };

    const infoWindow = {
      content: (
        <div>
          <div>Università IUAV di Venezia IUAV</div>
          <strong>Ex Cotonificio Veneziano Santa Marta</strong>
          <div>Dorsoduro 2196</div>
          <div>30123 Venezia</div>
        </div>
      )
      // address: 'Dorsoduro 2196\n30123 Venezia'
    };

    return { marker, infoWindow };
  }

  template({ marker, infoWindow }) {
    return (
      <GoogleMapLoader
        containerElement={<div className='map' />}
        googleMapElement={(
          <GoogleMap
            defaultCenter={marker.position}
            defaultZoom={14}
            options={{ scrollwheel: false }}
          >
            <Marker {...marker}>
              <InfoWindow>
                {infoWindow.content}
              </InfoWindow>
            </Marker>
          </GoogleMap>
        )}
      />
    );
  }

}

import React from 'react'
import GoogleMap from 'google-map-react'

const apiKey = 'AIzaSyCU2AEu_YCQAgvOWHHDvshTnAZMKLqkxQw'

const props = {
  center: {lat: -34.921512, lng: -57.954216},
  zoom: 15
}

const style = {
  position: 'absolute',
  height: '100%',
  width: '100%',
  zIndex: 1
}

const Map = () => (
  <the-map style={style}>
    <GoogleMap
      bootstrapURLKeys={{key: apiKey}}
      defaultCenter={props.center}
      defaultZoom={props.zoom}
      onGoogleApiLoaded={({map, maps}) => console.log(map, maps)}
         />
  </the-map>
)

export default Map

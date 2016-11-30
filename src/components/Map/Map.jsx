import React from 'react'
import GoogleMap from 'google-map-react'
import ContextMenu from './ContextMenu'

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

// onGoogleApiLoaded={({map, maps}) => console.log(map, maps)}
/*
*/

class Map extends React.Component {

  constructor(props){
    super(props)
    this.state = {x: -1000, y: -1000, open : false }
  }

  onLoaded = ({map, maps}) => {
    maps.event.addListener(map, "rightclick", (event) => {
      event.stop()
      this.setState({
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
        x: event.pixel.x,
        y: event.pixel.y,
        open: true
      })
    })
  }

  onOrigin = () => {

  }

  onDestination = () => {

  }

  handleRequestClose = () => this.setState({ open : false })

  render = () => (
      <the-map style={style}>
        <GoogleMap
            bootstrapURLKeys={{key: apiKey}}
            defaultCenter={props.center}
            defaultZoom={props.zoom}
            onGoogleApiLoaded={this.onLoaded}
        />
        <ContextMenu
            x={this.state.x}
            y={this.state.y}
            open={this.state.open}
            handleRequestClose={this.handleRequestClose}
            onDestination={this.onDestination}
            onOrigin={this.onOrigin}
        />
      </the-map>
  )
}
export default Map

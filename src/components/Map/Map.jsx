import React from 'react'
import { connect } from 'react-redux'
import GoogleMap from 'google-map-react'
import PlaceIcon from 'material-ui/svg-icons/maps/place'
import { blue300, blue600 } from 'material-ui/styles/colors'
import { getMarkers } from '../../redux/getters'
import ContextMenu from './ContextMenu'
import Marker from './Marker'

const apiKey = 'AIzaSyCU2AEu_YCQAgvOWHHDvshTnAZMKLqkxQw'

const props = {
  center: {lat: -34.921512, lng: -57.954216},
  zoom: 14
}

const style = {
  position: 'absolute',
  height: '100%',
  width: '100%',
  zIndex: 1
}

class Map extends React.Component {

  constructor (props) {
    super(props)
    this.state = {x: -1000, y: -1000, open: false}
  }

  onLoaded = ({map, maps}) => {
    maps.event.addListener(map, 'rightclick', (event) => {
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

  handleRequestClose = () => this.setState({open: false})

  renderOriginMarker = (markers) => {
    if (this.props.originMarker) {
      markers.push(
        <Marker
          key='originMarker'
          color={blue300}
          lat={this.props.originMarker.lat}
          lng={this.props.originMarker.lng}
          Icon={PlaceIcon} />
            )
    }
  }

  renderDestinationMarker = (markers) => {
    if (this.props.destinationMarker) {
      markers.push(
        <Marker
          key='destinationMarker'
          color={blue600}
          lat={this.props.destinationMarker.lat}
          lng={this.props.destinationMarker.lng}
          Icon={PlaceIcon} />
            )
    }
  }

  renderMarkers = () => {
    let markers = []
    this.renderOriginMarker(markers)
    this.renderDestinationMarker(markers)
    return markers
  }

  render = () => (
    <the-map style={style}>
      <GoogleMap
        yesIWantToUseGoogleMapApiInternals
        bootstrapURLKeys={{key: apiKey}}
        defaultCenter={props.center}
        defaultZoom={props.zoom}
        onGoogleApiLoaded={this.onLoaded}>
        { this.renderMarkers() }
      </GoogleMap>
      <ContextMenu
        x={this.state.x}
        y={this.state.y}
        lat={this.state.lat}
        lng={this.state.lng}
        open={this.state.open}
        handleRequestClose={this.handleRequestClose}
            />
    </the-map>
    )
}

export default connect(getMarkers)(Map)

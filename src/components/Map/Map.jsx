import React from 'react'
import {connect} from 'react-redux'
import {
  Map,
  Marker,
  Circle,
  FeatureGroup,
  LayerGroup,
  LayersControl,
  Popup,
  GeoJSON,
  TileLayer,
  ZoomControl
} from 'react-leaflet'
const {BaseLayer, Overlay} = LayersControl
// import GoogleMap from 'google-map-react'
// import PlaceIcon from 'material-ui/svg-icons/maps/place'
// import {blue300, blue600} from 'material-ui/styles/colors'

import {getMarkers, getHoverRoute, getSelectedRoute} from '../../redux/getters'
import {setLocationAndNext} from '../../redux/actions'

// import ContextMenu from './ContextMenu'
// import Marker from './Marker'
import './Map.css'


const props = {
  center: {lat: -34.921512, lng: -57.954216},
  zoom: 14
}

const style = {
  position: 'absolute',
  height: '100%',
  width: '100%',
  zIndex: 1,
}


class TheMap extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      // x: -1000,
      // y: -1000,
      // open: false,
      lat: 51.505,
      lng: -0.09,
      zoom: 13
    }
  }

  // onLoaded = ({map, maps}) => {
  //   maps.event.addListener(map, 'rightclick', (event) => {
  //     event.stop()
  //     this.setState({
  //       lat: event.latLng.lat(),
  //       lng: event.latLng.lng(),
  //       x: event.pixel.x,
  //       y: event.pixel.y,
  //       open: true
  //     })
  //   }, map.data.addGeoJson(mydata2))
  // }

  // handleRequestClose = () => this.setState({open: false})

  // renderOriginMarker = (markers) => {
  //   if (this.props.originMarker) {
  //     markers.push(
  //       <Marker
  //         key='originMarker'
  //         color={blue300}
  //         lat={this.props.originMarker.lat}
  //         lng={this.props.originMarker.lng}
  //         Icon={PlaceIcon}/>
  //     )
  //   }
  // }
  //
  // renderDestinationMarker = (markers) => {
  //   if (this.props.destinationMarker) {
  //     markers.push(
  //       <Marker
  //         key='destinationMarker'
  //         color={blue600}
  //         lat={this.props.destinationMarker.lat}
  //         lng={this.props.destinationMarker.lng}
  //         Icon={PlaceIcon}/>
  //     )
  //   }
  // }

  // renderMarkers = () => {
  //   let markers = []
  //   this.renderOriginMarker(markers)
  //   this.renderDestinationMarker(markers)
  //   return markers
  // }

  renderOsmMarkers = () => {
    let markers = []
    if (this.props.originMarker) {
      let originLocation = {lat: parseFloat(this.props.originMarker.lat), lng: parseFloat(this.props.originMarker.lng)}
      markers.push([
          <Marker
            draggable
            ref='originMarker'
            position={originLocation}
            onDragend={() => this.props.setLocationAndNext(this.refs.originMarker.leafletElement.getLatLng(), 'origin')}
          />,
          < Circle center={originLocation} fillColor='blue' radius={200}/>
        ]
      )
    }
    if (this.props.destinationMarker) {
      let destinationLocation = {
        lat: parseFloat(this.props.destinationMarker.lat),
        lng: parseFloat(this.props.destinationMarker.lng)
      }
      markers.push([
          <Marker
            draggable
            ref='destinationMarker'
            position={destinationLocation}
            onDragend={() => this.props.setLocationAndNext(this.refs.destinationMarker.leafletElement.getLatLng(), 'destination')}
          />,
          <Circle center={destinationLocation} fillColor='blue' radius={200}/>
        ]
      )
    }
    return markers
  }
  // <GoogleMap
  // yesIWantToUseGoogleMapApiInternals
  // bootstrapURLKeys={{key: apiKey}}
  // defaultCenter={props.center}
  // defaultZoom={props.zoom}
  // onGoogleApiLoaded={this.onLoaded}>
  // { this.renderMarkers() }
  // </GoogleMap>

// <ContextMenu
// x={this.state.x}
// y={this.state.y}
// lat={this.state.lat}
// lng={this.state.lng}
// open={this.state.open}
// handleRequestClose={this.handleRequestClose}
// />
  renderRoutes = () => {
    console.log(this.props.selectedRoute)
    if (this.props.selectedRoute && this.props.selectedRoute.geojson) {
      return (
        <GeoJSON key={this.props.selectedRoute.pid} data={JSON.parse(this.props.selectedRoute.geojson)}/>
      )
    }
  }

  render = () => (
    <the-map style={style}>

      <Map
        center={props.center}
        zoom={props.zoom}
        zoomControl={false}
        ref="map"
        attributionControl={false}
        onClick={(e) => this.props.setLocationAndNext(e.latlng)}
      >
        {this.renderOsmMarkers()}
        <ZoomControl position='topright'/>
        <LayersControl position='bottomright'>
          <BaseLayer checked name='OpenStreetMap.Mapnik'>
            <TileLayer
              url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
            />
          </BaseLayer>
          <BaseLayer name='OpenStreetMap.BlackAndWhite'>
            <TileLayer
              url='http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png'
            />
          </BaseLayer>
          <Overlay name='Marker with popup'>
            <Marker position={props.center}>
              <Popup>
                <span>A pretty CSS3 popup. <br /> Easily customizable.</span>
              </Popup>
            </Marker>
          </Overlay>
          <Overlay name='Layer group with circles'>
            <LayerGroup>
              <Circle center={props.center} fillColor='blue' radius={200}/>
              <Circle center={props.center} fillColor='red' radius={100} stroke={false}/>
              <LayerGroup>
                <Circle center={props.center} color='green' fillColor='green' radius={100}/>
              </LayerGroup>
            </LayerGroup>
          </Overlay>
          <Overlay name='Feature group'>
            <FeatureGroup color='purple'>
              <Popup>
                <span>Popup in FeatureGroup</span>
              </Popup>
              <Circle center={props.center} radius={200}/>
            </FeatureGroup>
          </Overlay>
        </LayersControl>

        { this.renderRoutes() }

      </Map>
    </the-map>
  )
}

const mapDispatchToProps = {
  setLocationAndNext
}
const mapStateToProps = (state) => ({
  ...getMarkers(state),
  ...getSelectedRoute(state),
  ...getHoverRoute(state)
})
export default connect(mapStateToProps, mapDispatchToProps)(TheMap)
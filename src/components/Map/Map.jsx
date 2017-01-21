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

import {getMarkers, getHoverRoute, getSelectedRoute} from '../../redux/getters'
import {setLocationAndNext} from '../../redux/actions'

import './Map.css'

class TheMap extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      lat: 51.505,
      lng: -0.09,
      zoom: 14,
      center: {lat: -34.921512, lng: -57.954216}
    }
  }

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
        < Circle center={originLocation} fillColor='blue' radius={200} />
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
        <Circle center={destinationLocation} fillColor='blue' radius={200} />
      ]
      )
    }
    return markers
  }

  renderSelectedRoute = () => {
    if (this.props.selectedRoute && this.props.selectedRoute.geojson) {
      let selectedStyle = {color: '#4285F4', weight: 7, opacity: '1'}
      return (
        <GeoJSON key={'s' + this.props.selectedRoute.pid} data={JSON.parse(this.props.selectedRoute.geojson)} style={selectedStyle} />
      )
    }
  }

  renderHoverRoute = () => {
    if (this.props.hoverRoute && this.props.hoverRoute.geojson) {
      let hoverStyle = {color: 'gray', weight: 4, opacity: '0.8'}
      return (
        <GeoJSON key={'h' + this.props.hoverRoute.pid} data={JSON.parse(this.props.hoverRoute.geojson)} style={hoverStyle} />
      )
    }
  }

  render = () => (
    <the-map>

      <Map
        center={this.state.center}
        zoom={this.state.zoom}
        zoomControl={false}
        ref='map'
        attributionControl={false}
        onClick={(e) => this.props.setLocationAndNext(e.latlng)}
      >
        {this.renderOsmMarkers()}
        <ZoomControl position='topright' />
        <LayersControl position='bottomright'>
          <BaseLayer checked name='OpenStreetMap.Mapnik'>
            <TileLayer
              url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
          </BaseLayer>
          <BaseLayer name='OpenStreetMap.BlackAndWhite'>
            <TileLayer
              url='http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png'
            />
          </BaseLayer>
          <Overlay name='Marker with popup'>
            <Marker position={this.state.center}>
              <Popup>
                <span>A pretty CSS3 popup. <br /> Easily customizable.</span>
              </Popup>
            </Marker>
          </Overlay>
          <Overlay name='Layer group with circles'>
            <LayerGroup>
              <Circle center={this.state.center} fillColor='blue' radius={200} />
              <Circle center={this.state.center} fillColor='red' radius={100} stroke={false} />
              <LayerGroup>
                <Circle center={this.state.center} color='green' fillColor='green' radius={100} />
              </LayerGroup>
            </LayerGroup>
          </Overlay>
          <Overlay name='Feature group'>
            <FeatureGroup color='purple'>
              <Popup>
                <span>Popup in FeatureGroup</span>
              </Popup>
              <Circle center={this.state.center} radius={200} />
            </FeatureGroup>
          </Overlay>
        </LayersControl>

        { this.renderSelectedRoute() }
        { this.renderHoverRoute() }
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

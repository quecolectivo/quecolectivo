import { createAction } from 'redux-actions'
import * as mutations from './mutationsTypes'
import axios from 'axios'
import { push } from 'react-router-redux'
//
// mutations
//

const updateOriginValue = createAction(mutations.UPDATE_ORIGIN_VALUE)
const updateDestinationValue = createAction(mutations.UPDATE_DESTINATION_VALUE)
const submitDirectionRequest = createAction(mutations.SUBMIT_DIRECTION_REQUEST, event => event.target.id)
const dataRecieved = createAction(mutations.DATA_RECIEVED)
const updateOriginMarker = createAction(mutations.UPDATE_ORIGIN_MARKER)
const updateDestinationMarker = createAction(mutations.UPDATE_DESTINATION_MARKER)
const setActiveTextField = createAction(mutations.SET_ACTIVE_TEXT_FIELD)
const updateRouteData = createAction(mutations.UPDATE_ROUTE_DATA)
export const setSelectedRoute = createAction(mutations.SET_SELECTED_ROUTE)
export const setHoverRoute = createAction(mutations.SET_HOVER_ROUTE)
//
// actions
//

// update text value wrapper to abstract which field is currently being updated
function updateTextValue (value, target = null) {
  return (dispatch, getState) => {
    if (!target) { target = getState().global.activeTextField }
    if (target === 'origin') dispatch(updateOriginValue(value))
    else if (target === 'destination') dispatch(updateDestinationValue(value))
  }
}

// update marker wrapper to abstract which marker is currently being updated
export function updateMarker (value, target = null) {
  return (dispatch, getState) => {
    if (!target) { target = getState().global.activeTextField }
    if (target === 'origin') dispatch(updateOriginMarker(value))
    else if (target === 'destination') dispatch(updateDestinationMarker(value))
  }
}
// if key is Enter, makes Ajax call, and updates the store
function handleRequest (event) {
  return (dispatch, getState) => {
    if (event.keyCode === 13) {
      event.target.blur()
      dispatch(submitDirectionRequest(event))
      submitRequest(event.target.value).then(data => {
        dispatch(dataRecieved(data.data))
      })
    }
  }
}
// updates the markers and text values when user clicks on a result tile
function resultItemClick (location, address = '') {
  return (dispatch, getState) => {
    dispatch(updateTextValue(address))
    dispatch(updateMarker(location))
  }
}

function getLocationFromBrowser () {
  return new Promise((resolve, reject) => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude.toString()
        let lng = position.coords.longitude.toString()
        resolve({lat, lng})
      },
      response => {
        console.log('error', response)
        reject()
      },
        {
          enableHighAccuracy: true
        })
    } else {
      window.alert('geolocation not found')
      reject()
    }
  }
  )
}

function searchRoutes () {
  return (dispatch, getState) => {
    const {origin, destination} = getState().global.markers
    const apiURL = `http://ec2-52-67-239-128.sa-east-1.compute.amazonaws.com/api/search/${origin.lat},${origin.lng}/${destination.lat},${destination.lng}/200`
    axios.get(apiURL)
      .then(results => {
        dispatch(updateRouteData(results))
        dispatch(push('/dir/results'))
      })
  }
}

function nextAction () {
  return (dispatch, getState) => {
    const { activeTextField } = getState().global
    if (activeTextField === 'origin') {
      dispatch(setActiveTextField('destination'))
    } else if (activeTextField === 'destination') {
      dispatch(searchRoutes())
    }
  }
}
export function setLocation (latlng = null, target = null) {
  return async (dispatch, getState) => {
    if (!latlng) { latlng = await getLocationFromBrowser() }
    dispatch(updateMarker(latlng, target))
    const geocodingData = await reverseGeocoding(latlng)
    const formattedAddress = geocodingData.data.results[0].formatted_address
    dispatch(updateTextValue(formattedAddress, target))
    dispatch(nextAction())
  }
}
export function setLocationAndNext (latlng = null, target = null) {
  return (dispatch, getState) => {
    dispatch(setLocation(latlng, target))
    // dispatch(nextAction())
  }
}
function reverseGeocoding ({lat, lng}) {
  const apiKey = 'AIzaSyCU2AEu_YCQAgvOWHHDvshTnAZMKLqkxQw'
  const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${apiKey}`
  return axios.get(apiUrl)
}

let join = (obj, assingner = '=', separador = '&') => Object.keys(obj)
        .map((key) => key + assingner + obj[key])
        .join(separador)
function submitRequest (value) {
  let components = {
    administrative_area: 'La Plata',
    country: 'AR'
  }
  let params = {
    address: value,
    components: join(components, ':', '|'),
    key: 'AIzaSyCU2AEu_YCQAgvOWHHDvshTnAZMKLqkxQw'
  }
  let apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?${join(params)}`

  return axios.get(apiUrl)
}

// export actions to be used as component callbacks
export const directionActions = {
  updateTextValue,
  handleRequest,
  setActiveTextField
}
export const suggestionActions = {
  resultItemClick
}

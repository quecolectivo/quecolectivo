import { createAction } from 'redux-actions'
import * as mutations from './mutationsTypes'
import axios from 'axios'

// mutations
const updateOriginValue = createAction(mutations.UPDATE_ORIGIN_VALUE)
const updateDestinationValue = createAction(mutations.UPDATE_DESTINATION_VALUE)
const submitDirectionRequest = createAction(mutations.SUBMIT_DIRECTION_REQUEST, event => event.target.id)
const dataRecieved = createAction(mutations.DATA_RECIEVED)
const updateOriginMarker = createAction(mutations.UPDATE_ORIGIN_MARKER)
const updateDestinationMarker = createAction(mutations.UPDATE_DESTINATION_MARKER)

// actions
function handleRequest (event) {
  return (dispatch, getState) => {
    if (event.keyCode === 13) {
      dispatch(submitDirectionRequest(event))
      submitRequest(event.target.value).then(data => {
        dispatch(dataRecieved(data.data))
      })
    }
  }
}

function resultItemClick (location, address = '') {
  return (dispatch, getState) => {
    const requestSubmitedFrom = getState().global.requestSubmitedFrom
    if (requestSubmitedFrom === 'origin') {
      dispatch(updateOriginValue(address))
      dispatch(updateOriginMarker(location))
    } else if (requestSubmitedFrom === 'destination') {
      dispatch(updateDestinationValue(address))
      dispatch(updateDestinationMarker(location))
    }
  }
}

export function getLocationFromBrowser () {
  return (dispatch, getState) => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude.toString()
        let long = position.coords.longitude.toString()
        console.log(lat,long)
      }, response => console.log('error', response))
    } else {
      window.alert('geolocation not found')
    }
  }
}

let join = (obj, assingner = '=', separador = '&') =>
    Object
        .keys(obj)
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

export const directionActions = {
  updateOriginValue,
  updateDestinationValue,
  handleRequest,
}

export const suggestionActions = {
  resultItemClick
}
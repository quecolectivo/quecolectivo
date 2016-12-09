import { createAction } from 'redux-actions'
import * as mutations from './mutationsTypes'
import axios from 'axios'

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

//
// actions
//

// update text value wrapper to abstract which field is currently being updated
function updateTextValue (value, target = null) {
  return (dispatch, getState) => {
    if (!target) { target = getState().global.requestSubmittedFrom }
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

export function getLocationFromBrowser () {
  return (dispatch, getState) => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude.toString()
        let lng = position.coords.longitude.toString()
        dispatch(updateMarker({lat, lng}))
      }, response => console.log('error', response))
    } else {
      window.alert('geolocation not found')
    }
  }
}


function submitRequest (value) {
  let join = (obj, assingner = '=', separador = '&') => Object.keys(obj)
        .map((key) => key + assingner + obj[key])
        .join(separador)
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

import { createAction } from 'redux-actions'
import * as mutations from './mutationsTypes'
import axios from 'axios'

const updateOriginValue = createAction(mutations.UPDATE_ORIGIN_VALUE)
const updateDestinationValue = createAction(mutations.UPDATE_DESTINATION_VALUE)
const submitDirectionRequest = createAction(mutations.SUBMIT_DIRECTION_REQUEST, event => event.target.id)
const dataRecieved = createAction(mutations.DATA_RECIEVED)

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

function submitRequest (value) {
  let apikey = 'AIzaSyCU2AEu_YCQAgvOWHHDvshTnAZMKLqkxQw'
  let origin = 'La Plata, Argentina '
  let apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${origin + value}&key=${apikey}`
  console.log('here')
  return axios.get(apiUrl)
}

export const directionActions = {
  updateOriginValue,
  updateDestinationValue,
  handleRequest
}

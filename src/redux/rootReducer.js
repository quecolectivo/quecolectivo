import {combineReducers} from 'redux'
import * as mutations from './mutationsTypes'
import {routerReducer} from 'react-router-redux'

const defaultState = {
  originValue: '',
  destinationValue: '',
  markers: {
  },
  searchData: {
    results: []
  },
  requestSubmittedFrom: 'origin'
}

const tasks = ({
  [mutations.UPDATE_ORIGIN_VALUE] (state, value) {
    return {...state, originValue: value}
  },
  [mutations.UPDATE_DESTINATION_VALUE] (state, value) {
    return {...state, destinationValue: value}
  },
  [mutations.SUBMIT_DIRECTION_REQUEST] (state, id) {
    return {...state, requestSubmittedFrom: id}
  },
  [mutations.DATA_RECIEVED] (state, data) {
    return {...state, searchData: data}
  },
  [mutations.UPDATE_ORIGIN_MARKER] (state, location) {
    let newState = { ...state }
    newState.markers.origin = location
    return newState
  },
  [mutations.UPDATE_DESTINATION_MARKER] (state, location) {
    let newState = { ...state }
    newState.markers.destination = location
    return newState
  },
  [mutations.SET_ACTIVE_TEXT_FIELD] (state, textField) {
    return {
      ...state,
      activeTextField: textField}
  }
})

const globalReducer = (state = defaultState, action) => tasks.hasOwnProperty(action.type) ? tasks[action.type](state, action.payload, action) : state

const rootReducer = combineReducers({
  global: globalReducer,
  routing: routerReducer
})

export default rootReducer

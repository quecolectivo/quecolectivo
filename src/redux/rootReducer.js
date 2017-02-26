import {combineReducers} from 'redux'
import * as mutations from './mutationsTypes'
import {routerReducer} from 'react-router-redux'

import defaultState from './defaultState'

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
    let newState = {...state}
    newState.markers.origin = location
    return newState
  },
  [mutations.UPDATE_DESTINATION_MARKER] (state, location) {
    let newState = {...state}
    newState.markers.destination = location
    return newState
  },
  [mutations.SET_ACTIVE_TEXT_FIELD] (state, textField) {
    return {
      ...state,
      activeTextField: textField
    }
  },
  [mutations.UPDATE_ROUTE_DATA] (state, data) {
    return {
      ...state,
      routeData: data
    }
  },
  [mutations.SET_SELECTED_ROUTE] (state, route) {
    return {
      ...state,
      selectedRoute: route
    }
  },
  [mutations.SET_HOVER_ROUTE] (state, route) {
    return {
      ...state,
      hoverRoute: route
    }
  }
})

const globalReducer = (state = defaultState, action) => tasks.hasOwnProperty(action.type) ? tasks[action.type](state, action.payload, action) : state

const rootReducer = combineReducers({
  global: globalReducer,
  routing: routerReducer
})

export default rootReducer

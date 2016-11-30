import { combineReducers } from 'redux'
import * as mutations from './mutationsTypes'
import {routerReducer} from 'react-router-redux'

const defaultState = {
  originValue: '',
  destinationValue: ''
}

const tasks = ({
  [ mutations.UPDATE_ORIGIN_VALUE ] (state, value) {
    return { ...state, originValue: value }
  },
  [ mutations.UPDATE_DESTINATION_VALUE ] (state, value) {
    return { ...state, destinationValue: value }
  },
  [ mutations.SUBMIT_DIRECTION_REQUEST] (state, id) {
    return { ...state, requestSubmitedFrom: id }
  },
  [ mutations.DATA_RECIEVED] (state, data) {
    return { ...state, searchData: data }
  }
})

const globalReducer = (state = defaultState, action) => tasks[action.type] ? tasks[action.type](state, action.payload, action) : state

const rootReducer = combineReducers({
  global: globalReducer,
  routing: routerReducer
})

export default rootReducer

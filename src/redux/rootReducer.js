import { combineReducers } from 'redux'
import * as mutations from './mutationsTypes'
import {routerReducer} from 'react-router-redux'

const defaultState = {
  value_origin: "",
  value_destination: ""
}

const tasks = ({
  [ mutations.UPDATE_ORIGIN_VALUE ] (state, value) {
    return { ...state, value_origin: value }
  },
  [ mutations.UPDATE_DESTINATION_VALUE ] (state, value) {
    return { ...state, value_destination: value }
  }
})

const globalReducer = (state = defaultState, action) => tasks[action.type] ? tasks[action.type](state, action.payload, action) : state

const rootReducer = combineReducers({
  globalReducer,
  routing: routerReducer
})

export default rootReducer

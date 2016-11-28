import { combineReducers } from 'redux'
import * as mutations from './mutationsTypes'
import {routerReducer} from 'react-router-redux'

const defaultState = {}

const tasks = ({
  [ mutations.HOLA ] (state) {
    return state
  }
})

const globalReducer = (state = defaultState, action) => tasks[action.type] ? tasks[action.type](state, action.payload, action) : state

const rootReducer = combineReducers({
  globalReducer,
  routing: routerReducer
})

export default rootReducer

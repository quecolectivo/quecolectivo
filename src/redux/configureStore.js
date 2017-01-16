import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './rootReducer'
import { routerMiddleware as rm } from 'react-router-redux'
import { hashHistory } from 'react-router'

const routerMiddleware = rm(hashHistory)
const store = createStore(rootReducer,
    window.devToolsExtension ? window.devToolsExtension() : f => f,
    applyMiddleware(thunkMiddleware, routerMiddleware)
)

export default store

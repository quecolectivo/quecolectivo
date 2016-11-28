import React from 'react'
import ReactDOM from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { Provider } from 'react-redux'
import { Router, hashHistory } from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'
import store from './redux/'
import routes from './router/routes'

import './index.css'

injectTapEventPlugin()
const history = syncHistoryWithStore(hashHistory, store)

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('/service-worker.js')
  })
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('root')
)

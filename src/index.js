import React from 'react'
import ReactDOM from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { Provider } from 'react-redux'
import { Router, hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import store from './redux/configureStore'
import routes from './router/routes'

import './index.css'

injectTapEventPlugin()
const history = syncHistoryWithStore(hashHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('root')
)

if (process.env.NODE_ENV === 'production') {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./service-worker.js', {
      scope: './'
    })
      .then(function (registration) {
        registration.onupdatefound = function () {
          if (navigator.serviceWorker.controller) {
            var installingWorker = registration.installing
            installingWorker.onstatechange = function () {
              switch (installingWorker.state) {
                case 'installed':
                  break
                case 'redundant':
                  throw new Error('The installing ' +
                                  'service worker became redundant.')
                default:
                  // Ignore
              }
            }
          }
        }
      }).catch(function (e) {
        console.error('Error during service worker registration:', e)
      })
  } else {
    console.log('service worker is not supported')
  }
}

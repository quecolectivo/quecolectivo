import React from 'react'
import {Route, IndexRoute} from 'react-router'
import App from '../components/App'
import Directions from '../components/Directions'
import Suggestions from '../components/Suggestions'
import NotFound from '../components/NotFound'

const routes = (
  <Route path='/' component={App}>
    <IndexRoute component={Directions} />
    <Route path='dir' component={Directions}>
      <IndexRoute component={Suggestions} />
    </Route>
    <Route path='*' component={NotFound} />
  </Route>
)

export default routes

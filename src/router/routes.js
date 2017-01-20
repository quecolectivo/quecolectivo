import React from 'react'
import {Route, IndexRoute} from 'react-router'
import App from '../components/App'
import Directions from '../components/Directions/Directions'
import Suggestions from '../components/Suggestions/Suggestions'
import NotFound from '../components/NotFound/NotFound'
import Results from '../components/Results/Results'

const routes = (
  <Route path='/' component={App}>
    <IndexRoute component={Directions} />
    <Route path='dir' component={Directions}>
      <IndexRoute component={Suggestions} />
      <Route path='results' component={Results} />
    </Route>
    <Route path='*' component={NotFound} />
  </Route>
)

export default routes

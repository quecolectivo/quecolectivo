import React from 'react'
import LocationInput from './LocationInput'
import './Directions.css'
import Paper from 'material-ui/Paper';

const Directions = ({ children }) => (
  <directions>
    <LocationInput />
    <content className="pulldown">
      <Paper zDepth={1}>
      { children }
      </Paper>
    </content>
  </directions>
)

export default Directions

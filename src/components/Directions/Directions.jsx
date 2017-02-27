import React from 'react'
import LocationInput from './LocationInput'
import './Directions.css'

const Directions = ({ children }) => (
  <directions>
    <LocationInput />
    <content className="pulldown">
      { children }
    </content>
  </directions>
)

export default Directions

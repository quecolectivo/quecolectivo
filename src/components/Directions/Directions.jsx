import React from 'react'
import LocationInput from './LocationInput'
import './Directions.css'

const Directions = ({ children }) => (
  <directions>
    <LocationInput />
    <content>
      { children }
    </content>
  </directions>
)

export default Directions

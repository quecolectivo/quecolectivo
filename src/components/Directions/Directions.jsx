import React from 'react'
import LocationInput from './LocationInput'
import './Directions.css'

const Directions = ({ children }) => (
  <directions>
    <LocationInput />
    { children }
  </directions>
)

export default Directions

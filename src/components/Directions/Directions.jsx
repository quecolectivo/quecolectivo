import React from 'react'
import LocationInput from './LocationInput'

const styles = {
  directions: {
    display: 'flex',
    flexDirection: 'column',
    flex: '1 1 auto'
  }
}
const Directions = ({ children }) => (
  <directions style={styles.directions}>
    <LocationInput />
    { children }
  </directions>
)

export default Directions

import React from 'react'
import {ListItem} from 'material-ui/List'
import AccessIcon from 'material-ui/svg-icons/device/access-time'
import {grey500} from 'material-ui/styles/colors'

const filterByType = (result, type) =>
    result.address_components.find((component) => component.types.includes(type))

const getPrimaryText = result => {
  return `${filterByType(result, 'route').long_name} n ${filterByType(result, 'street_number').long_name}`
}
const getSecondaryText = result => {
  return `${filterByType(result, 'locality').long_name}, ${filterByType(result, 'administrative_area_level_1').long_name}`
}

const LocationResult = ({result}) => (
  <ListItem
    primaryText={getPrimaryText(result)}
    secondaryText={getSecondaryText(result)}
    leftIcon={<AccessIcon color={grey500} />}
        />
)

export default LocationResult

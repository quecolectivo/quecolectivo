import React from 'react'
import {ListItem} from 'material-ui/List'
import AccessIcon from 'material-ui/svg-icons/device/access-time'
import {grey500} from 'material-ui/styles/colors'

const cell = (result, type) =>
    result.address_components.find((component) => component.types.includes(type))

const LocationResult = ({result}) => (
  <ListItem
    primaryText={cell(result, 'route').long_name + ' ' + cell(result, 'street_number').long_name}
    secondaryText={cell(result, 'locality').long_name + ', ' + cell(result, 'administrative_area_level_1').long_name}
    leftIcon={<AccessIcon color={grey500} />}
        />
)

export default LocationResult

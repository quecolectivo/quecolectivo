import React from 'react'
import { connect } from 'react-redux'
import {ListItem} from 'material-ui/List'
import AccessIcon from 'material-ui/svg-icons/device/access-time'
import {grey500} from 'material-ui/styles/colors'
import { suggestionActions } from '../../redux/actions'

const filterByType = (result, type) =>
    result.address_components.find((component) => component.types.includes(type))

const mapResultToComponent = (result) => ({
  name: filterByType(result, 'point_of_interest') || filterByType(result, 'establishment'),
  street: {
    route: filterByType(result, 'route'),
    number: filterByType(result, 'street_number')
  },
  locality: filterByType(result, 'locality'),
  administrative: {
    level1: filterByType(result, 'administrative_area_level_1'),
    level2: filterByType(result, 'administrative_area_level_2')
  },
  country: filterByType(result, 'country')
})

const joinComponents = (components, separador = ', ') =>
    components
        .filter(component => component !== undefined)
        .map(component => component.long_name)
        .join(separador)

const getRepresentation = (result) => {
  let primaryText, secondaryText

  let component = mapResultToComponent(result)
  if (component.name) {
    primaryText = joinComponents([component.name], ' ')
    secondaryText = joinComponents([component.street.route, component.locality, component.administrative.level1])
  } else if (component.street.route) {
    primaryText = joinComponents([component.street.route, component.street.number], ' ')
    secondaryText = joinComponents([component.locality, component.administrative.level1])
  } else {
    primaryText = joinComponents([component.locality], ' ')
    secondaryText = joinComponents([component.administrative.level2, component.administrative.level1, component.country])
  }

  return ({
    primaryText,
    secondaryText
  })
}

const LocationResult = ({ result, resultItemClick }) => {
  let representation = getRepresentation(result)
  return (
    <ListItem
      onTouchTap={() => resultItemClick(result.geometry.location, result.formatted_address)}
      primaryText={representation.primaryText}
      secondaryText={representation.secondaryText}
      leftIcon={<AccessIcon color={grey500} />}
        />
  )
}

export default connect(null, suggestionActions)(LocationResult)

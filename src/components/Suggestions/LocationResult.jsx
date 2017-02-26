import React from 'react'
import {connect} from 'react-redux'
import {ListItem} from 'material-ui/List'
import AccessIcon from 'material-ui/svg-icons/device/access-time'
import {grey500} from 'material-ui/styles/colors'
import {suggestionActions} from '../../redux/actions'

const findByType = (result, type) =>
    result.address_components.find((component) => component.types.includes(type))

const filterByType = (result, type) =>
    result.address_components.filter((component) => component.types.includes(type))

const mapResultToComponent = (result) => ({
  name: findByType(result, 'point_of_interest') || findByType(result, 'establishment') || findByType(result, 'premise'),
  street: {
    route: findByType(result, 'route'),
    routes: filterByType(result, 'route'),
    number: findByType(result, 'street_number')
  },
  locality: findByType(result, 'locality'),
  administrative: {
    level1: findByType(result, 'administrative_area_level_1'),
    level2: findByType(result, 'administrative_area_level_2')
  },
  country: findByType(result, 'country')
})

const joinComponents = (components, separador = ', ') =>
    components
        .filter(component => component !== undefined)
        .map(component => component.long_name)
        .join(separador)

const getRepresentation = (result) => {
  let primaryText, secondaryText
  let component = mapResultToComponent(result)
  if (result.types.includes('point_of_interest') || result.types.includes('establishment') || result.types.includes('premise')) {
    primaryText = joinComponents([component.name])
    secondaryText = joinComponents([component.street.route, component.locality, component.administrative.level1])
  } else if (result.types.includes('intersection')) {
    primaryText = joinComponents(component.street.routes, ' y ')
    secondaryText = joinComponents([component.locality, component.administrative.level1])
  } else if (result.types.includes('street_address') || result.types.includes('route')) {
    primaryText = joinComponents([component.street.route, component.street.number], ' ')
    secondaryText = joinComponents([component.locality, component.administrative.level1])
  } else if (result.types.includes('locality')) {
    primaryText = joinComponents([component.locality], ' ')
    secondaryText = joinComponents([component.administrative.level2, component.administrative.level1, component.country])
  } else if (result.types.includes('administrative_area_level_2')) {
    primaryText = joinComponents([component.administrative.level2])
    secondaryText = joinComponents([component.administrative.level1, component.country])
  } else if (result.types.includes('postal_code')) {
    primaryText = joinComponents([component.administrative.level2])
    secondaryText = joinComponents([component.administrative.level1, component.country])
  }

  return ({
    primaryText,
    secondaryText
  })
}

const LocationResult = ({result, resultItemClick}) => {
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

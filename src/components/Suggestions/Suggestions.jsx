import React from 'react'
import { connect } from 'react-redux'
import {ListItem} from 'material-ui/List'
import LocationIcon from 'material-ui/svg-icons/maps/my-location'
import PlaceIcon from 'material-ui/svg-icons/maps/place'
import HomeIcon from 'material-ui/svg-icons/action/home'
import AccessIcon from 'material-ui/svg-icons/device/access-time'
import {blue500, grey500} from 'material-ui/styles/colors'

import {getSearchData} from '../../redux/getters.js'
import {getLocationFromBrowser} from '../../redux/actions.js'
import LocationResult from './LocationResult'
import SuggestionBlock from './SuggestionBlock'

const styles = {
  suggestions: {
    display: 'flex',
    flexDirection: 'column',
    flex: '1 1 0',
    overflowY: 'scroll',
    padding: '5px 0'
  }
}

const mapData = (results) => results.map((result) => (
  <LocationResult
    key={result.place_id}
    result={result} />
))

const showData = (data) => {
  if (!data || !data.results || data.results.length === 0) {
    return (null)
  }

  let results = data.results.filter((result) => result.place_id !== 'ChIJ4y8KScLeopURniKCiwyf1mw')

  if (!results || results.length === 0) {
    return (null)
  }

  return (
    <SuggestionBlock subheader='Resultados'>
      { mapData(results) }
    </SuggestionBlock>
  )
}

const Suggestions = ({ searchData, getLocationFromBrowser }) => (

  <suggestions style={styles.suggestions}>
    <SuggestionBlock>
      <ListItem primaryText='Tu ubicacion'
        onTouchTap={getLocationFromBrowser}
        leftIcon={<LocationIcon color={blue500} />} />
      <ListItem primaryText='Elegir desde el mapa'
        leftIcon={<PlaceIcon color={grey500} />} />
    </SuggestionBlock>

    { showData(searchData) }

    <SuggestionBlock subheader='Lugares Recientes'>
      <ListItem primaryText='Home' secondaryText='Tolosa, Buenos Aires'
        leftIcon={<HomeIcon color={blue500} />} />
      <ListItem primaryText='Calle 8 363' secondaryText='Tolosa, Buenos Aires'
        leftIcon={<AccessIcon color={grey500} />} />
      <ListItem primaryText='Calle 7 702' secondaryText='Tolosa, Buenos Aires'
        leftIcon={<AccessIcon color={grey500} />} />
    </SuggestionBlock>

  </suggestions>
)

const mapDispatchToProps = {
  getLocationFromBrowser
}
export default connect(getSearchData, mapDispatchToProps)(Suggestions)

import React from 'react'
import { connect } from 'react-redux'
import {ListItem} from 'material-ui/List'
import LocationIcon from 'material-ui/svg-icons/maps/my-location'
import PlaceIcon from 'material-ui/svg-icons/maps/place'
import HomeIcon from 'material-ui/svg-icons/action/home'
import AccessIcon from 'material-ui/svg-icons/device/access-time'
import {blue500, grey500} from 'material-ui/styles/colors'

import {getSearchData} from '../../redux/getters.js'
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

const mapData= (data) => data.results.map((result) => (
  <LocationResult
    key={result.place_id}
    result={result} />
))

const Suggestions = ({ searchData }) => (

  <suggestions style={styles.suggestions}>
    <SuggestionBlock>
      <ListItem primaryText='Tu ubicacion'
        leftIcon={<LocationIcon color={blue500} />} />
      <ListItem primaryText='Elegir desde el mapa'
        leftIcon={<PlaceIcon color={grey500} />} />
    </SuggestionBlock>

    <SuggestionBlock subheader='Resultados'>
      { mapData(searchData) }
    </SuggestionBlock>

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

export default connect(getSearchData)(Suggestions)

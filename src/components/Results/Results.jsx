import React from 'react'
import { ListItem } from 'material-ui/List'
import { connect } from 'react-redux'
import { blue500 } from 'material-ui/styles/colors'
import Paper from 'material-ui/Paper';
import Bus from 'material-ui/svg-icons/maps/directions-bus'

import SuggestionBlock from '../Suggestions/SuggestionBlock'
import { getRouteData } from '../../redux/getters'
import { setRoute, setSelectedRoute, setHoverRoute } from '../../redux/actions'

import './Results.css'

const Results = ({ routeData, setSelectedRoute, setHoverRoute }) => {
  const mapData = () => {
    return routeData.data.results.allIds.map((osmId, index) => {
      const result = routeData.data.results.byId[osmId]
      const [ name, direction ] = result.name.split(':')
      return (
        <ListItem
          primaryText={name || 'placeholder'}
          key={result.osm_id || index}
          secondaryText={direction || 'placeholder'}
          onTouchTap={() => setSelectedRoute(result)}
          leftIcon={<Bus color={blue500} />}
          onMouseEnter={() => setHoverRoute(result)}
        />
      )
    })
  }
  const renderResults = () => {
    if (
      !routeData ||
        !routeData.data ||
        !routeData.data.results ||
        routeData.data.results.length === 0
    ) {
      return null
    }
    return (
      <SuggestionBlock subheader='Resultados'>
        {mapData()}
      </SuggestionBlock>
    )
  }

  return (
    <results>
      {renderResults()}
    </results>
  )
}

const mapDispatchToProps = { setRoute, setSelectedRoute, setHoverRoute }
const mapStateToProps = getRouteData
export default connect(mapStateToProps, mapDispatchToProps)(Results)

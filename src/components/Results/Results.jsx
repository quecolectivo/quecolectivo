import React from 'react'
import {ListItem} from 'material-ui/List'
import {connect} from 'react-redux'
import {blue500} from 'material-ui/styles/colors'
import Bus from 'material-ui/svg-icons/maps/directions-bus'

import SuggestionBlock from '../Suggestions/SuggestionBlock'
import {getRouteData} from '../../redux/getters'
import {setRoute, setSelectedRoute, setHoverRoute} from '../../redux/actions'

import './Results.css'

const Results = ({routeData, setSelectedRoute, setHoverRoute}) => {
  const mapData = () => {
    return routeData.data.results.allIds.map((pid, index) => {
      const result = routeData.data.results.byId[pid]
      return (
      <ListItem
        primaryText={result.ref + ', ' + result.pid || 'placeholder'}
        key={result.pid || index}
        secondaryText={result.name || 'placeholder'}
        onTouchTap={() => setSelectedRoute(result)}
        leftIcon={<Bus color={blue500} />}
        onMouseEnter={() => setHoverRoute(result)}
      />
    )}
    )
  }
  const renderResults = () => {
    if (!routeData || !routeData.data || !routeData.data.results || routeData.data.results.length === 0) {
      return (null)
    }
    return (
      <SuggestionBlock subheader='Lugares Recientes'>
        {mapData()}
      </SuggestionBlock>
    )
  }

  return (
    <results>
      { renderResults() }
    </results>
  )
}

const mapDispatchToProps = {setRoute, setSelectedRoute, setHoverRoute}
const mapStateToProps = getRouteData
export default connect(mapStateToProps, mapDispatchToProps)(Results)

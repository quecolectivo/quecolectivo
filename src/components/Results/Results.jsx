import React from 'react'
import {ListItem} from 'material-ui/List'
import {connect} from 'react-redux'
import {blue500} from 'material-ui/styles/colors'
import Bus from 'material-ui/svg-icons/maps/directions-bus'

import SuggestionBlock from '../Suggestions/SuggestionBlock'
import {getRouteData} from '../../redux/getters'
import {setRoute, setSelectedRoute} from '../../redux/actions'

const styles = {
  results: {}
}


const Results = ({routeData, setSelectedRoute}) => {
  const mapData = () => {
    return routeData.data.results.map((result, index) => (
      <ListItem
        primaryText={result.ref || "placeholder"}
        key={result.pid || index}
        secondaryText={result.pid || "placeholder"}
        onTouchTap={() => setSelectedRoute(result)}
        leftIcon={<Bus color={blue500}/>}
      />
    ))
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
    <results style={styles.results}>
      { renderResults() }
    </results>
  )
}

const mapDispatchToProps = {setRoute, setSelectedRoute}
const mapStateToProps = getRouteData
export default connect(mapStateToProps, mapDispatchToProps)(Results)
import React from 'react'
import { connect } from 'react-redux'
import Paper from 'material-ui/Paper'
import {List, ListItem} from 'material-ui/List'
import Subheader from 'material-ui/Subheader'
import Divider from 'material-ui/Divider'
import LocationIcon from 'material-ui/svg-icons/maps/my-location'
import PlaceIcon from 'material-ui/svg-icons/maps/place'
import HomeIcon from 'material-ui/svg-icons/action/home'
import AccessIcon from 'material-ui/svg-icons/device/access-time'
import {blue500, grey500} from 'material-ui/styles/colors'
import Result from './Result'

const styles = {
  entry: {
    padding: '7px 10px',
    display: 'block'
  },
  suggestions: {
    display: 'flex',
    flexDirection: 'column',
    flex: '1 1 0',
    overflowY: 'scroll',
    padding: '5px 0'
  }
}

const Entry = (props) => (
  <entry style={styles.entry}>
    <Paper>
      <List>
        { props.children }
      </List>
    </Paper>
  </entry>
)

const mapEntries = (data) => data.results.map((result, index, results) =>(
    <Result
        key={ result.place_id }
        result={ result }
        hasDivider={ index !== results.length -1 } />
));

const results = (data) => {
    "use strict";
    if(!data || data.results.length == 0) return;
    return (
        <Entry>
            <Subheader>Resultados</Subheader>
            { mapEntries(data) }
        </Entry>
    );
}

const Suggestions = ({ searchData }) => (
  <suggestions style={styles.suggestions}>
    <Entry>
      <ListItem
        primaryText='Tu ubicacion'
        leftIcon={<LocationIcon color={blue500} />}
            />
      <Divider inset />
      <ListItem
        primaryText='Elegir desde el mapa'
        leftIcon={<PlaceIcon color={grey500} />}
            />
    </Entry>
      {results(searchData)}
      <Entry>
          <Subheader>Lugares Recientes</Subheader>
          <ListItem
              primaryText="Home"
              secondaryText='Tolosa, Buenos Aires'
              leftIcon={<HomeIcon color={blue500} />}
          />
          <Divider inset />
          <ListItem
              primaryText="Calle 8 363"
              secondaryText='Tolosa, Buenos Aires'
              leftIcon={<AccessIcon color={grey500} />}
          />
          <Divider inset />
          <ListItem
              primaryText="Calle 7 702"
              secondaryText='Tolosa, Buenos Aires'
              leftIcon={<AccessIcon color={grey500} />}
          />
          <Divider inset />
      </Entry>

  </suggestions>
)

const mapStateToProps = (state) => ({
    searchData: state.global.searchData
})

export default connect(mapStateToProps)(Suggestions)

import React from 'react'
import Paper from 'material-ui/Paper'
import {List, ListItem} from 'material-ui/List'
import Subheader from 'material-ui/Subheader'
import Divider from 'material-ui/Divider'
import LocationIcon from 'material-ui/svg-icons/maps/my-location'
import PlaceIcon from 'material-ui/svg-icons/maps/place'
import HomeIcon from 'material-ui/svg-icons/action/home'
import AccessIcon from 'material-ui/svg-icons/device/access-time'
import {blue500, grey500} from 'material-ui/styles/colors'

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
const Suggestions = () => (
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
    <Entry>
      <Subheader>Lugares recientes</Subheader>
      <ListItem
        primaryText='Home'
        secondaryText='Tolosa, Buenos Aires'
        leftIcon={<HomeIcon color={grey500} />}
            />
      <Divider inset />
      <ListItem
        primaryText='Calle 7 702'
        secondaryText='Tolosa, Buenos Aires'
        leftIcon={<AccessIcon color={grey500} />}
            />
      <Divider inset />
      <ListItem
        primaryText='Home'
        secondaryText='Tolosa, Buenos Aires'
        leftIcon={<HomeIcon color={grey500} />}
            />
      <Divider inset />
      <ListItem
        primaryText='Calle 7 702'
        secondaryText='Tolosa, Buenos Aires'
        leftIcon={<AccessIcon color={grey500} />}
            />
      <Divider inset />
      <ListItem
        primaryText='Home'
        secondaryText='Tolosa, Buenos Aires'
        leftIcon={<HomeIcon color={grey500} />}
            />
      <Divider inset />
      <ListItem
        primaryText='Calle 7 702'
        secondaryText='Tolosa, Buenos Aires'
        leftIcon={<AccessIcon color={grey500} />}
            />
      <Divider inset />
      <ListItem
        primaryText='Home'
        secondaryText='Tolosa, Buenos Aires'
        leftIcon={<HomeIcon color={grey500} />}
            />
      <Divider inset />
      <ListItem
        primaryText='Calle 7 702'
        secondaryText='Tolosa, Buenos Aires'
        leftIcon={<AccessIcon color={grey500} />}
            />
      <Divider inset />
      <ListItem
        primaryText={<span style={{color: grey500}}>MAS DESDE TU HISTORIAL</span>}
        insetChildren
            />
    </Entry>
  </suggestions>
)

export default Suggestions

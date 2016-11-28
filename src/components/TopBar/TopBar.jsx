import React from 'react'
import NavigationMenu from 'material-ui/svg-icons/navigation/menu'
import MapDirections from 'material-ui/svg-icons/maps/directions'
import MapDirectionsBus from 'material-ui/svg-icons/maps/directions-bus'
import SocialShare from 'material-ui/svg-icons/social/share'
import muiThemeable from 'material-ui/styles/muiThemeable'
import { Link } from 'react-router'

import MenuButton from './MenuButton'

const styles = (muiTheme) => ({
  topBar: {
    background: muiTheme.palette.primary1Color,
    height: 48,
    padding: '8px 8px 0',
    display: 'flex',
    flexDirection: 'row',
    flex: 'none'
  },
  hamburger: {
  },
  navBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexGrow: 2
  },
  navBarLeft: {
    display: 'flex',
    flexDirection: 'row'
  },
  navBarRight: {
    display: 'flex',
    flexDirection: 'row'
  }
})

const TopBar = ({ toggleMenu, muiTheme }) => (
  <div style={styles(muiTheme).topBar} >
    <hamburger style={styles(muiTheme).hamburger}>
      <MenuButton title='Menu' onTouchTap={toggleMenu} position='bottom-right'>
        <NavigationMenu />
      </MenuButton>
    </hamburger>
    <nav style={styles(muiTheme).navBar} >
      <nav-left style={styles(muiTheme).navBarLeft}>
        <Link to='dir'>
          <MenuButton title='Direcciones' path='dir'>
            <MapDirections />
          </MenuButton>
        </Link>
        <Link to='recorridos'>
          <MenuButton title='Micros' path='recorridos'>
            <MapDirectionsBus />
          </MenuButton>
        </Link>
      </nav-left>
      <nav-right style={styles(muiTheme).navBarRight}>
        <MenuButton title='Compartir' position='bottom-left'>
          <SocialShare />
        </MenuButton>
      </nav-right>
    </nav>
  </div>
)

export default muiThemeable()(TopBar)

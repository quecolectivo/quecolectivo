import React from 'react'
import NavigationMenu from 'material-ui/svg-icons/navigation/menu'
import MapDirections from 'material-ui/svg-icons/maps/directions'
import MapDirectionsBus from 'material-ui/svg-icons/maps/directions-bus'
import SocialShare from 'material-ui/svg-icons/social/share'
import muiThemeable from 'material-ui/styles/muiThemeable'
import { Link } from 'react-router'

import NavButton from './NavButton'

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

const TopBar = ({ openMenu, muiTheme }) => (
  <top-bar style={styles(muiTheme).topBar} >
    <hamburger style={styles(muiTheme).hamburger}>
      <NavButton title='Menu' onTouchTap={openMenu} position='bottom-right'>
        <NavigationMenu />
      </NavButton>
    </hamburger>
    <nav style={styles(muiTheme).navBar} >
      <nav-left style={styles(muiTheme).navBarLeft}>
        <Link to='dir'>
          <NavButton title='Direcciones' path='dir'>
            <MapDirections />
          </NavButton>
        </Link>
        <Link to='recorridos'>
          <NavButton title='Micros' path='recorridos'>
            <MapDirectionsBus />
          </NavButton>
        </Link>
      </nav-left>
      <nav-right style={styles(muiTheme).navBarRight}>
        <NavButton title='Compartir' position='bottom-left'>
          <SocialShare />
        </NavButton>
      </nav-right>
    </nav>
  </top-bar>
)

export default muiThemeable()(TopBar)

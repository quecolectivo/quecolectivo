import React from 'react'
import NavigationMenu from 'material-ui/svg-icons/navigation/menu'
import MapDirections from 'material-ui/svg-icons/maps/directions'
import MapDirectionsBus from 'material-ui/svg-icons/maps/directions-bus'
import SocialShare from 'material-ui/svg-icons/social/share'
import muiThemeable from 'material-ui/styles/muiThemeable'
import { Link } from 'react-router'
import {connect} from 'react-redux'

import {getPath} from '../../redux/getters'
import NavButton from './NavButton/NavButton'
import './TopBar.css'


const styles = (muiTheme) => ({
  topBar: {
    background: muiTheme.palette.primary1Color,
  }
})

const TopBar = ({ openMenu, muiTheme, currentPath }) => (
  <top-bar style={styles(muiTheme).topBar}  class={currentPath=='/' ? 'homebar' : console.log(currentPath)}>
    <hamburger>
      <NavButton title='Menu' onTouchTap={openMenu} position='bottom-right'>
        <NavigationMenu />
      </NavButton>
    </hamburger>
    <nav>
      <nav-left>
        <Link to='/dir'>
          <NavButton title='Direcciones' path='/dir'>
            <MapDirections />
          </NavButton>
        </Link>
        <Link to='/recorridos'>
          <NavButton title='Micros' path='/recorridos'>
            <MapDirectionsBus />
          </NavButton>
        </Link>
      </nav-left>
      <nav-right>
        <NavButton title='Compartir' position='bottom-left'>
          <SocialShare />
        </NavButton>
      </nav-right>
    </nav>
  </top-bar>
)

export default muiThemeable()(connect(getPath)(TopBar))

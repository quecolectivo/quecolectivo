import React from 'react'
import IconButton from 'material-ui/IconButton'
import {connect} from 'react-redux'
import muiThemeable from 'material-ui/styles/muiThemeable'

import {getPath} from '../../../redux/getters'

const styles = (muiTheme) => ({
  iconButton: {
    color: muiTheme.palette.alternateTextColor
  },
  buttonStyle: {
    backgroundColor: '#3367D6',
    borderRadius: '100%'
  }
})

const NavButton = props => {
  const sty = styles(props.muiTheme)
  return (
    <IconButton
      className="navButton"
      tooltip={props.title}
      touch
      style={props.currentPath === props.path ? sty.buttonStyle : null}
      disableTouchRipple={props.currentPath === props.path}
      iconStyle={sty.iconButton}
      onTouchTap={props.onTouchTap}
      tooltipPosition={props.position}>
      {props.children}
    </IconButton>
  )
}

export default muiThemeable()(connect(getPath)(NavButton))

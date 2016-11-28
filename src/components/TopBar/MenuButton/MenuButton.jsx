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

const MenuButton = props => {
  const sty = styles(props.muiTheme)
  return (
    <IconButton
      tooltip={props.title}
      touch
      style={props.currentPath === props.path && sty.buttonStyle}
      iconStyle={sty.iconButton}
      onTouchTap={props.onTouchTap}
      tooltipPosition={props.position}>
      {props.children}
    </IconButton>
  )
}

export default muiThemeable()(connect(getPath)(MenuButton))

import React from 'react'
import Popover from 'material-ui/Popover'
import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'
import OriginIcon from 'material-ui/svg-icons/maps/my-location'
import DestinationIcon from 'material-ui/svg-icons/maps/place'

const style = (x, y) => ({
  paper: {
    display: 'inline-block',
    float: 'left',
    margin: '16px 32px 16px 0'
  },
  menu: {
    position: 'absolute',
    width: 256,
    top: y,
    left: x,
    display: 'block',
    zIndex: 100
  }
})

const ContextMenu = ({ x, y, open, onDestination, onOrigin, handleRequestClose }) => {
  if (!open) return null

  return (
    <context-menu style={style(x, y).menu}>
      <Popover
        style={style(x, y).paper}
        open={open}
        anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
        targetOrigin={{horizontal: 'left', vertical: 'top'}}
        onRequestClose={handleRequestClose}
            >
        <Menu width={220}>
          <MenuItem primaryText='Desde aquí' leftIcon={<OriginIcon />} onTouchTap={onOrigin} />
          <MenuItem primaryText='Hasta aquí' leftIcon={<DestinationIcon />} onTouchTap={onDestination} />
        </Menu>
      </Popover>
    </context-menu>
  )
}

export default ContextMenu

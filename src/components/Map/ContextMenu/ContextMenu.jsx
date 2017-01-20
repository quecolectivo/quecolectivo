import React from 'react'
import Popover from 'material-ui/Popover'
import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'
import OriginIcon from 'material-ui/svg-icons/maps/my-location'
import DestinationIcon from 'material-ui/svg-icons/maps/place'
import {connect} from 'react-redux'

import {updateMarker} from '../../redux/actions'

const style = (x, y) => ({
  menu: {
    top: y,
    left: x,
  }
})

const ContextMenu = ({ x, y, lat, lng, open, setDestination, setOrigin, handleRequestClose, updateMarker }) => {
  if (!open) return null

  return (
    <context-menu style={style(x, y).menu}>
      <Popover
        id="popover"
        open={open}
        anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
        targetOrigin={{horizontal: 'left', vertical: 'top'}}
        onRequestClose={handleRequestClose}
            >
        <Menu width={220}>
          <MenuItem primaryText='Desde aquí' leftIcon={<OriginIcon />} onTouchTap={() => updateMarker({lat, lng}, 'origin')} />
          <MenuItem primaryText='Hasta aquí' leftIcon={<DestinationIcon />} onTouchTap={() => updateMarker({lat, lng}, 'destination')} />
        </Menu>
      </Popover>
    </context-menu>
  )
}

export default connect(null, {updateMarker})(ContextMenu)

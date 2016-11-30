import React from 'react'
import { connect } from 'react-redux'
import muiThemeable from 'material-ui/styles/muiThemeable'
import IconButton from 'material-ui/IconButton'
import TextField from 'material-ui/TextField'
import SwapVert from 'material-ui/svg-icons/action/swap-vert'
import OriginIcon from 'material-ui/svg-icons/maps/my-location'
import DestinationIcon from 'material-ui/svg-icons/maps/place'
import { directionActions } from '../../redux/actions'

const style = (muiTheme) => ({
  header: {
    backgroundColor: muiTheme.palette.primary1Color,
    padding: '8px 8px 24px',
    display: 'flex',
    flexDirection: 'row'
  },
  searchCol: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 2
  },
  swapCol: {
    display: 'flex',
    flexDirection: 'col',
    alignItems: 'center'
  },
  iconButton: {
    color: muiTheme.palette.alternateTextColor
  },
  place: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    display: 'flex',
    padding: 14
  },
  search: {
    display: 'flex',
    flexGrow: 2
  },
  placeIcon: {
    color: muiTheme.palette.alternateTextColor,
    width: 20,
    height: 20
  },
  hintStyle: {
    color: 'rgba(255, 255, 255, 0.5)',
    fontWeight: 100,
    fontSize: 14
  },
  searchText: {
    color: 'rgba(255, 255, 255, 0.9)'
  },
  searchUnderline: {
    borderBottomColor: 'rgba(255, 255, 255, 0.5)'
  },
  searchUnderlineFocus: {
    borderBottomColor: 'rgba(255, 255, 255, 0.8)'
  }
})

const Header = ({ muiTheme, originValue, destinationValue, updateOriginValue, updateDestinationValue, handleRequest }) => {
  let styles = style(muiTheme)
  return (
    <header style={styles.header}>
      <search-col style={styles.searchCol}>
        <place style={styles.place}>
          <icon style={styles.icon}><OriginIcon style={styles.placeIcon} /></icon>
          <search style={styles.search}>
            <TextField
              hintText='Origen'
              id="origin"
              fullWidth
              hintStyle={styles.hintStyle}
              underlineStyle={styles.searchUnderline}
              underlineFocusStyle={styles.searchUnderlineFocus}
              inputStyle={styles.searchText}
              value={originValue}
              onChange={(event) => updateOriginValue(event.target.value)}
              onKeyUp={(event) => handleRequest(event)}
            />
          </search>
        </place>
        <place style={styles.place}>
          <icon style={styles.icon}><DestinationIcon style={styles.placeIcon} /></icon>
          <search style={styles.search}>
            <TextField
              id="destination"
              hintText='Destino'
              fullWidth
              hintStyle={styles.hintStyle}
              underlineStyle={styles.searchUnderline}
              underlineFocusStyle={styles.searchUnderlineFocus}
              inputStyle={styles.searchText}
              value={destinationValue}
              onChange={(event) => updateDestinationValue(event.target.value)}
            />
          </search>
        </place>
      </search-col>
      <swap-col style={styles.swapCol}>
        <IconButton iconStyle={styles.iconButton}>
          <SwapVert />
        </IconButton>
      </swap-col>
    </header>
  )
}

const mapStateToProps = (state) => ({
  originValue: state.global.originValue,
  destinationValue: state.global.destinationValue
})

export default muiThemeable()(connect(mapStateToProps, directionActions)(Header))

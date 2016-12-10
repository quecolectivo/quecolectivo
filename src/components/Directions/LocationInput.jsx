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
    flexDirection: 'row',
    boxShadow: 'rgba(0, 0, 0, 0.156863) 0px 4px 4px -2px, rgba(0, 0, 0, 0.227451) 0px 4px 4px -2px'
  },
  searchCol: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 2
  },
  swapCol: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
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

const LocationInput = ({ muiTheme, updateTextValue, originValue, destinationValue, handleRequest, setActiveTextField }) => {
  let styles = style(muiTheme)
  return (
    <location-input style={styles.header}>
      <search-col style={styles.searchCol}>
        <place style={styles.place}>
          <icon style={styles.icon}><OriginIcon style={styles.placeIcon} /></icon>
          <search style={styles.search}>
            <TextField
              hintText='Origen'
              id='origin'
              fullWidth
              hintStyle={styles.hintStyle}
              underlineStyle={styles.searchUnderline}
              underlineFocusStyle={styles.searchUnderlineFocus}
              inputStyle={styles.searchText}
              value={originValue}
              onFocus={() => setActiveTextField('origin')}
              onChange={(event) => updateTextValue(event.target.value, 'origin')}
              onKeyUp={(event) => handleRequest(event)}
            />
          </search>
        </place>
        <place style={styles.place}>
          <icon style={styles.icon}><DestinationIcon style={styles.placeIcon} /></icon>
          <search style={styles.search}>
            <TextField
              id='destination'
              hintText='Destino'
              fullWidth
              hintStyle={styles.hintStyle}
              underlineStyle={styles.searchUnderline}
              underlineFocusStyle={styles.searchUnderlineFocus}
              inputStyle={styles.searchText}
              value={destinationValue}
              onFocus={() => setActiveTextField('destination')}
              onChange={(event) => updateTextValue(event.target.value, 'destination')}
              onKeyUp={(event) => handleRequest(event)}
            />
          </search>
        </place>
      </search-col>
      <swap-col style={styles.swapCol}>
        <IconButton iconStyle={styles.iconButton}>
          <SwapVert />
        </IconButton>
      </swap-col>
    </location-input>
  )
}

const mapStateToProps = (state) => ({
  originValue: state.global.originValue,
  destinationValue: state.global.destinationValue
})

export default muiThemeable()(connect(mapStateToProps, directionActions)(LocationInput))

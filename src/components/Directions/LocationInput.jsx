import React from 'react'
import { connect } from 'react-redux'
import muiThemeable from 'material-ui/styles/muiThemeable'
import IconButton from 'material-ui/IconButton'
import TextField from 'material-ui/TextField'
import SwapVert from 'material-ui/svg-icons/action/swap-vert'
import OriginIcon from 'material-ui/svg-icons/maps/my-location'
import DestinationIcon from 'material-ui/svg-icons/maps/place'
import { directionActions } from '../../redux/actions'
import './LocationInput.css'

const style = (muiTheme) => ({
  header: {
    backgroundColor: muiTheme.palette.primary1Color
  },
  iconButton: {
    color: muiTheme.palette.alternateTextColor
  },
  icon: {
    display: 'flex',
    padding: 14
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
      <location-container style={styles.header}>
        <search-col>
          <place>
            <icon style={styles.icon}><OriginIcon style={styles.placeIcon} /></icon>
            <search>
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
          <place>
            <icon style={styles.icon}><DestinationIcon style={styles.placeIcon} /></icon>
            <search>
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
        <swap-col>
          <IconButton iconStyle={styles.iconButton}>
            <SwapVert />
          </IconButton>
        </swap-col>
      </location-container>
    </location-input>
  )
}

const mapStateToProps = (state) => ({
  originValue: state.global.originValue,
  destinationValue: state.global.destinationValue
})

export default muiThemeable()(connect(mapStateToProps, directionActions)(LocationInput))

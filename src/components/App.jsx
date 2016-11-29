import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { blue100, blue800 } from 'material-ui/styles/colors'
import Map from './Map'
import SidePanel from './SidePanel'

// const lightTheme = getMuiTheme({
//   palette: {
//     primary1Color: blue600,
//     primary2Color: blue800,
//     primary3Color: blue100
//   }
// })
const mapsTheme = getMuiTheme({
  palette: {
    primary1Color: '#4285F4',
    primary2Color: blue800,
    primary3Color: blue100
  }
})

const App = ({ children }) => (
  <MuiThemeProvider muiTheme={mapsTheme}>
    <div>
      <Map />
      <SidePanel>{ children }</SidePanel>
    </div>
  </MuiThemeProvider>
)

export default App

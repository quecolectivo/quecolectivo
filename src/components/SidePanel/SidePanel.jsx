import React from 'react'
import muiThemeable from 'material-ui/styles/muiThemeable'
import Paper from 'material-ui/Paper'
import SideMenu from '../SideMenu'
import TopBar from '../TopBar'
import './SidePanel.css'

const paperStyle = (muiTheme) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  height: '100%',
  width: '100%',
  margin: 0,
  padding: 0,
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: muiTheme.palette.accent2Color,
  overflow: 'visible'
})

const panelStyle = {
  position: 'absolute',
  height: '100%',
  top: 0,
  left: 0,
  zIndex: 2,
  outlineOffset: '-2px'
}

class SidePanel extends React.Component {
  constructor (props) {
    super(props)
    this.state = { menuOpened: false }
  }

  openMenu = () => this.setState({menuOpened: true})
  closeMenu = () => this.setState({menuOpened: false})

  render = () => (
    <side-panel id='panel' style={panelStyle}>
      <Paper style={paperStyle(this.props.muiTheme)} zDepth={2}>
        <TopBar openMenu={this.openMenu} />
        { this.props.children }
      </Paper>
      <SideMenu handle={this.closeMenu} open={this.state.menuOpened} />
    </side-panel>
    )
}
export default muiThemeable()(SidePanel)

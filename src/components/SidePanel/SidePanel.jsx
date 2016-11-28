import React from 'react'
import muiThemeable from 'material-ui/styles/muiThemeable'
import Paper from 'material-ui/Paper'
import Menu from '../Menu'
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

  toggleMenu = () => this.setState({ menuOpened: !this.state.menuOpened });

  handleMenu = (menuOpened) => this.setState({ menuOpened });

  render = () => (
    <side-panel id='panel' style={panelStyle}>
      <Paper style={paperStyle(this.props.muiTheme)} zDepth={2}>
        <TopBar toggleMenu={this.toggleMenu} />
        { this.props.children }
      </Paper>
      <Menu handle={this.handleMenu} open={this.state.menuOpened} />
    </side-panel>
    )
}
export default muiThemeable()(SidePanel)

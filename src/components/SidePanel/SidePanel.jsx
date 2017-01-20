import React from 'react'
import muiThemeable from 'material-ui/styles/muiThemeable'
import Paper from 'material-ui/Paper'
import SideMenu from '../SideMenu/SideMenu'
import TopBar from '../TopBar/TopBar'
import './SidePanel.css'

const paperStyle = (muiTheme) => ({
  backgroundColor: muiTheme.palette.accent2Color,
})


class SidePanel extends React.Component {
  constructor (props) {
    super(props)
    this.state = { menuOpened: false }
  }

  openMenu = () => this.setState({menuOpened: true})
  closeMenu = () => this.setState({menuOpened: false})

  render = () => (
    <side-panel id='panel'>
      <Paper className="panel-paper" style={paperStyle(this.props.muiTheme)} zDepth={2}>
        <TopBar openMenu={this.openMenu} />
        { this.props.children }
      </Paper>
      <SideMenu handle={this.closeMenu} open={this.state.menuOpened} />
    </side-panel>
    )
}
export default muiThemeable()(SidePanel)

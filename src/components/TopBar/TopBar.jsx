import React from 'react';
import IconButton from 'material-ui/IconButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import MapDirections from 'material-ui/svg-icons/maps/directions';
import MapDirectionsBus from 'material-ui/svg-icons/maps/directions-bus';
import SocialShare from 'material-ui/svg-icons/social/share';
import muiThemeable from 'material-ui/styles/muiThemeable';

const styles=(muiTheme) => ({
    iconButton: {
        color: muiTheme.palette.alternateTextColor
    },
    topBar: {
        background: muiTheme.palette.primary1Color,
        height: 48,
        padding: '8px 8px 0',
        display: 'flex',
        flexDirection: 'row',
        flex: 'none'
    },
    hamburger: {
    },
    navBar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexGrow:2
    },
    navBarLeft: {
        display: 'flex',
        flexDirection: 'row'
    },
    navBarRight: {
        display: 'flex',
        flexDirection: 'row'
    }
});

const MenuButton = muiThemeable()((props) => (
    <IconButton
        tooltip={props.title}
        touch={true}
        iconStyle={styles(props.muiTheme).iconButton}
        onTouchTap={props.onTouchTap}
        tooltipPosition={props.position}
    >
        {props.children}
    </IconButton>
));

const TopBar = ({ toggleMenu, muiTheme }) => (
    <div style={styles(muiTheme).topBar} >
        <hamburger style={styles(muiTheme).hamburger}>
            <MenuButton title="Menu" onTouchTap={toggleMenu} position="bottom-right">
                <NavigationMenu/>
            </MenuButton>
        </hamburger>
        <nav  style={styles(muiTheme).navBar} >
            <nav-left style={styles(muiTheme).navBarLeft}>
                <MenuButton title="Direcciones">
                    <MapDirections/>
                </MenuButton>
                <MenuButton title="Micros">
                    <MapDirectionsBus/>
                </MenuButton>
            </nav-left>
            <nav-right style={styles(muiTheme).navBarRight}>
                <MenuButton title="Compartir" position="bottom-left">
                    <SocialShare/>
                </MenuButton>
            </nav-right>
        </nav>
    </div>
);

export default muiThemeable()(TopBar);
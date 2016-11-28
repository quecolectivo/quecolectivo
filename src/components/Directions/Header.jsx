import React from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import IconButton from 'material-ui/IconButton';
import TextField from 'material-ui/TextField';
import SwapVert from 'material-ui/svg-icons/action/swap-vert';
import OriginIcon from 'material-ui/svg-icons/maps/my-location';
import DestinationIcon from 'material-ui/svg-icons/maps/place';

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
        color: 'rgba(255, 255, 255, 0.68)',
        fontWeight: 100
    },
    searchText: {
        color: 'rgba(255, 255, 255, 0.870588)',
    },
    searchUnderline: {
        borderColor: 'rgba(255, 255, 255, 0.5)',
    },
    searchUnderlineFocus: {
        borderColor: 'rgba(255, 255, 255, 0.68)',
    }
});

const Header = ({ muiTheme }) => {
    let styles = style(muiTheme);
    return (
        <header style={styles.header}>
            <search-col style={styles.searchCol}>
                <place style={styles.place}>
                    <icon style={styles.icon}><OriginIcon style={styles.placeIcon}/></icon>
                    <search style={styles.search}>
                        <TextField
                            hintText="Origen"
                            fullWidth={true}
                            hintStyle={styles.hintStyle}
                            underlineStyle={styles.searchUnderline}
                            underlineFocusStyle={styles.searchUnderlineFocus}
                            inputStyle={styles.searchText}
                        />
                    </search>
                </place>
                <place style={styles.place}>
                    <icon style={styles.icon}><DestinationIcon style={styles.placeIcon}/></icon>
                    <search style={styles.search}>
                        <TextField
                            hintText="Destino"
                            fullWidth={true}
                            hintStyle={styles.hintStyle}
                            underlineStyle={styles.searchUnderline}
                            underlineFocusStyle={styles.searchUnderlineFocus}
                            inputStyle={styles.searchText}
                        />
                    </search>
                </place>
            </search-col>
            <swap-col style={styles.swapCol}>
                <IconButton iconStyle={styles.iconButton}>
                    <SwapVert/>
                </IconButton>
            </swap-col>
        </header>
    )
};

export default muiThemeable()(Header);
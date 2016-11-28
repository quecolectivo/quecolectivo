import React from 'react';
import Header from './Header';

const styles = {
    directions: {
        display: 'flex',
        flexDirection: 'column',
        flex: '1 1 auto',
    }
}
const Directions = ({ children }) =>(
    <directions style={styles.directions}>
        <Header />
        { children }
    </directions>
);

export default Directions;
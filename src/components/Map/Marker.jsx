import React from 'react'

let styles= (size) => ({
    marker: {
        position: 'absolute',
        width:size,
        height:size,
        left: -size/2,
        top: -size
    },
    icon: {
        width: "100%",
        height: "100%"
    }
})

const Marker = ({ Icon, color, size=46 }) => (
    <marker style={styles(size).marker}>
        <Icon style={styles(size).icon} color={color}/>
    </marker>
)

export default Marker
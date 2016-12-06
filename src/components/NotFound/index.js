import React from 'react'
import image404 from './../../assets/images/404.png'

const styles = {
  page: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  img: {
    marginTop: '40px',
    width: '80%'
  }
}

const NotFound = () => (
  <div style={styles.page} >
    <img src={image404} style={styles.img} alt='404' />
  </div>
)

export default NotFound

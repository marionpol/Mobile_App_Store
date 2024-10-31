import {Image, TouchableOpacity } from 'react-native'
import React from 'react'

import styles from './styles'

const GoogleLogin = () => {
  return (
    <TouchableOpacity activeOpacity={0.6} style={styles.container}>
        <Image style={styles.image} source={require('@/assets/images/Google.png')} />
    </TouchableOpacity>
  )
}

export default React.memo(GoogleLogin)
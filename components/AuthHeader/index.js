import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import styles from './styles'

const AuthHeader = ({title, onBackPress}) => {
  return (
    <View style={styles.container}>
        <Pressable hitSlop={20} onPress={onBackPress}>
            <Image source={require('../../assets/images/auth_back.png')} style={styles.image}/>
        </Pressable>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

export default AuthHeader
import { View, Text } from 'react-native'
import React, {useState} from 'react'
import AuthHeader from '@/components/AuthHeader'
import styles from "./styles"
import Input from '@/components/Input'
import Button from '@/components/Button'
import Separator from '@/components/Separator'
import GoogleLogin from '@/components/GoogleLogin'
import { router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

const signIn = () => {
  return (
    <SafeAreaView>
    <View style={styles.container}>
      <AuthHeader title="Sign In" onPress={() => router.back('./app')}/>
      <Input label="Email" placeholder="example@gmail.com"/>
      <Input isPassword label="Password" placeholder="*****"/>

      <Button style={styles.button} title="Sign In" />
      <Separator text="Or sign in with"/>
      <GoogleLogin />
      <Text style={styles.footerText}>Don't have an account? <Text style={styles.footerLink} onPress={() => router.push('/(auth)/signup/signup')}>Sign Up</Text></Text>
    </View>
    </SafeAreaView>
)
}

export default signIn
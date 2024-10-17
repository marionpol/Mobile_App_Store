import { View, Text } from 'react-native'
import React, {useState} from 'react'
import AuthHeader from '@/components/AuthHeader'
import styles from "./styles"
import Checkbox from '@/components/Checkbox'
import Input from '@/components/Input'
import Button from '@/components/Button'
import Separator from '@/components/Separator'
import GoogleLogin from '@/components/GoogleLogin'
import { router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

const signup = () => {
  const [checked, setChecked] = useState(false)
  return (
    <SafeAreaView>
    <View style={styles.container}>
      <AuthHeader title="Sign Up" onPress={() => router.back('./app')}/>
      <Input label="Name" placeholder="John Doe"/>
      <Input label="Email" placeholder="example@gmail.com"/>
      <Input isPassword label="Password" placeholder="*****"/>

      <View style={styles.agreeRow}>
        <Checkbox checked={checked} onCheck={setChecked} />
        <Text style={styles.agreeText}>I agree with <Text style={styles.agreeTextBold}>Terms </Text> & <Text style={styles.agreeTextBold}>Privacy</Text></Text>
      </View>
      <Button style={styles.button} title="Sign Up" />
      <Separator text="Or sign in with"/>
      <GoogleLogin />
      <Text style={styles.footerText}>Already have an account? <Text style={styles.footerLink} onPress={() => router.push('/(auth)/singin/signin')}>Sign In</Text></Text>
    </View>
 </SafeAreaView>
)
}

export default signup
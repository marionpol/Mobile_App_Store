import React, { useState } from 'react';
import { View, Text } from "react-native";
import AuthHeader from "@/components/AuthHeader";
import Input from '@/components/Input';
import Checkbox from '@/components/Checkbox';
import Button from '@/components/Button';
import { styles } from './styles';
import Separator from '@/components/Separator';
import GoogleLogin from '@/components/GoogleLogin';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"

const Signup = ({navigation}) => {
    const [checked, setChecked] = useState(false)
    
    const onBack = () =>  {
        navigation.goBack()
    }

    const onSignin = () =>  {
        navigation.navigate('Signin')
    }

    return (
    <SafeAreaProvider>
        <View style={styles.container}>
            <AuthHeader onBackPress={onBack} title="Sign up" />
            <Input label="Name" placeholder="John Doe" />
            <Input label="Email" placeholder="example@gmail.com" />
            <Input isPassword label="Password" placeholder="******" />
            <View style={styles.agreeRow}>
                <Checkbox checked={checked} onCheck={setChecked}/>
                <Text style={styles.agreeText}>I agree with<Text style={styles.agreeTextBold}> Terms </Text>&<Text style={styles.agreeTextBold}> Privacy</Text></Text>
            </View>
            <Button style={styles.button} title="Sign up" />
            <Separator text="Or sign up with" />
            <GoogleLogin />
            <Text style={styles.footerText}>Already have an account?
                <Text onPress={onSignin} style={styles.footerLink}> Sign In</Text>
            </Text>
        </View>
    </SafeAreaProvider>
    )
}

export default Signup;
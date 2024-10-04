import React from "react";
import {Image, Pressable, Text, View} from 'react-native'
import {styles} from "./styles"
import Button from "../components/Button"
import { router } from 'expo-router'

const Splash = () => {
    return (
        <View style={styles.container}>
            <Image  resizeMode="contain" style={styles.image} source={require('../assets/images/splash_image.png')}/>

            <View style={styles.titleContainer}>
                <Text style={styles.title}>You'll find</Text>
                <Text style={[styles.innerTitle, styles.title]}> All you need
                </Text>
                <Text style={styles.title}>Here!</Text>
            </View>

            <Button title="Sign Up" onPress={() => router.push('/(auth)/signup/signup')}/>

            <Pressable hitSlop={20}>
                <Text style={styles.footerText} >Sign In</Text>
            </Pressable>
        </View>
    )
}

export default Splash;

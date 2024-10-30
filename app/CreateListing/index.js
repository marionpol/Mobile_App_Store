import React, { useState } from "react";
import { View, Text, TouchableOpacity} from "react-native"
import {SafeAreaView} from 'react-native-safe-area-context'
import Header from "@/components/Header";
import {styles} from './styles'

import {launchCamera, launchImageLibrary} from 'react-native-image-picker'

const CreateListing = ({navigation}) => {
    const [images, setImages] = useState([])


    const goBack = () => {
        navigation.goBack()
    }

    const uploadNewImage = async () => {
        const result = await launchImageLibrary()
        setImages(list => {[...list, result?.assets]})
        console.log(result)
    }

    return (
        <SafeAreaView style={{flex: 1}}>
            <Header showBack={true} onBackPress={goBack} title="Create a new listing" />
            <View style={styles.container}>
                <Text style={styles.sectionTitle}>Upload photos</Text>
                <TouchableOpacity onPress={uploadNewImage}>
                    <Text>+</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )

}

export default React.memo(CreateListing)
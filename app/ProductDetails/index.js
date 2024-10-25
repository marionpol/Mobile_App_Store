import React from "react";
import { Text, ScrollView, Image, View, Pressable, Linking} from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import {styles} from './styles'
import Button from "@/components/Button";
import ImageCarousel from "@/components/ImageCarousel";

const ProductDetails = ({navigation, route}) => {
    const {products} = route.params || {}

    const onBackPress = () => {
        navigation.goBack()
    }

    const onContact = () => {
        let phone = 'real phone number'
        Linking.openURL(`tel:${phone}`)

        let email = 'real email'
        Linking.openURL(`mailto:${email}`)
    }

    return (
        <SafeAreaView style={styles.save}>
            <ScrollView style={styles.container}>
                {products?.images?.length ? (
                    <ImageCarousel images={products?.images} />
                ) : ( <Image style={styles.image} source={{uri: products?.image}} /> )}
                <View style={styles.content}>
                    <Text style={styles.title}>{products?.title}</Text>
                    <Text style={styles.price}>{products?.price}</Text>
                    <Text style={styles.description}>{products?.description}</Text>
                </View>
                <Pressable onPress={onBackPress} style={styles.backContainer}>
                    <Image style={styles.backIcon} source={require('../../assets/tabs/back.png')} />
                </Pressable>
            </ScrollView>
            <View style={styles.footer}>
                <Pressable style={styles.bookmarkContainer}>
                    <Image style={styles.bookmarkIcon} source={require('../../assets/tabs/bookmark.png')
                     } />
                </Pressable>
                <Button onPress={onContact} title="Contact Seller"/>
            </View>
        </SafeAreaView>
    )
}

export default React.memo(ProductDetails)
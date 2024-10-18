import React from "react";
import { Pressable, Image, Text, View } from "react-native";
import {styles} from "./styles"
import { Colors } from "@/constants/colors";

const CategoryBox = ({title, image, onPress, isSelected}) => {
    return (
        <Pressable onPress={onPress} style={styles.container}>
            <View style={[styles.imageContainer, isSelected ? {backgroundColor: Colors.black}:{}]}>
                <Image style={styles.image} source={{uri: image}}/>
            </View>
            <Text style={[styles.title, isSelected ? {color: Colors.blue, fontWeight: '500'}: {}]}>{title}</Text>
        </Pressable>
    )
}

export default React.memo(CategoryBox)
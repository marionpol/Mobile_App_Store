import { StyleSheet, Dimensions } from "react-native";

import { Colors } from "@/constants/colors";

const { width } = Dimensions.get('window')


export const styles = StyleSheet.create({
    container: {
        margin: 8
    },
    title: {
        color: Colors.textGrey,
        paddingVertical: 8
    },
    image: {
        width: (width - 76) / 2,
        height: 220,
        borderRadius: 8
    },
    price: {
        color: Colors.black,
        paddingBottom: 8
    }
})
import { StyleSheet, Dimensions } from "react-native";

import { Colors } from "@/constants/colors";

const {width, height} = Dimensions.get("window")

export const styles = StyleSheet.create({
    image: {
        width: width,
        height: height * 0.45
    },
    list: {
        
    },
    paggination: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        bottom: 50,
        alignSelf: 'center'
    },
    pagginationLine: {
        height: 4,
        width: 20,
        borderRadius: 10,
        backgroundColor: Colors.white,
        margin: 5
    },
    activeLine: {
        backgroundColor: Colors.blacklack,
        width: 30
    }
})
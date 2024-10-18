import { StyleSheet } from "react-native";

import { Colors } from "@/constants/colors";

export const styles = StyleSheet.create({
    container: {
        marginHorizontal: 8,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 25
    },
    title:{
        color: Colors.grey
    },
    image: {
        width:32,
        height:32
    },
    imageContainer: {
        backgroundColor: Colors.lightGrey,
        padding: 8,
        borderRadius: 8,
        marginBottom: 8
    }
})
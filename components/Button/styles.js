import { StyleSheet } from "react-native";

import { Colors } from "@/constants/colors";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.blue,
        paddingVertical: 20,
        paddingHorizontal: 8,
        width: '75%',
        alignSelf: 'center',
        borderRadius: 8
    },
    title:{
        color: Colors.white,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold'
    }
})
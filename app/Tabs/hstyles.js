import { StyleSheet } from "react-native";

import { Colors } from "@/constants/colors";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        color: Colors.black,
        fontSize: 16,
        fontWeight: 'bold'
    },
    icon: {
        width: 24,
        height: 24
    }
})
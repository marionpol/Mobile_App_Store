import { StyleSheet } from "react-native";

import { Colors } from "@/constants/colors";

export const styles = StyleSheet.create({
    container: {
        borderColor: Colors.grey,
        borderWidth: 1,
        borderRadius: 4,
        width: 22,
        height: 22
    },
    innerContainer: {
        backgroundColor: Colors.grey,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    checkIcon: {
        width: 12,
        height: 9
    }
})
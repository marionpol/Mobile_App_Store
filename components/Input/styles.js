import { StyleSheet } from "react-native";

import { Colors } from "@/constants/colors";

export const styles = StyleSheet.create({
    container: {
        marginBottom: 20
    },
    inputContainer: {
        borderWidth: 1,
        borderRadius: 14,
        borderColor: Colors.grey,
        flexDirection: 'row',
        alignItems: 'center'
    },
    input: {
        paddingHorizontal: 16,
        paddingVertical: 20,
        flex: 1
    },
    label: {
        marginBottom: 8,
        color: Colors.blue,
        fontWeight: '500'
    },
    eye: {
        width: 24,
        height: 24,
        marginHorizontal: 16
    }
})
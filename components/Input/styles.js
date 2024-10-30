import { StyleSheet } from "react-native";

import { Colors } from "@/constants/colors";

export const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
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
        flex: 1,

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
    },
    arrow: {
        width: 24,
        height: 24,
        marginHorizontal: 16,
        transform: [{rotate: '90deg'}]
    },
    placeholder: {
        paddingHorizontal: 16,
        paddingVertical: 20,
        flex: 1,
        color: Colors.lightGrey
    },
    modalWrapper: {
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    modalContent: {
        backgroundColor: Colors.white,
        borderRadius: 8,
        padding: 16
    },
    optionTitle: {
        color: Colors.black,
        marginBottom: 16,
        fontSize: 16
    },
    optionText: {
        color: Colors.black,
        paddingVertical: 4,
        fontSize: 15
    },
    selectedOption : {
        color: Colors.blue,
        fontWeight: 'bold'
    }
})
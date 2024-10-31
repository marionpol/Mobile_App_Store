import { StyleSheet } from "react-native";

import { Colors } from "@/constants/colors";

export const styles = StyleSheet.create({
    container: {
        padding: 24
    },
    sectionTitle: {
        fontWeight: "500",
        fontSize: 14,
        color: Colors.blue,
        marginBottom: 16
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 8,
        marginRight: 8,
        marginTop: 8
    },
    uploadContainer: {
        width: 100,
        height: 100,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: Colors.grey,
        borderStyle: 'dotted',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8
    },
    uploadCircle: {
        width: 32,
        height: 32,
         borderRadius: 20,
         backgroundColor: Colors.lightGrey,
         flexDirection: 'column',
         justifyContent: 'center',
         alignItems: 'center'
    },
    uploadPlus: {
        color: Colors.white,
        fontSize: 28,
        marginTop: -6
    },
    imageRow: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    imageContainer: {
        flexDirection: 'row',
        marginRight: 8,
    },
    delete: {
        width: 24,
        height: 24,
        marginTop: -10,
        marginLeft: -20
    },
    textarea: {
        minHeight: 120,
        
    }
})
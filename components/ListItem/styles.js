import { StyleSheet } from "react-native";

import { Colors } from "@/constants/colors";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
        backgroundColor: Colors.white
    },
    title: {
        color: Colors.blue,
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 6,
    },
    subtitle: {
        color: Colors.grey,
        fontSize: 12,
        marginTop: 6
    },
    arrow: {
        height: 32,
        width: 32
    },
    content: {
        
    }
})
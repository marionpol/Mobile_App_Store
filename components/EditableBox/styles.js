import { StyleSheet } from "react-native";
import { Colors } from "@/constants/colors";

export const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingVertical: 12,
        shadowColor: "#000",
        shadowOffset: {
            width: 3,
            height: 3
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
        backgroundColor: Colors.white,
        marginVertical: 12,
        borderRadius: 4
    },
    label: {
        color: Colors.grey,
        fontSize: 12,
        marginBottom: 6
    },
    input: {
        color: Colors.blue,
        fontSize: 14,
        fontWeight: '500'
    }
})
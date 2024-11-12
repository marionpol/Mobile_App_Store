import { StyleSheet } from "react-native";
import { Colors } from "@/constants/colors";

export const styles = StyleSheet.create({
    container: {
        padding: 24,
        flex: 1,
        backgroundColor: Colors.white
    },
    item: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        marginVertical: 8
    },
    sectionTitle: {
        fontWeight: '500',
        fontSize: 16,
        color: Colors.grey,
        marginBottom: 16
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    icon: {
        width: 32,
        height: 32
    },
    button: {
        paddingVertical: 12,
        marginBottom:16,
        marginTop: 16
    }
})
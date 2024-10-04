import { StyleSheet } from "react-native";
import { Colors } from "@/constants/colors";


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20
    },
    text: {
        color: Colors.blue,
        fontWeight: '500'
    },
    line: {
        backgroundColor: Colors.lightGrey,
        height: 1,
        flex: 1,
        marginVertical: 8
    }
})

export default styles;
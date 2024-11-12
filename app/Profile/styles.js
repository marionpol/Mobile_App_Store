import  { StyleSheet } from 'react-native'
import { Colors } from '@/constants/colors'

export const styles = StyleSheet.create({
    container: {
        padding: 24,
        flex: 1,
        backgroundColor: Colors.white
    },
    name: {
        fontSize: 20,
        fontWeight:'bold',
        color: Colors.black,
        marginBottom: 5
    },
    email: {
        fontSize: 14,
        color: Colors.grey,
        marginBottom: 5
    },
    content: {
        flex: 1
    }
})
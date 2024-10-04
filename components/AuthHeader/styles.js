import { StyleSheet } from 'react-native'
import { Colors } from '@/constants/colors'

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 54
    },
    image: {
        width: 18,
        height: 18
    },
    title: {
        color: Colors.blue,
        fontSize: 26,
        fontWeight: '500',
        paddingHorizontal: 16
    }
})

export default styles;
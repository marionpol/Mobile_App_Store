import { Colors } from '@/constants/colors'
import  { StyleSheet, Dimensions } from 'react-native'
const {height} = Dimensions.get('window')

export const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: height * 0.45
    },
    content: {
        backgroundColor: Colors.white,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        marginTop: -40,
        paddingHorizontal: 24
    },
    title: {
        marginTop: 50,
        fontSize: 24,
        fontWeight: '500'
    },
    price: {
        fontSize: 30,
        fontWeight: 'bold',
        marginVertical: 8
    },
    description: {
        color: Colors.textGrey,
        fontWeight: '300',
        marginVertical: 8
    },
    footer: {
        padding: 24,
        flexDirection: 'row',
        alignItems: 'center',

    },
    save: {
        flex: 1
    },
    bookmarkContainer: {
        backgroundColor: Colors.lightGrey,
        padding: 18,
        borderRadius: 8,
        marginRight: 16,
    },
    bookmarkIcon: {
        width: 24,
        height: 24
    },
    backContainer: {
        backgroundColor: Colors.white,
        padding: 10,
        margin: 24,
        borderRadius: 8,
        position: 'absolute'
    },
    backIcon: {
        width: 20,
        height: 20,
    }
})
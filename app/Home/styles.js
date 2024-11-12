import  { StyleSheet } from 'react-native'
import { Colors } from '@/constants/colors'


export const styles = StyleSheet.create({
    container: {
        padding: 24,
        flexDirection: "column",
        height: "100%",
        borderWidth: 0,
        backgroundColor: Colors.white

    },
    image: {
        width: '100%',
        height: 200
    },
    titleContainer: {
        marginVertical: 54
    },
    title: {
        fontSize: 40,
        fontWeight: "bold",
        textAlign: "center"
    },
    innerTitle: {
        color: Colors.orange,
        textDecorationLine: 'underline',
        textAlign: "center"
    },
    footerText: {
        color: Colors.blue,
        textAlign: "center",
        fontSize: 16,
        fontWeight: "bold",
        marginTop: 30
    },
    list: {
        paddingVertical: 24
    }, 
    CategoryBox :{
        categoryContainer: {
            height: 80, 
            justifyContent: "center",
        },
    }
})
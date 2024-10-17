import { StyleSheet } from 'react-native';

import { Colors } from '@/constants/colors'

export const styles = StyleSheet.create({
    container: { padding: 24,},
    inputContainer: {
        borderWidth: 1
    },
    input: {
        borderWidth: 1,
        paddingHorizontal: 16,
        paddingVertical: 20
    },
    agreeRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    agreeText : {
        color: Colors.blue,
        marginHorizontal: 14
    },
    agreeTextBold : {
        fontWeight: 'bold'
    },
    button: {
        marginVertical: 20
    },
    footerText: {
        color: Colors.blue,
        marginBottom: 56,
        textAlign: 'center'
    },
    footerLink: {
        fontWeight: 'bold'
    }
})
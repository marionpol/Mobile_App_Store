import React from "react";
import {View, Text, TextInput} from "react-native"

import { styles } from './styles'

const EditableBox = ({label, value, onChangeText, editable}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput editable={editable} value={value} onChangeText={onChangeText} style={styles.input}/>
        </View>
    )
}

export default React.memo(EditableBox)
import React from "react";
import { styles } from "./styles";
import { View, Text, Image, Pressable} from "react-native"

const ListItem = ({title, subtitle, onPress, style}) => {
    return (
        <Pressable style={[styles.container, style]} onPress={onPress}>
            <View style={styles.content}>
                <Text style={styles.title}>{title}</Text>

                {!! subtitle ? (<Text style={styles.subtitle}>{subtitle}</Text>) : null}
            </View>
            <Image style={styles.arrow} source={require("../../assets/tabs/arrow.png")}/>
        </Pressable>
    )
}

export default React.memo(ListItem)
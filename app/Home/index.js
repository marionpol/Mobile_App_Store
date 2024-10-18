import React from "react";
import { View, Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import Header from "@/components/Header";

const Home = () => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Header showSearch={true} title="Find all you need"/>
                <Text>Home</Text>
            </View>
        </SafeAreaView>
    )
}
export default React.memo(Home)
import React from "react";
import { SafeAreaView } from "react-native";
import Splash from ".";
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from "./Home";
import Favorites from "./Favorites";
import Profile from "./Profile";


const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Favorites" component={Favorites} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    )
}

const App = () => {
    return (
        <SafeAreaView>
            <Splash />
        </SafeAreaView>
    )
}

export default App;
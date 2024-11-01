import React, { useEffect, useState } from 'react';
import { Image } from 'react-native';
import Splash from './auth/splash';
import Signup from './auth/singup/signup';
import Signin from './auth/signin/signin';

import Profile from './Profile';
import Home from './Home';
import Favorites from './Favorites';
import Settings from './Settings';
import CreateListing from './CreateListing';

import { Colors } from '../constants/colors';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProductDetails from './ProductDetails';
import { getCurrentUser } from '@/appwrite/appwrite';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Tabs = ({ setIsAuthenticated }) => {
    return (
        <Tab.Navigator 
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) => {
                    let icon;
                    if (route.name === "Home") {
                        icon = focused
                            ? require('@/assets/tabs/home_active.png')
                            : require('@/assets/tabs/home.png');
                    } else if (route.name === "Favorites") {
                        icon = focused
                            ? require('@/assets/tabs/bookmark_active.png')
                            : require('@/assets/tabs/bookmark.png');
                    } else if (route.name === "Profile") {
                        icon = focused
                            ? require('@/assets/tabs/profile_active.png')
                            : require('@/assets/tabs/profile.png');
                    }
                    return <Image style={{ width: 24, height: 24 }} source={icon} />;
                },
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: { borderTopColor: Colors.lightGrey }
            })}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Favorites" component={Favorites} />
            <Tab.Screen name="Profile">
                {(props) => <Profile {...props} setIsAuthenticated={setIsAuthenticated} />}
            </Tab.Screen>
        </Tab.Navigator>
    );
};

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(null);
    const theme = { colors: { background: Colors.white } };

    useEffect(() => {
        const checkAuthentication = async () => {
            try {
                const user = await getCurrentUser();
                setIsAuthenticated(!!user);
            } catch (error) {
                console.log("Error fetching user: ", error);
                setIsAuthenticated(false);
            }
        };
        checkAuthentication();
    }, []);

    const handleSignInSuccess = () => {
        setIsAuthenticated(true); 
    };

    return (
        <SafeAreaProvider>
            <Stack.Navigator 
                screenOptions={{
                    contentStyle: { backgroundColor: theme.colors.background },
                    headerShown: false 
                }}>
                {isAuthenticated ? (
                    <>
                        <Stack.Screen name="Tabs">
                            {(props) => <Tabs {...props} setIsAuthenticated={setIsAuthenticated} />}
                        </Stack.Screen>
                        <Stack.Screen name="ProductDetails" component={ProductDetails} />
                        <Stack.Screen name="Settings" component={Settings} />
                        <Stack.Screen name="CreateListing" component={CreateListing} />
                    </>
                ) : (
                    <>
                        <Stack.Screen name="Splash" component={Splash} />
                        <Stack.Screen name="Signup">
                        {(props) => <Signup {...props} setIsAuthenticated={setIsAuthenticated} />}
                        </Stack.Screen>
                        <Stack.Screen name="Signin">
                            {(props) => <Signin {...props} onSignInSuccess={handleSignInSuccess} />}
                        </Stack.Screen>
                    </>
                )}
            </Stack.Navigator>
        </SafeAreaProvider>
    );
};

export default React.memo(App);

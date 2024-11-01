import React from "react";
import { View, Text, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import Header from "@/components/Header";
import ListItem from "@/components/ListItem";
import Button from "@/components/Button";
import { logOut, getCurrentUser } from "@/appwrite/appwrite";

const Profile = ({ navigation, setIsAuthenticated }) => {
    const num = 10;

    const onLogout = async () => {
        try {
            const currentUser = await getCurrentUser();

            if (!currentUser) {
                console.warn('No user is currently logged in');
                Alert.alert("Logout Error", "No active session found. Please log in again.");
                return; 
            }

            await logOut();
            console.log('User logged out successfully');

            // Use the setIsAuthenticated prop
            setIsAuthenticated(false);
            navigation.navigate('Splash'); 
        } catch (error) {
            console.error('Logout error:', error);
            Alert.alert("Logout Error", error.message || "An error occurred during logout. Please try again.");
        }
    };

    const onSettingsPress = () => {
        navigation.navigate('Settings');
    };

    const onNewListingPress = () => {
        navigation.navigate('CreateListing');
    };

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.container}>
                <View style={styles.content}>
                    <Header title="Profile" showLogout onLogout={onLogout} />
                    <Text style={styles.name}>Username</Text>
                    <Text style={styles.email}>User email</Text>

                    <ListItem title="My Listings" subtitle={`Already have ${num} listings`} />
                    <View style={{ height: 20 }} />
                    <ListItem onPress={onSettingsPress} title="Settings" subtitle="Account, FAQ, Contact" />
                </View>
                <Button onPress={onNewListingPress} title="Add New Listing" />
            </View>
        </SafeAreaView>
    );
};

export default React.memo(Profile);

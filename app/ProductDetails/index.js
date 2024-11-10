import React, { useState, useEffect } from "react";
import { Text, ScrollView, Image, View, Pressable, Linking } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from './styles';
import Button from "@/components/Button";
import ImageCarousel from "@/components/ImageCarousel";
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProductDetails = ({ navigation, route }) => {
  const { products } = route.params || {};  // Get the product from route params
  const [isBookmarked, setIsBookmarked] = useState(false);  // State to track if the product is bookmarked

  useEffect(() => {
    // Check if the product is already bookmarked
    const checkIfFavorite = async () => {
      const savedFavorites = await AsyncStorage.getItem('favorites');
      const favorites = savedFavorites ? JSON.parse(savedFavorites) : [];
      const isProductFavorite = favorites.some(item => item.id === products?.id);
      setIsBookmarked(isProductFavorite);
    };

    checkIfFavorite();  // Call the function to check favorites
  }, [products?.id]);  // Run this effect whenever the product's id changes

  const onBackPress = () => {
    navigation.goBack();  // Navigate back to the previous screen
  };

  const onContact = () => {
    let phone = 'real phone number';
    Linking.openURL(`tel:${phone}`);  // Open phone dialer
    let email = 'real email';
    Linking.openURL(`mailto:${email}`);  // Open email client
  };

  const toggleBookmark = async () => {
    let savedFavorites = await AsyncStorage.getItem('favorites');
    savedFavorites = savedFavorites ? JSON.parse(savedFavorites) : [];

    if (isBookmarked) {
      // If already bookmarked, remove it from the list
      savedFavorites = savedFavorites.filter(item => item.id !== products?.id);
    } else {
      // If not bookmarked, add it to the list
      savedFavorites.push(products);
    }

    setIsBookmarked(!isBookmarked);  // Toggle the bookmark state
    await AsyncStorage.setItem('favorites', JSON.stringify(savedFavorites));  // Persist to AsyncStorage
  };

  return (
    <SafeAreaView style={styles.save}>
      <ScrollView style={styles.container}>
        {products?.images?.length ? (
          <ImageCarousel images={products?.images} />  // Use carousel if there are multiple images
        ) : (
          <Image style={styles.image} source={{ uri: products?.image }} />  // Single image if no carousel
        )}
        <View style={styles.content}>
          <Text style={styles.title}>{products?.title}</Text>
          <Text style={styles.price}>{products?.price}</Text>
          <Text style={styles.description}>{products?.description}</Text>
        </View>
        <Pressable onPress={onBackPress} style={styles.backContainer}>
          <Image style={styles.backIcon} source={require('@/assets/tabs/back.png')} />
        </Pressable>
      </ScrollView>
      <View style={styles.footer}>
        <Pressable onPress={toggleBookmark} style={styles.bookmarkContainer}>
          <Image
            style={styles.bookmarkIcon}
            source={
              isBookmarked
                ? require('@/assets/tabs/bookmark_active.png')  // Active bookmark icon if bookmarked
                : require('@/assets/tabs/bookmark.png')  // Inactive bookmark icon if not bookmarked
            }
          />
        </Pressable>
        <Button onPress={onContact} title="Contact Seller" />
      </View>
    </SafeAreaView>
  );
};

export default React.memo(ProductDetails);

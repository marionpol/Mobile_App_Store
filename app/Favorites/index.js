import React, { useState, useEffect } from "react";
import { View, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import FavoriteItem from "@/components/FavoriteItem";
import Header from "@/components/Header";
import AsyncStorage from '@react-native-async-storage/async-storage'; 

const Favorites = ({ navigation }) => {
  const [favorites, setFavorites] = useState([]);

  const fetchFavorites = async () => {
    const savedFavorites = await AsyncStorage.getItem('favorites');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  };

  useEffect(() => {
    fetchFavorites(); 
  }, [favorites]);  
  
  const removeFavorite = async (productId) => {
    const updatedFavorites = favorites.filter(item => item.id !== productId);
    setFavorites(updatedFavorites);  
    await AsyncStorage.setItem('favorites', JSON.stringify(updatedFavorites)); 
  };

  const renderItem = ({ item }) => {
    const onProductPress = () => {
      navigation.navigate('ProductDetails', { products: item });
    };

    return (
      <FavoriteItem 
        {...item}
        onPress={onProductPress}
        onRemove={() => removeFavorite(item.id)}
      />
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={styles.container}>
        <Header title="Favorites" />
        <FlatList
          data={favorites} 
          renderItem={renderItem}
          keyExtractor={(item) => String(item.id)}
        />
      </View>
    </SafeAreaView>
  );
};

export default React.memo(Favorites);

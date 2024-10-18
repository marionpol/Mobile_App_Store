import React, { useState } from "react";
import { View, Text, FlatList } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import Header from "@/components/Header";
import { categories } from "@/data/categories";
import CategoryBox from "@/components/CategoryBox";
import ProductHomeItem from "@/components/ProductHomeItem";
import { products } from "@/data/products";


const Home = () => {
    const [numColumns, setNumColumns] = useState(2)

    const renderCategoryItem = ({item}) => { 
        return(
            <CategoryBox title={item?.title} image={item?.image}/>
        )
    }

    const renderProductItem = ({item}) => {
        console.log('item=>', item)
        return (
            <ProductHomeItem {...item}/>
        )
    }

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Header showSearch={true} 
                title="Find all you need"/>
                <FlatList showsHorizontalScrollIndicator={false} style={styles.list} horizontal data={categories} renderItem={renderCategoryItem} keyExtractor={(item, index) => String(index)}/>
                <FlatList numColumns={numColumns} data={products} renderItem={renderProductItem} keyExtractor={(item => String(item.id))} ListFooterComponent={<View style={{height: 250}}/>} />
            </View>
        </SafeAreaView>
    )
}
export default React.memo(Home)
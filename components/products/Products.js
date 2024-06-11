import { View, Text, StyleSheet } from "react-native";
import React from "react";
import ProductsCard from "./productsCard";
import { ProductsData } from "../../data/productsData";


const Products = () => {
    return (
        <View>
            {ProductsData?.map((p) => (
                <ProductsCard key={p._id} p={p} />
            ))}
        </View> 
    );
};

export default Products;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
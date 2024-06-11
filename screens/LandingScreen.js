import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Layout from "../components/layout-components/layout-component";
import Categories from "../components/category/categories";
import Products from "../components/products/Products";
import ProductsCard from "../components/products/productsCard";


const Landing = () => {
    return (
        <Layout>
            <View style={styles.container}>
                <Categories />
                <Products />
            </View>
        </Layout>
    );
};

export default Landing;

const styles = StyleSheet.create({
    container: {
        paddingBottom: 450
    },
  });
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";


const ProductsCard = ({ p }) => {
    return (
        <View>
            <View style={styles.card}>
                <Image source={{ uri: p?.imageUrl }} />
                <Text>{p?.name}</Text>
                <Text>{p?.description.substring(0, 30)} ...more</Text>
                <View>
                    <TouchableOpacity>
                        <Text>Details</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View> 
    );
};

export default ProductsCard;

const styles = StyleSheet.create({
    card: {
        borderWidth: 1,
        borderColor: "lightgray",
        marginaVertical: 5,
        marginaHorizontal: 8,
    },
  });
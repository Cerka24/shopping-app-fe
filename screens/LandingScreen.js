import { View, Text, StyleSheet } from "react-native";
import React from "react";


const Landing = () => {
    return (
        <View style={styles.container}>
            <Text>Landing Screen</Text>
        </View> 
    );
};

export default Landing;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
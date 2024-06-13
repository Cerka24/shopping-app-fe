import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Header from "./header-component";
import { StatusBar } from "expo-status-bar";
import Footer from "./footer-component";


const Layout = ({ children }) => {
    return (
        <>
        <StatusBar />
        <Text>{children} </Text>
        </> 
    );
};

export default Layout;
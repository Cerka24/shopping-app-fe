import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Header from "./header-component";
import Footer from "./footer-component";
import { StatusBar } from "expo-status-bar";


const Layout = ({ children }) => {
    return (
        <>
        <StatusBar />
        <Header />
        <Text>{children} </Text>
        <Footer/>
        </> 
    );
};

export default Layout;
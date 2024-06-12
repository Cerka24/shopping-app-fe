import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";
import React, {useState} from "react";
import InputBox from "../../components/Form/InputBox";


const Login = ({navigation}) => {

    
    const loginImage = require('../../assets/login.png');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    // login function
    const handleLogin = () => {
        if(!email || !password){
            return alert("Please add email or password");
        }
        alert("Login Successfully");
        navigation.navigate('landing');
    }
    return (
        <View style={styles.container}>
            <Image source={loginImage} style={styles.image} />

            <View style={styles.textContainer}>
                <Text style={styles.boldText}>Welcome Back! </Text>
                <Text>Please sign in to continue to your account. </Text>
            </View>
            <InputBox placeholder={"Enter Your Email"} 
            value={email} 
            setValue={setEmail}
            autoComplete={"email"}/>
            <InputBox 
            value={password} 
            setValue={setPassword}
            placeholder={"Enter Your Password"} 
            secureTextEntry={true}/>
            {/* <TextInput style={styles.input} /> */}
            <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
             <Text style={styles.loginBtnText}>Sign In </Text>
            </TouchableOpacity>
            <Text> You don't have an account? 
            <Text style={styles.registerBtn} onPress={() => navigation.navigate("register")}> Click to sign up. </Text>
            </Text>
            </View>
        
        </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        // alignItems: "center",
        justifyContent: "center",
        height: "100%",
        backgroundColor: "#ffffff",
    },
    image: {
        height: 200,
        width: "100%",
        resizeMode: "contain",
    },
    textContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        marginBottom: 25,
        backgroundColor: "#ffffff",
    },
    boldText: {
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 10,
    },
    btnContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    loginBtn: {
        backgroundColor: "#000000",
        width: "80%",
        justifyContent: "center",
        height: 40,
        borderRadius: 10,
        alignItems: "center",
        marginHorizontal: 20,
        marginVertical: 20,
    },
    loginBtnText: {
        color: "#ffffff",
        textAlign: "center",
        fontWeight: "500",
        fontSize: 16,
    }, 
    registerBtn: {
        color: "#1E90FF",
    }
  });
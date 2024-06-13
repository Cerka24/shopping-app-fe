import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView } from "react-native";
import React, {useState} from "react";
import InputBox from "../../components/Form/InputBox";


const Register = ({navigation}) => {

    
const loginImage = require('../../assets/register.jpg');
const [email, setEamil] = useState("");
const [password, setPassword] = useState("");
const [name, setName] = useState("");
const [address, setAddress] = useState("");
const [city, setCity] = useState("");
const [phone, setPhone] = useState("");
//   const [answer, setAnswer] = useState("");
const [country, setCountry] = useState("Bosnia and Herzegovina");

    // register function
    const handleRegister = () => {
    // validation
    if (!email || !password || !name || !address || !city || !phone) {
      return alert("To proceed with creating your account, please ensure all required fields in the form are completed.");
    }
    navigation.navigate("login");
    }

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.container}>
                <Image source={loginImage} style={styles.image} />

                <View style={styles.textContainer}>
                    <Text style={styles.boldText}>Hello! Welcome to <Text style={styles.gadgetShop}>GadgetShop</Text> </Text>
                    <Text>Please sign up to create your account. </Text>
                </View>
                <InputBox
                    placeholder={"Enter Your Name"}
                    value={name}
                    setValue={setName}
                    autoComplete={"name"}
                />
                <InputBox
                    placeholder={"Enter Your Email"}
                    value={email}
                    setValue={setEamil}
                    autoComplete={"email"}
                />
                <InputBox
                    value={password}
                    setValue={setPassword}
                    placeholder={"Enter Your Password"}
                    secureTextEntry={true}
                />
                <InputBox
                    placeholder={"Enter Your City"}
                    value={city}
                    setValue={setCity}
                    autoComplete={"country"}
                />
                <InputBox
                    placeholder={"Enter Your Address"}
                    value={address}
                    setValue={setAddress}
                    autoComplete={"address-line1"}
                />
                <InputBox
                    placeholder={"Enter Your Contact"}
                    value={phone}
                    setValue={setPhone}
                    autoComplete={"name"}
                />
                {/* <InputBox
                    placeholder={"Enter You favrite dish"}
                    value={answer}
                    setValue={setAnswer}
                    autoComplete={"name"}
                /> */}
                <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.loginBtn} onPress={handleRegister}>
                <Text style={styles.loginBtnText}>Sign Up </Text>
                </TouchableOpacity>
                <Text> You already have an account? 
                <Text style={styles.registerBtn} onPress={() => navigation.navigate("login")}> Click to sign in. </Text>
                </Text>
                </View>
            </View>
        </ScrollView>
    );
};

export default Register;

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        justifyContent: "center",
    },
    container: {
        justifyContent: "center",
        height: "100%",
        backgroundColor: "#ffffff",
    },
    image: {
        height: 200,
        width: "100%",
        resizeMode: "contain",
    },
    gadgetShop: {
        color: "#1E90FF",
    },
    textContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        marginBottom: 10,
        backgroundColor: "#ffffff",
    },
    boldText: {
        fontWeight: 'bold',
        fontSize: 19.5,
        textAlign: "center",
        marginBottom: 5,

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
        marginVertical: 10,
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
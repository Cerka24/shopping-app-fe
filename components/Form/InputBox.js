import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";

const InputBox = ({ 
    value,
    setValue,
    autoComplete, 
    placeholder, 
    secureTextEntry,
    style // Accept custom styles as a prop
  }) => {
    return (
        <View style={[styles.container, style]}>
            <TextInput 
            style={styles.input} 
            autoComplete={autoComplete} 
            placeholder={placeholder}
            autoCorrect={false}
            secureTextEntry={secureTextEntry}
            value={value}
            onChangeText={(text) => setValue(text) }
            />
        </View>
    );
};

export default InputBox;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    width: "100%", // Ensure container takes full width
  },
  input: {
    width: "100%", // Ensure input takes full width of the container
    backgroundColor: "#ffffff",
    height: 40,
    paddingLeft: 15,
    borderRadius: 30,
    color: "#000000",
    borderWidth: 1,
    borderColor: "gray",
  }
});


// import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";
// import React from "react";


// const InputBox = ({ 
//     value,
//     setValue,
//     autoComplete, 
//     placeholder, 
//     secureTextEntry }) => {
//     return (
//         <View style={styles.container}>
//             <TextInput 
//             style={styles.input} 
//             autoComplete={autoComplete} 
//             placeholder={placeholder}
//             autoCorrect={false}
//             secureTextEntry={secureTextEntry}
//             value={value}
//             onChangeText={(text) => setValue(text) }
//             />
//         </View>
//     );
// };

// export default InputBox;

// const styles = StyleSheet.create({
//     container: {
//         alignItems: "center",
//         justifyContent: "center",
//         marginVertical: 10,
//     },
//     input: {
//         width: "80%",
//         backgroundColor: "#ffffff",
//         height: 40,
//         paddingLeft: 15,
//         borderRadius: 30,
//         color: "#000000",
//         borderWidth: 1,
//         borderColor: "gray",
//     }
//   });
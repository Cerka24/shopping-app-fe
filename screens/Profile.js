import { View, Text, StyleSheet, ScrollView, Image, Pressable, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Layout from "../components/layout-components/layout-component";
import { userData } from "../data/userData";
import InputBox from "../components/Form/InputBox";

const Profile = ({ navigation }) => {
  // state
  const [email, setEmail] = useState(userData.email);
  const [profilePic, setProfilePic] = useState(userData.profilePic);
  const [password, setPassword] = useState(userData.password);
  const [name, setName] = useState(userData.name);
  const [address, setAddress] = useState(userData.address);
  const [city, setCity] = useState(userData.city);
  const [contact, setContact] = useState(userData.contact);

  // update profile
  const handleUpdate = () => {
    if (!email || !password || !name || !address || !city || !contact) {
      return alert("Please provide all fields.");
    }
    alert("Profile updated successfully.");
    navigation.navigate("account");
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Layout>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={{ uri: profilePic }} />
            <Pressable onPress={() => alert("Updating of your profile image was unsuccessful.")}>
              <Text style={{ color: "#1E90FF" }}>Update your profile image </Text>
            </Pressable>
          </View>
          <InputBox
            value={name}
            setValue={setName}
            placeholder={"Enter your name"}
            autoComplete={"name"}
            style={styles.inputBox}
          />
          <InputBox
            value={email}
            setValue={setEmail}
            placeholder={"Enter your email"}
            autoComplete={"email"}
            style={styles.inputBox}
          />
          <InputBox
            value={password}
            setValue={setPassword}
            placeholder={"Enter your password"}
            autoComplete={"password"}
            secureTextEntry={true}
            style={styles.inputBox}
          />
          <InputBox
            value={address}
            setValue={setAddress}
            placeholder={"Enter your address"}
            autoComplete={"address-line1"}
            style={styles.inputBox}
          />
          <InputBox
            value={city}
            setValue={setCity}
            placeholder={"Enter your city"}
            autoComplete={"country"}
            style={styles.inputBox}
          />
          <InputBox
            value={contact}
            setValue={setContact}
            placeholder={"Enter your contact "}
            autoComplete={"tel"}
            style={styles.inputBox}
          />
          <TouchableOpacity style={styles.btnUpdate} onPress={handleUpdate}>
            <Text style={styles.btnUpdateText}>Update profile </Text>
          </TouchableOpacity>
        </View>
      </Layout>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        backgroundColor: "#ffffff",
      },
      ccontainer: {
        justifyContent: "center",
        alignItems: "center", 
        backgroundColor: "#ffffff",
        paddingHorizontal: 40,
        paddingVertical: 20,
      },
      imageContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20,
      },
      image: {
        height: 100,
        width: 100,
        borderRadius: 50,
        marginBottom: 20,
      },
      centeredTextContainer: {
        justifyContent: "center",
        alignItems: "flex-start",
        marginBottom: 20,
        paddingHorizontal: 20,
      },
      name: {
        fontSize: 20,
        marginBottom: 10,
      },
      btnContainer: {
        width: "90%",
        padding: 20,
        paddingHorizontal: 75,
        backgroundColor: "#ffffff",
        borderRadius: 10,
        elevation: 5,
      },
      heading: {
        fontSize: 20,
        fontWeight: "bold",
        paddingBottom: 10,
        textAlign: "center",
        borderBottomWidth: 1,
        borderColor: "lightgray",
        marginBottom: 10,
      },
      inputBox: {
        width: "80%",
        marginHorizontal: 35,
    },
      btnUpdate: {
        backgroundColor: "#000000",
        color: "#ffffff",
        height: 50,
        borderRadius: 30,
        justifyContent: "center",
        marginHorizontal: 40,
        marginTop: 20,
        width: 280, 
        alignSelf: "center",
        },
      btnIcon: {
        fontSize: 20,
        marginRight: 10,
      },
      btnUpdateText: {
        color: "#ffffff",
        fontSize: 15,
        textAlign: "center",
        },
});

export default Profile;






// import { View, Text, StyleSheet, ScrollView, Image, Pressable, TouchableOpacity } from "react-native";
// import React, { useState } from "react";
// import Layout from "../components/layout-components/layout-component";
// import { userData } from "../data/userData";
// import InputBox from "../components/Form/InputBox";

// const Profile = ({ navigation }) => {
//   //state
//   const [email, setEmail] = useState(userData.email);
//   const [profilePic, setProfilePic] = useState(userData.profilePic);
//   const [password, setPassword] = useState(userData.password);
//   const [name, setName] = useState(userData.name);
//   const [address, setAddress] = useState(userData.address);
//   const [city, setCity] = useState(userData.city);
//   const [contact, setContact] = useState(userData.contact);

//   //   update profile
//   const handleUpdate = () => {
//     if (!email || !password || !name || !address || !city || !contact) {
//       return alert("Please provide all fields");
//     }
//     alert("Profile updated successfully");
//     navigation.navigate("account");
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.scrollContainer}>
//     <Layout>
//         <View style={styles.container}>
//           <View style={styles.imageContainer}>
//             <Image style={styles.image} source={{ uri: profilePic }} />
//             <Pressable onPress={() => alert("profile dialog box")}>
//               <Text style={{ color: "#1E90FF" }}>Update your profile image </Text>
//             </Pressable>
//           </View>
//           <InputBox
//             value={name}
//             setValue={setName}
//             placeholder={"Enter your name"}
//             autoComplete={"name"}
//             style={styles.inputBox}
//           />
//           <InputBox
//             value={email}
//             setValue={setEmail}
//             placeholder={"Enter your email"}
//             autoComplete={"email"}
//             style={styles.inputBox}
//           />
//           <InputBox
//             value={password}
//             setValue={setPassword}
//             placeholder={"Enter your password"}
//             autoComplete={"password"}
//             secureTextEntry={true}
//             style={styles.inputBox}
//           />
//           <InputBox
//             value={address}
//             setValue={setAddress}
//             placeholder={"Enter your address"}
//             autoComplete={"address-line1"}
//             style={styles.inputBox}
//           />
//           <InputBox
//             value={city}
//             setValue={setCity}
//             placeholder={"Enter your city"}
//             autoComplete={"country"}
//             style={styles.inputBox}
//           />
//           <InputBox
//             value={contact}
//             setValue={setContact}
//             placeholder={"Enter your contact "}
//             autoComplete={"tel"}
//             style={styles.inputBox}
//           />
//           <TouchableOpacity style={styles.btnUpdate} onPress={handleUpdate}>
//             <Text style={styles.btnUpdateText}>Update profile </Text>
//           </TouchableOpacity>
//         </View>
//     </Layout>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//     scrollContainer: {
//         flexGrow: 1,
//         backgroundColor: "#ffffff",
//       },
//       container: {
//         justifyContent: "center",
//         alignItems: "center", 
//         backgroundColor: "#ffffff",
//         paddingHorizontal: 40,
//         paddingVertical: 20,
//       },
//       imageContainer: {
//         justifyContent: "center",
//         alignItems: "center",
//         marginBottom: 20,
//       },
//       image: {
//         height: 100,
//         width: 100,
//         borderRadius: 50,
//         marginBottom: 20,
//       },
//       inputBox: {
//         height: 40,
//         borderRadius: 30,
//         justifyContent: "center",
//         marginTop: 20,
//         width: 280, // Set the same width for the button
//         alignSelf: "center",
//       },
//       btnUpdate: {
//         backgroundColor: "#000000",
//         height: 40,
//         borderRadius: 30,
//         justifyContent: "center",
//         marginTop: 20,
//         width: 280, // Set the same width for the button
//         alignSelf: "center",
//       },
//       btnUpdateText: {
//         color: "#ffffff",
//         fontSize: 18,
//         textAlign: "center",
//       },
//     });


//     // scrollContainer: {
//     //     flexGrow: 1,
//     //     backgroundColor: "#ffffff",
//     //   },
//     // container: {
//     //     justifyContent: "center",
//     //     alignItems: "flex-start", 
//     //     backgroundColor: "#ffffff",
//     //     paddingHorizontal: 40,
//     //     paddingVertical: 20,
//     //   },
//     // image: {
//     //     height: 100,
//     //     width: 100,
//     //     borderRadius: 50,
//     //     marginBottom: 20,
//     // },
//     // inputBox: {
//     //     width: "100%",
//     //     marginBottom: 20,
//     // },
//     // btnUpdate: {
//     //         backgroundColor: "#000000",
//     //         height: 40,
//     //         borderRadius: 30,
//     //         justifyContent: "center",
//     //         marginTop: 20,
//     //         paddingHorizontal: 80,
//     //         alignSelf: "center",  
//     // },
//     // btnUpdateText: {
//     //     color: "#ffffff",
//     //     fontSize: 18,
//     //     textAlign: "center",
//     // },
//     // });
    

// export default Profile;
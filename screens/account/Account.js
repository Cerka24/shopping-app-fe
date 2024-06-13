// import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
// import React from "react";
// import Layout from "../../components/layout-components/layout-component";
// import { userData } from "../../data/userData";
// import AntDesign from "react-native-vector-icons/AntDesign";

// const Account = ({ navigation }) => {
//   return (
//     <ScrollView contentContainerStyle={styles.scrollContainer}>
//     <Layout>
//         <View style={styles.container}>
//             <View style={styles.imageContainer}>
//             <Image source={{ uri: userData.profilePic }} style={styles.image} />
//             <View style={styles.centeredTextContainer}>
//                 <Text style={styles.name}>
//                 Hi
//                 <Text style={{ color: "#1E90FF" }}> {userData.name} </Text> 👋
//                 </Text>
//                 <Text>email : {userData.email} </Text>
//                 <Text>contact : {userData.contact} </Text>
//             </View>
            
//             <View style={styles.btnContainer}>
//                 <Text style={styles.heading}>Account Setting </Text>
//                 <TouchableOpacity
//                 style={styles.btn}
//                 onPress={() => navigation.navigate("profile", { id: userData._id })}
//                 >
//                 <AntDesign style={styles.btnIcon} name="edit" />
//                 <Text style={styles.btnText}>Edit Profile </Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity
//                 style={styles.btn}
//                 onPress={() =>
//                     navigation.navigate("orders", { id: userData._id })
//                 }
//                 >
//                 <AntDesign style={styles.btnIcon} name="bars" />
//                 <Text style={styles.btnText}>My Orders </Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity
//                 style={styles.btn}
//                 onPress={() => navigation.navigate("notifications")}
//                 >
//                 <AntDesign style={styles.btnIcon} name="bells" />
//                 <Text style={styles.btnText}>Notification </Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity
//                 style={styles.btn}
//                 onPress={() =>
//                     navigation.navigate("admin", { id: userData._id })
//                 }
//                 >
//                 <AntDesign style={styles.btnIcon} name="windows" />
//                 <Text style={styles.btnText}>Admin Panel </Text>
//                 </TouchableOpacity>
//             </View>
//             </View>
//         </View>
//     </Layout>
//     </ScrollView>
//   );
// };


// export default Account;

// import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
// import React, { useState, useEffect } from "react";
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import Layout from "../../components/layout-components/layout-component";
// import AntDesign from "react-native-vector-icons/AntDesign";

// const Account = ({ navigation }) => {
//   const [userData, setUserData] = useState({});

//   useEffect(() => {
//     const loadUserData = async () => {
//       const data = JSON.parse(await AsyncStorage.getItem('userData'));
//       if (data) {
//         setUserData(data);
//       }
//     };
//     loadUserData();
//   }, []);

//   return (
//     <ScrollView contentContainerStyle={styles.scrollContainer}>
//       <Layout>
//         <View style={styles.container}>
//           <View style={styles.imageContainer}>
//             <Image source={{ uri: userData.profilePic }} style={styles.image} />
//             <View style={styles.centeredTextContainer}>
//               <Text style={styles.name}>
//                 Hi
//                 <Text style={{ color: "#1E90FF" }}> {userData.name} </Text> 👋
//               </Text>
//               <Text>email : {userData.email} </Text>
//               <Text>contact : {userData.contact} </Text>
//             </View>
//             <View style={styles.btnContainer}>
//               <Text style={styles.heading}>Account Setting </Text>
//               <TouchableOpacity
//                 style={styles.btn}
//                 onPress={() => navigation.navigate("profile", { id: userData._id })}
//               >
//                 <AntDesign style={styles.btnIcon} name="edit" />
//                 <Text style={styles.btnText}>Edit Profile </Text>
//               </TouchableOpacity>
//               <TouchableOpacity
//                 style={styles.btn}
//                 onPress={() => navigation.navigate("orders", { id: userData._id })}
//               >
//                 <AntDesign style={styles.btnIcon} name="bars" />
//                 <Text style={styles.btnText}>My Orders </Text>
//               </TouchableOpacity>
//               <TouchableOpacity
//                 style={styles.btn}
//                 onPress={() => navigation.navigate("notifications")}
//               >
//                 <AntDesign style={styles.btnIcon} name="bells" />
//                 <Text style={styles.btnText}>Notification </Text>
//               </TouchableOpacity>
//               <TouchableOpacity
//                 style={styles.btn}
//                 onPress={() =>
//                     navigation.navigate("admin", { id: userData._id })
//                 }
//                 >
//                 <AntDesign style={styles.btnIcon} name="windows" />
//                 <Text style={styles.btnText}>Admin Panel </Text>
//                 </TouchableOpacity>
//             </View>
//           </View>
//         </View>
//       </Layout>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   scrollContainer: {
//     flexGrow: 1,
//     backgroundColor: "#ffffff",
//   },
//   container: {
//     justifyContent: "center",
//     alignItems: "center", 
//     backgroundColor: "#ffffff",
//     paddingHorizontal: 40,
//     paddingVertical: 20,
//   },
//   imageContainer: {
//     justifyContent: "center",
//     alignItems: "center",
//     marginBottom: 20,
//   },
//   image: {
//     height: 100,
//     width: 100,
//     borderRadius: 50,
//     marginBottom: 20,
//   },
//   centeredTextContainer: {
//     justifyContent: "center",
//     alignItems: "center",
//     marginBottom: 20,
//     paddingHorizontal: 20,
//     marginHorizontal: 20,
//   },
//   name: {
//     fontSize: 20,
//     marginBottom: 10,
//   },
//   btnContainer: {
//     width: "100%",
//     padding: 25,
//     paddingHorizontal: 75,
//     marginHorizontal: 20,
//     backgroundColor: "#ffffff",
//     borderRadius: 10,
//     elevation: 5,
//   },
//   heading: {
//     fontSize: 20,
//     fontWeight: "bold",
//     paddingBottom: 10,
//     textAlign: "center",
//     borderBottomWidth: 1,
//     borderColor: "lightgray",
//     marginBottom: 10,
//   },
//   btn: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginVertical: 10,
//     padding: 10,
//     backgroundColor: "#ffffff",
//     borderRadius: 5,
//   },
//   btnIcon: {
//     fontSize: 20,
//     marginRight: 10,
//   },
//   btnText: {
//     fontSize: 15,
//   },
// });


// export default Account;
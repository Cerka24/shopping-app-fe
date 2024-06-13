import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import AntDesign from "react-native-vector-icons/AntDesign";


const Footer = () => {
    const route = useRoute();
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.menuContainer}
            onPress={() => navigation.navigate("home")}
          >
            <AntDesign
              style={[styles.icon, route.name === "home" && styles.active]}
              name="home"
            />
            <Text style={[styles.iconText, route.name === "home" && styles.active]}>
              Home
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuContainer}
            onPress={() => navigation.navigate("notifications")}
          >
            <AntDesign
              style={[styles.icon, route.name === "notifications" && styles.active]}
              name="bells"
            />
            <Text
              style={[
                styles.iconText,
                route.name === "notifications" && styles.active,
              ]}
            >
              notification
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuContainer}
            onPress={() => navigation.navigate("account")}
          >
            <AntDesign
              style={[styles.icon, route.name === "account" && styles.active]}
              name="user"
            />
            <Text
              style={[styles.iconText, route.name === "account" && styles.active]}
            >
              Account
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuContainer}
            onPress={async () => {
              dispatch(logout());
              await AsyncStorage.removeItem("@auth");
            }}
          >
            <AntDesign style={styles.icon} name="logout" />
            <Text style={styles.iconText}>Logout</Text>
          </TouchableOpacity>
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        backgroundColor: "#ffffff",
      },
      menuContainer: {
        alignItems: "center",
        justifyContent: "center",
      },
      icon: {
        fontSize: 25,
        color: "#000000",
      },
      iconText: {
        color: "#000000",
        fontSize: 10,
      },
      active: {
        color: "blue",
      },
    });
    export default Footer;

// import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
// import React from "react";
// import AntDesign from "react-native-vector-icons/AntDesign";
// import { useRoute, useNavigation } from "@react-navigation/native";
// import { useReduxStateHook } from "../../hooks/customHooks";
// import { useDispatch } from "react-redux";
// // import { logout } from "../../redux/features/auth/userActions";
// // import AsyncStorage from "@react-native-async-storage/async-storage";


// const Footer = () => {

//   const route = useRoute();

//   const navigation = useNavigation();

//   const dispatch = useDispatch();

//   const loading = useReduxStateHook(navigation, "login");
//     return (
//         <View style={styles.container}>
//       <TouchableOpacity
//         style={styles.menuContainer}
//         onPress={() => navigation.navigate("home")}
//       >
//         <AntDesign
//           style={[styles.icon, route.name === "home" && styles.active]}
//           name="home"
//         />
//         <Text style={[styles.iconText, route.name === "home" && styles.active]}>
//           Home
//         </Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={styles.menuContainer}
//         onPress={() => navigation.navigate("notifications")}
//       >
//         <AntDesign
//           style={[styles.icon, route.name === "notifications" && styles.active]}
//           name="bells"
//         />
//         <Text
//           style={[
//             styles.iconText,
//             route.name === "notifications" && styles.active,
//           ]}
//         >
//           notification
//         </Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={styles.menuContainer}
//         onPress={() => navigation.navigate("account")}
//       >
//         <AntDesign
//           style={[styles.icon, route.name === "account" && styles.active]}
//           name="user"
//         />
//         <Text
//           style={[styles.iconText, route.name === "account" && styles.active]}
//         >
//           Account
//         </Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={styles.menuContainer}
//         onPress={async () => {
//           dispatch(logout());
//           await AsyncStorage.removeItem("@auth");
//         }}
//       >
//         <AntDesign style={styles.icon} name="logout" />
//         <Text style={styles.iconText}>Logout</Text>
//       </TouchableOpacity>
//     </View>
//     );
// };

// export default Footer;

// const styles = StyleSheet.create({
//     container: {
//       flexDirection: "row",
//       justifyContent: "space-between",
//       paddingHorizontal: 10,
//     },
//     menuContainer: {
//       alignItems: "center",
//       justifyContent: "center",
//     },
//     icon: {
//       fontSize: 25,
//       color: "#000000",
//     },
//     iconText: {
//       color: "#000000",
//       fontSize: 10,
//     },
//     active: {
//       color: "blue",
//     },
//   });


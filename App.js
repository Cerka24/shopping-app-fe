import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Landing from './screens/LandingScreen';
import Info from './screens/InfoScreen';
import Login from './screens/auth/Login';
import Register from './screens/auth/Register';
import ProductDetails from './screens/ProductDetails';
import { Provider } from 'react-redux';
import store from "./redux/store";

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='login'>
          <Stack.Screen name="landing" component={Landing} options={{ headerShown:false, }}/>
          <Stack.Screen name="info" component={Info} options={{ headerShown:false, }}/>
          <Stack.Screen name="login" component={Login} options={{ headerShown:false, }}/>
          <Stack.Screen name="register" component={Register} options={{ headerShown:false, }}/>
          <Stack.Screen name="productDetails" component={ProductDetails} options={{ headerShown:false, }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

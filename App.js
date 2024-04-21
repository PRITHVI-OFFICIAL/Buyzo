import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import Home from './screens/Home';
import Products from './screens/Products';
import UserProfile from './screens/UserProfile';
import ProductDetailsScreen from './components/ProductDetailsScreen';
import Colors from './Colors';
import Login from './screens/Login';
import {useNavigation} from '@react-navigation/native';
import Signup from './screens/Signup';


const Tab = createBottomTabNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName={Login}>

      <Tab.Screen name="Login" component={Login} options={{tabBarButton: (props) => null,tabBarStyle: { display: "none"}, headerShown:false}} /> 
      <Tab.Screen name="Signup" component={Signup} options={{tabBarButton: (props) => null,tabBarStyle: { display: "none"}, headerShown:false}} /> 

      <Tab.Screen name="Home" component={Home}  options={{ tabBarIcon:({size,color,focused})=>(
            <Ionicons name="home-outline" size={25} color={focused?Colors.primary:'grey'} />
          ),}} />

      <Tab.Screen name="Products" component={Products} options={{ tabBarIcon:({size,color,focused})=>(
            <Ionicons name="cart-outline" size={25} color={focused?Colors.primary:'grey'} />
          ),}} /> 

      <Tab.Screen name="ProductDetails" component={ProductDetailsScreen} options={{ tabBarVisible: false,tabBarButton: (props) => null,tabBarStyle: { display: "none"}}} />

     
      
        
        <Tab.Screen name="UserProfile" component={UserProfile} options={{ tabBarIcon:({size,color,focused})=>(
            <Ionicons name="person-outline" size={25} color={focused?Colors.primary:'grey'} />
          ),}} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
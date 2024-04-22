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
import Carts from './screens/Carts';
import { Provider } from 'react-redux';
import store from './state/store';
import { Feather } from '@expo/vector-icons';
import { useSelector } from 'react-redux';

import Navigation from './navigation/Navigator';
const Tab = createBottomTabNavigator();

export default function App() {


  
  return (
    <Provider store={store}>

      <Navigation/>


    </Provider>
  );
}
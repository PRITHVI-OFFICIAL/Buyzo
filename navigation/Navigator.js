import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import Home from '../screens/Home';
import Products from '../screens/Products';
import UserProfile from '../screens/UserProfile';
import ProductDetailsScreen from '../components/ProductDetailsScreen';
import Colors from '../Colors';
import Login from '../screens/Login';
import {useNavigation} from '@react-navigation/native';
import Signup from '../screens/Signup';
import Carts from '../screens/Carts';
import { Provider } from 'react-redux';
import store from '../state/store';
import { Feather } from '@expo/vector-icons';
import { useSelector } from 'react-redux';
import Payment from '../screens/Payment';
import BookedHistory from '../screens/BookedHistory';
import axios from 'axios';
import SplashScreen from '../screens/Spashscreen';


const Tab = createBottomTabNavigator();




function HomeStack(){

  const cartItems=useSelector(state=>state.cart.cartItems);

    console.log(cartItems.length);

  return(
    <Tab.Navigator initialRouteName={Login} screenOptions={
        
      {
        tabBarStyle:  { height: 60},
        tabBarLabelStyle:{paddingBottom:8},
        tabBarActiveTintColor: Colors.primary,
      }
    }>
  
  
    <Tab.Screen name="Home" component={Home}  options={{ tabBarIcon:({size,color,focused})=>(
          <Ionicons name="home-outline" size={25} color={focused?Colors.primary:'grey'} />
        ),}} />
  
     <Tab.Screen name="Products" component={Products} options={{ tabBarIcon:({size,color,focused})=>(
         
          <Feather name="shopping-bag" size={24}  color={focused?Colors.primary:'grey'} />
        ),}} /> 
  
      <Tab.Screen name="Carts" component={Carts} options={{ tabBarIcon:({size,color,focused})=>(
         <View>
          <View style={{height:20,width:20,backgroundColor:'red',borderRadius:30,top:10,left:15,justifyContent:'center',alignItems:'center'}}>
          <Text style={{color:'white',fontSize:12}}>{cartItems.length}</Text>
          </View>
           <Ionicons name="cart-outline" size={25} color={focused?Colors.primary:'grey'} />
         </View>
        ),}}
      />
  
    <Tab.Screen name="BookedHistory" component={BookedHistory}  options={{ tabBarIcon:({size,color,focused})=>(
          <Ionicons name="clipboard-outline" size={25} color={focused?Colors.primary:'grey'} />
        ),}} />
  
      
    <Tab.Screen name="ProductDetails" component={ProductDetailsScreen} options={{ tabBarVisible: false,tabBarButton: (props) => null,}} />
    
    <Tab.Screen name="Payments" component={Payment} options={{ tabBarVisible: false,tabBarButton: (props) => null,}} />
  
      <Tab.Screen name="UserProfile" component={UserProfile} options={{ tabBarIcon:({size,color,focused})=>(
          <Ionicons name="person-outline" size={25} color={focused?Colors.primary:'grey'} />
      ),}} />
  
    
    </Tab.Navigator>
  )
}

function AuthStack(){

      return(

        <Tab.Navigator initialRouteName={SplashScreen} screenOptions={

          {
            tabBarStyle:  { height: 60},
            tabBarLabelStyle:{paddingBottom:8},
          }
      }>
        <Tab.Screen name="SplashScreen" component={SplashScreen} options={{tabBarButton: (props) => null,tabBarStyle: { display: "none"}, headerShown:false}} /> 
         <Tab.Screen name="Login" component={Login} options={{tabBarButton: (props) => null,tabBarStyle: { display: "none"}, headerShown:false}} /> 
         <Tab.Screen name="Signup" component={Signup} options={{tabBarButton: (props) => null,tabBarStyle: { display: "none"}, headerShown:false}} /> 
      
      </Tab.Navigator>
      )


}

export default function Navigation() {

    
    
  
const authallow=useSelector(state=>state.auth.allow);
console.log(authallow);
  
  return (
    
   // {authallow?<HomeStack/>:<AuthStack/>}

    <NavigationContainer>
     {authallow?<HomeStack/>:<AuthStack/>}
    </NavigationContainer>


  );
}
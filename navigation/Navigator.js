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


const Tab = createBottomTabNavigator();

export default function Navigation() {

    const cartItems=useSelector(state=>state.cart.cartItems);

    console.log(cartItems.length);
    

  
  return (
    

<NavigationContainer>
      <Tab.Navigator initialRouteName={Home} screenOptions={
        
        {
          tabBarStyle:  { height: 60},
          tabBarLabelStyle:{paddingBottom:8},
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
        
      <Tab.Screen name="ProductDetails" component={ProductDetailsScreen} options={{ tabBarVisible: false,tabBarButton: (props) => null,}} />
      
      <Tab.Screen name="Payments" component={Payment} options={{ tabBarVisible: false,tabBarButton: (props) => null,}} />

        <Tab.Screen name="UserProfile" component={UserProfile} options={{ tabBarIcon:({size,color,focused})=>(
            <Ionicons name="person-outline" size={25} color={focused?Colors.primary:'grey'} />
        ),}} />



      <Tab.Screen name="Login" component={Login} options={{tabBarButton: (props) => null,tabBarStyle: { display: "none"}, headerShown:false}} /> 
      <Tab.Screen name="Signup" component={Signup} options={{tabBarButton: (props) => null,tabBarStyle: { display: "none"}, headerShown:false}} /> 
      </Tab.Navigator>
    </NavigationContainer>


  );
}
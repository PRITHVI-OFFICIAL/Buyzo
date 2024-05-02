import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,Image,Alert,ActivityIndicator } from 'react-native';
import Colors from '../Colors';
import {useNavigation} from '@react-navigation/native';
import { useSelector,useDispatch } from 'react-redux';
import { auth } from '../state/actions';
import axios from 'axios';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const Login = () => {


const navigation=useNavigation();
setTimeout(() => {
    navigation.navigate('Login')
  }, 5000);

return (

    
        <View style={styles.container}>

            <Image source={require('../assets/buyzo-ani.gif')} style={{width:500,height:150,marginRight:10}}/>


            {/* <ActivityIndicator size={'small'} color={"white"} style={{paddingTop:100}}/> */}

           </View>
      
    );
 };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary,
        padding:20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    
});

export default Login;
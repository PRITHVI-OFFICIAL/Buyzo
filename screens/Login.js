import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,Image,Alert } from 'react-native';
import Colors from '../Colors';
import {useNavigation} from '@react-navigation/native';
import { useSelector,useDispatch } from 'react-redux';
import { auth } from '../state/actions';
import axios from 'axios';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const Login = () => {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [showPassword, setShowPassword] = useState(false); 

const dispatch=useDispatch();



const BASE_URL = 'https://nodemongo-wwr6.onrender.com';


const toggleShowPassword = () => { 
    setShowPassword(!showPassword); 
}; 

const handleLogin = async () => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, {
      username,
      password,
    });
    dispatch(auth(true));
  } catch (error) {
   
    Alert.alert(
        'Login Failed',
        'Please check your username and Password',
        [
          {text: 'OK'},
        ],
        { cancelable: false }
      )
    dispatch(auth(false));
  }
};



const navigation=useNavigation();

return (
        <View style={styles.container}>
            <Image source={require('../assets/buyzo3.png')} style={{ width: 350, height: 150,resizeMode:'cover',alignSelf:'center',marginTop:130,marginRight:20}}/>
           
        
           <Text style={styles.logo}>Sign in to your account</Text>

           <View style={{}} >
           <Text style={{fontWeight:'bold',marginLeft:15,fontSize:15,color:Colors.primary}}>Email Address</Text>
           <View style={styles.inputView}>
           
                <TextInput
                    style={styles.inputText}
                    placeholder="Enter your email address"
                    placeholderTextColor={Colors.gray}
                    onChangeText={text => setUsername(text)}
                />
            </View>

            <Text style={{fontWeight:'bold',marginLeft:15,fontSize:15,color:Colors.primary}}>Password</Text>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    placeholder="Enter your Password"
                    placeholderTextColor={Colors.gray}
                    secureTextEntry={showPassword}
                    onChangeText={text => setPassword(text)}
                />
                <MaterialCommunityIcons 
                    name={showPassword ? 'eye-off' : 'eye'} 
                    size={24} 
                    color={Colors.primary}
                    style={{margin:10}} 
                    onPress={toggleShowPassword} 
                /> 
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center', marginBottom: 10 }}>
            <Text style={{ color: 'gray', fontWeight: '500', fontSize: 14 }}>Don't have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                <Text style={{ color: Colors.primary, fontWeight: '600', fontSize: 14 }}> Sign Up</Text>
            </TouchableOpacity>
        </View>
            <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
                <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
           </View>
           <Text style={{ color: 'gray', fontWeight: '400', fontSize: 15,textAlign:'center',marginTop:15 }}>other way to sign in </Text>
          <View style={{flexDirection:'row',gap:10,alignSelf:'center',marginTop:15}}>
        <Image source={require('../assets/google.png')} style={{width:25,height:25}}/>
        <Image source={require('../assets/facebook-icon.png')} style={{width:25,height:25}}/>
          </View>
           </View>
      
    );
 };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding:20
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    logo: {
        textAlign:'center',
        fontWeight: '500',
        fontSize: 30,
        color: '#002F6D',
        marginBottom: 40,
    },
    inputView: {
        flexDirection:'row',
        margin:10,
        marginTop:10,
        width: 350,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: Colors.gray,
        borderRadius: 15,
        height: 50,
        marginBottom: 20,
        paddingLeft: 15,
    
        justifyContent:'space-between'
    },
    inputText: {
        
        height: 50,
        color: '#003f5c',
    },
    loginBtn: {
        alignSelf:'center',
        width: '80%',
        backgroundColor: '#002F6D',
        borderRadius: 25,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        marginBottom: 10,
    },
    loginText: {
        color: 'white',
        fontSize:15
    },
});

export default Login;
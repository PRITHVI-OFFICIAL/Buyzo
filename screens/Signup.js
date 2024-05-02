import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,Image,Alert } from 'react-native';
import Colors from '../Colors';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import { useSelector,useDispatch } from 'react-redux';
import {auth} from '../state/actions';
import {MaterialCommunityIcons} from '@expo/vector-icons';

const Signup = () => {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [confirmpassword, setconfirmPassword] = useState('');
const [showPassword, setShowPassword] = useState(false); 
const dispatch=useDispatch();

// const handleSignup = () => {
// // Implement your login logic here
// console.log('Username:', username);
// console.log('Password:', password);
// };

const navigation=useNavigation();
const BASE_URL = 'https://nodemongo-wwr6.onrender.com';




const toggleShowPassword = () => { 
    setShowPassword(!showPassword); 
}; 

const handleSignup = async () => {
    if(username!='' && username.includes('@gmail.com') && (password===confirmpassword)){
        try {
            const response = await axios.post(`${BASE_URL}/signup`, {
              username,
              password,
            });
        
            dispatch(auth(true));
          } catch (error) {
              
            Alert.alert(
              'Signup Failed',
              'UserName Already Exists or Server Error',
              [
                {text: 'OK'},
              ],
              { cancelable: false }
            )
            dispatch(auth(false));
          }
    }
    else{

        Alert.alert(
            'Check your Details',
            'Details not entered properly',
            [
              {text: 'OK'},
            ],
            { cancelable: false }
          )


    }
  };


return (
    <View style={styles.container}>
        <Image source={require('../assets/buyzo3.png')} style={{ width: 350, height: 150, resizeMode: 'cover', alignSelf: 'center', marginTop: 100, marginRight: 20 }} />


        <Text style={styles.logo}>Create new account</Text>

        <View style={{}} >
            <Text style={{ fontWeight: 'bold', marginLeft: 15, fontSize: 15, color: Colors.primary }}>Username</Text>
            <View style={styles.inputView}>

                <TextInput
                    style={styles.inputText}
                    placeholder="Enter your email address"
                    placeholderTextColor={Colors.gray}
                    onChangeText={text => setUsername(text)}
                />
            </View>

            <Text style={{ fontWeight: 'bold', marginLeft: 15, fontSize: 15, color: Colors.primary }}>Password</Text>

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

            <Text style={{ fontWeight: 'bold', marginLeft: 15, fontSize: 15, color: Colors.primary }}>Confirm Password</Text>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    placeholder="Enter your Confirm Password"
                    placeholderTextColor={Colors.gray}
                    secureTextEntry={showPassword}
                    onChangeText={text => setconfirmPassword(text)}
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
                <Text style={{ color: 'gray', fontWeight: '500', fontSize: 14 }}>Already having Account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={{ color: Colors.primary, fontWeight: '600', fontSize: 14 }}> Sign in</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.loginBtn} onPress={handleSignup}>
                <Text style={styles.loginText}>Sign Up</Text>
            </TouchableOpacity>
        </View>
        <Text style={{ color: 'gray', fontWeight: '400', fontSize: 15, textAlign: 'center', marginTop: 15 }}>other way to sign up </Text>
        <View style={{ flexDirection: 'row', gap: 10, alignSelf: 'center', marginTop: 15 }}>
            <Image source={require('../assets/google.png')} style={{ width: 25, height: 25 }} />
            <Image source={require('../assets/facebook-icon.png')} style={{ width: 25, height: 25 }} />
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
    },
});

export default Signup;
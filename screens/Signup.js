import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Colors from '../Colors';
import {useNavigation} from '@react-navigation/native';



const Signup = () => {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');

const handleSignup = () => {
// Implement your login logic here
console.log('Username:', username);
console.log('Password:', password);
};

const navigation=useNavigation();

return (
        <View style={styles.container}>
            <Text style={styles.logo}>Signup</Text>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    placeholder="Username"
                    placeholderTextColor="#003f5c"
                    onChangeText={text => setUsername(text)}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    placeholder="Password"
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    onChangeText={text => setPassword(text)}
                />
            </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center', marginBottom: 10 }}>
            <Text style={{ color: 'gray', fontWeight: '600', fontSize: 14 }}>Already Having Acccount? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={{ color: Colors.primary, fontWeight: '600', fontSize: 14 }}> Login</Text>
            </TouchableOpacity>
        </View>

            <TouchableOpacity style={styles.loginBtn} onPress={handleSignup}>
                <Text style={styles.loginText}>SIGNUP</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        fontWeight: 'bold',
        fontSize: 30,
        color: Colors.primary,
        marginBottom: 40,
    },
    inputView: {
        width: '80%',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#003f5c',
        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        justifyContent: 'center',
        padding: 20,
    },
    inputText: {
        height: 50,
        color: '#003f5c',
    },
    loginBtn: {
        width: '80%',
        backgroundColor: Colors.primary,
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
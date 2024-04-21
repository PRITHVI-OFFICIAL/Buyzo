import React from 'react';
import { Modal, View, Image, Button,Text,StyleSheet, TouchableOpacity , Dimensions } from 'react-native';
import Colors from '../Colors';
import Ionicons from '@expo/vector-icons/Ionicons';





const UserProfile = ({navigation}) => {

  
  return (
    <View>
        <Text>UserProfile Screen</Text>
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    width:"100%", 
  },
  
  heading:{
  textAlign:"center",
  fontSize:22,
  marginTop:15,
  fontWeight:"500"  
}
});
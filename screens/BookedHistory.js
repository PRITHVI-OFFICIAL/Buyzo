import React, { useState,useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet ,ScrollView,Image} from 'react-native';
import Colors from '../Colors';
import {useNavigation} from '@react-navigation/native';
import { AntDesign,Ionicons } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';



const BookedHistory = () => {

const navigation=useNavigation();

useEffect(() => {
    navigation.setOptions({
        headerLeft: () => (
            <TouchableOpacity onPress={()=>navigation.goBack()} >
              <AntDesign name="arrowleft" size={24} color="black" style={{marginLeft:15}} />
            </TouchableOpacity>
        ),
    });
}, [navigation]);


const bookedItems = useSelector(state => state.booked.bookedItems);



console.log(bookedItems);


return (
        <View style={styles.container}>
        <ScrollView style={{height:250}}>
      { bookedItems && bookedItems.map((item,index) => (
        <View key={index} style={{ height: 150, backgroundColor: 'white', marginTop: 15, flexDirection: 'row' }}>
          <View style={{ width: 150, marginTop: 15 }}>
            <Image source={{ uri: item.image }} style={{ width: '90%', height: '60%', resizeMode: 'contain' }} />
            
          </View>

          <View style={{ padding: 15, width: 235 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 13 }}>{item.title}</Text>
            <Text style={{ marginTop: 5, color: 'grey' }}>{item.category}</Text>
            <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'green', marginTop: 5 }}>₹ {parseInt(item.price)*20 * item.quantity}</Text>
            {/* <View style={{ marginTop: 10, backgroundColor: 'green', flexDirection: 'row', alignItems: 'center', width: 40, padding: 2, borderRadius: 5, }}>
              <Text style={{ fontWeight: 'bold', color: 'white', padding: 2, fontSize: 12 }}>{item.rating}</Text>
            </View> */}
            <Text style={{ marginTop: 10, color: 'grey', fontSize: 13,color:'green'}}>Delivery on Apr 27, 2024</Text>
        
          </View>
        </View>
      ))}
      </ScrollView>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
   
    },

});

export default BookedHistory;
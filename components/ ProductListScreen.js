import React from 'react';
import { Modal, View, Image, Button,Text,StyleSheet, TouchableOpacity , Dimensions } from 'react-native';
import Colors from '../Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const ProductListScreen = ({id,name,category,price,image,rating}) => {
  const navigation=useNavigation();
  return (
    
   <TouchableOpacity onPress={()=> navigation.navigate('ProductDetails',{idx:parseInt(id)})}>
    <View style={{height:170,backgroundColor:'white',marginTop:15,flexDirection:'row',}}>

          <View style={{width:150,justifyContent:'center',alignItems:'center'}}>
          <Image source={{uri: image,}} style={{ width: '90%', height: '90%',resizeMode:'contain' }}/>

          </View>

          <View style={{padding:15,width:235}}>
          <Text style={{fontWeight:'bold',fontSize:13}}>{name}</Text>

          <Text style={{marginTop:5,color:Colors.gray}}>{category}</Text>

          <Text style={{fontWeight:'bold',fontSize:20,color:'green',marginTop:5}}>₹ {parseInt(price)*20}</Text>

          <View style={{marginTop:10,backgroundColor:'green',flexDirection:'row',alignItems:'center',width:40,padding:2,borderRadius:5,}}>

          <Text style={{fontWeight:'bold',color:'white',padding:2,fontSize:12}}>{rating}</Text>
          <Ionicons name="star" size={10} color={'white'} />
          </View>

          <Text style={{marginTop:10,color:'grey',fontSize:13}}>Free Delivery within 2 days</Text>



          </View>



      </View>
   </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
  },
});

export default ProductListScreen;

import React from 'react';
import { Modal, View, Image, Button,Text,StyleSheet, TouchableOpacity , Dimensions,ScrollView } from 'react-native';
import Colors from '../Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import ProductListScreen from '../components/ ProductListScreen';
import DATA from '../product.json';
import {useNavigation} from '@react-navigation/native';




const Products = () => {

 

  console.log(DATA[0]);
  const navigation=useNavigation();
  
  return (
    <View style={styles.container}>


<View>
     <ScrollView>

     
      {DATA.map((item, index) => (
        <ProductListScreen id={index+1} key={index} name={item.title} category={item.category} image={item.image} price={item.price} rating={item.rating.rate} />
      ))}

     
     </ScrollView>

     </View>

     

     



   
      
      
        
    </View>
  );
};

export default Products;

const styles = StyleSheet.create({
  container: {
    padding:20,
    flex: 1,
    width:"100%", 
  },
  
  heading:{
  textAlign:"center",
  fontSize:22,
  marginTop:15,
  fontWeight:"500"  
}
});
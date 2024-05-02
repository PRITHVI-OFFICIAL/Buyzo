import React,{useEffect, useState}from 'react';
import { Modal, View, Image, Button,Text,StyleSheet, TouchableOpacity , Dimensions,ScrollView } from 'react-native';
import Colors from '../Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import ProductListScreen from '../components/ ProductListScreen';
import DATA from '../product.json';
import {useNavigation} from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';



const Products = () => {

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

  const [products,setproducts]=useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch('https://nodemongo-wwr6.onrender.com/products');
      const dataa = await response.json();
      console.log(dataa);
      setproducts(dataa);
      return dataa;

    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  
  return (
    <View style={styles.container}>


<View>
     <ScrollView>

     
      {products.map((item, index) => (
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
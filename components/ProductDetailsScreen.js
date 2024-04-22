import React,{useEffect} from "react";
import {View,Text,TouchableOpacity,StyleSheet,Image,Alert, ScrollView} from 'react-native';
import Colors from "../Colors";
import Ionicons from '@expo/vector-icons/Ionicons';
import DATA from '../product.json';
import { useDispatch } from 'react-redux';
import { addToCart } from '../state/actions'; 
import {useNavigation} from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

const ProductDetailsScreen = ({ route }) => {

  const navigation = useNavigation();

  useEffect(() => {
    
    navigation.setOptions({
        headerLeft: () => (
            <TouchableOpacity onPress={()=>navigation.goBack()} >
              <AntDesign name="arrowleft" size={24} color="black" style={{marginLeft:15}} />
            </TouchableOpacity>
           ),
    });
  
}, [navigation]);

  const { idx } = route.params;
  const product = DATA.find((value) => value.id === idx);
 
  console.log(product);

  const dispatch = useDispatch();

  const handleAddToCart = () => {

    const item=product; 
    item.quantity=0;
    // item.price=parseInt(item.price)*20;
    dispatch(addToCart(item)); 
    
    navigation.navigate('Carts');
    // Alert.alert(
    //   "Success","Added to Cart Successfully"
    // );
  };

 

  return(

    <View style={styles.container}>

    
    

    <ScrollView>
    <View style={{height:400,justifyContent:'center',alignItems:'center'}}>

<Image source={{uri:product.image}} style={{width:'95%',height:'95%',resizeMode:'contain',backgroundColor:'white'}}/>

</View>

<View style={{padding:20}}>

<Text style={{fontSize:20,fontWeight:'500'}}>{product.title}</Text>
<Text style={{fontSize:14,marginTop:5,color:Colors.gray}}>Category: {product.category}</Text>
{/* <Text>{idx}</Text> */}

<View style={{marginTop:10,backgroundColor:'green',flexDirection:'row',alignItems:'center',width:40,padding:2,borderRadius:5,}}>

  <Text style={{fontWeight:'bold',color:'white',padding:2,fontSize:12}}></Text>
   <Ionicons name="star" size={10} color={'white'} />
</View>

<Text style={{fontWeight:'bold',fontSize:30,color:'green',marginTop:5}}>₹ {parseInt(product.price)*20}</Text>

<Text style={{fontSize:20,fontWeight:'500',fontWeight:'bold',marginTop:10}}>Description</Text>
<Text style={{fontSize:15,marginTop:5,}}>{product.description}</Text>
</View>


<View style={{flexDirection:'row',justifyContent:'space-around',marginTop:10}}>

<TouchableOpacity onPress={handleAddToCart}>
<View style={{width:150,height:60,backgroundColor:'orange',borderRadius:10,justifyContent:'center',alignItems:'center'}}>

<Text style={{fontWeight:'bold',color:'white'}}>Add to Cart</Text>

</View>
</TouchableOpacity> 

<TouchableOpacity>
<View style={{width:150,height:60,backgroundColor:'green',borderRadius:10,justifyContent:'center',alignItems:'center'}}>
<Text style={{fontWeight:'bold',color:'white'}}>Buy Now</Text>
</View>
</TouchableOpacity>

</View>

    </ScrollView>
    </View>

  );

}

const styles=StyleSheet.create({

  container:{
    flex:1

  }


})

export default ProductDetailsScreen;
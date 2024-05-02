import React,{useEffect} from 'react';
import { View, Text, Button, Image, TouchableOpacity,ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, incrementQuantity, decrementQuantity } from '../state/actions';
import Ionicons from '@expo/vector-icons/Ionicons';
import Colors from '../Colors';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from '@expo/vector-icons';

const Carts = () => {


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


  


  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.cartItems);


  const itemCount=items.length;


  console.log(itemCount);


  const cartItems = items.filter((obj, index) => {
    return index === items.findIndex(o => obj.id === o.id);
});


const TotalAmount=cartItems.reduce((amount,item)=> amount+ ((parseInt(item.price)*20)*item.quantity),0);



  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const handleIncrement = (itemId) => {
    dispatch(incrementQuantity(itemId));
  };

  const handleDecrement = (itemId) => {
    dispatch(decrementQuantity(itemId));
  };
  return (
    <View style={{flex:1}}>
      <ScrollView style={{height:250}}>
      { cartItems && cartItems.map((item,index) => (
        <View key={index} style={{ height: 170, backgroundColor: 'white', marginTop: 15, flexDirection: 'row' }}>
          <View style={{ width: 150, marginTop: 15 }}>
            <Image source={{ uri: item.image }} style={{ width: '90%', height: '60%', resizeMode: 'contain' }} />
            <View style={{ flexDirection: 'row', marginTop: 20 ,alignSelf:'center'}}>
              <TouchableOpacity onPress={() => handleIncrement(item.id)}>
              
                <Ionicons name="add-circle" size={20} color={Colors.primary} />
              </TouchableOpacity>
              <Text style={{marginLeft:12,marginRight:10}}>{item.quantity}</Text>
              <TouchableOpacity onPress={() => handleDecrement(item.id)}>
              <Ionicons name="remove-circle" size={20} color={Colors.primary} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ padding: 15, width: 235 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 13 }}>{item.title}</Text>
            <Text style={{ marginTop: 5, color: 'grey' }}>{item.category}</Text>
            <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'green', marginTop: 5 }}>₹ {parseInt(item.price)*20 * item.quantity}</Text>
            {/* <View style={{ marginTop: 10, backgroundColor: 'green', flexDirection: 'row', alignItems: 'center', width: 40, padding: 2, borderRadius: 5, }}>
              <Text style={{ fontWeight: 'bold', color: 'white', padding: 2, fontSize: 12 }}>{item.rating}</Text>
            </View> */}
            <Text style={{ marginTop: 10, color: 'grey', fontSize: 13 }}>Free Delivery within 2 days!!</Text>
            <TouchableOpacity style={{flexDirection:'row',marginTop:10}} onPress={() => handleRemoveFromCart(item.id)}>
             <Ionicons name="trash-outline" size={15} color={'red'}/>
             <Text style={{ color: 'red'}}>Remove</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
      </ScrollView>

     <View style={{flex:1,justifyContent:'flex-end'}}>
      <View style={{height:10,elevation:5,backgroundColor:'transparent'}}></View>
     <View style={{padding:20,backgroundColor:'white'}} >
      
      <Text style={{fontSize:18,fontWeight:'bold',marginBottom:15}}>Price Details</Text>

      <View style={{flexDirection:'row',justifyContent:'space-between',}}>
        <View style={{rowGap:10}}>
          <Text>Price ({itemCount} item)</Text>
          <Text>Discount</Text>
          <Text>Delivery Charges</Text>
          <Text style={{fontWeight:'bold'}}>Total Amount</Text>
        </View>

        <View style={{rowGap:10,alignItems:'flex-end'}}>
          <Text>₹ {TotalAmount}</Text>
          <Text>10%</Text>
          <Text>20</Text>
          <Text>₹ {(TotalAmount-(TotalAmount*0.1))+20}</Text>
        </View>
      </View>

    
      <View style={{borderStyle: 'dotted',borderWidth: 1,marginTop:20,borderColor:  Colors.gray}}/>


      <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:30,}}>
      <Text style={{marginTop:5,fontSize:20,color:'green',fontWeight:'500'}}>₹ {(TotalAmount-(TotalAmount*0.1))+20}</Text>

          <TouchableOpacity onPress={()=>navigation.navigate('Payments')}>
            <View style={{ width: 120, height: 40, backgroundColor: '#fb641b',borderRadius:3, justifyContent: 'center', alignItems: 'center' }}>

              <Text style={{ fontWeight: 'bold', color: 'white' }}>Place Order</Text>

            </View>
          </TouchableOpacity> 

      </View>

      </View>

     </View>
      
    </View>
  );
};

export default Carts;

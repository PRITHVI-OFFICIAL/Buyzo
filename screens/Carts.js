import React from 'react';
import { View, Text, Button, Image, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, incrementQuantity, decrementQuantity } from '../state/actions'; // Update import
import Ionicons from '@expo/vector-icons/Ionicons';
import Colors from '../Colors';

const Carts = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);

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
    <View>
      { cartItems && cartItems.map((item,index) => (
        <View key={index} style={{ height: 170, backgroundColor: 'white', marginTop: 15, flexDirection: 'row' }}>
          <View style={{ width: 150, marginTop: 15 }}>
            <Image source={{ uri: item.image }} style={{ width: '90%', height: '50%', resizeMode: 'contain' }} />
            <View style={{ flexDirection: 'row', marginTop: 20 ,alignSelf:'center'}}>
              <TouchableOpacity onPress={() => handleIncrement(item.id)}>
              
                <Ionicons name="add-circle" size={20} color={Colors.primary} />
              </TouchableOpacity>
              <Text style={{marginLeft:10,marginRight:10}}>{item.quantity}</Text>
              <TouchableOpacity onPress={() => handleDecrement(item.id)}>
              <Ionicons name="remove-circle" size={20} color={Colors.primary} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ padding: 15, width: 235 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 13 }}>{item.name}</Text>
            <Text style={{ marginTop: 5, color: 'grey' }}>{item.category}</Text>
            <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'green', marginTop: 5 }}>₹ {item.price * item.quantity}</Text>
            {/* <View style={{ marginTop: 10, backgroundColor: 'green', flexDirection: 'row', alignItems: 'center', width: 40, padding: 2, borderRadius: 5, }}>
              <Text style={{ fontWeight: 'bold', color: 'white', padding: 2, fontSize: 12 }}>{item.rating}</Text>
            </View> */}
            <Text style={{ marginTop: 10, color: 'grey', fontSize: 13 }}>Free Delivery within 2 days</Text>
            <TouchableOpacity onPress={() => handleRemoveFromCart(item.id)}>
              <Text style={{ color: 'red', textDecorationLine: 'underline', marginTop: 10 }}>Remove</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
      <Button title="Place Order" onPress={() => {}} />
    </View>
  );
};

export default Carts;

import React ,{useEffect,useState}from 'react';
import { Modal, View, Image, Button,Text,StyleSheet, TouchableOpacity , Dimensions ,TextInput, Alert} from 'react-native';
import colors from '../Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import { AntDesign,FontAwesome,MaterialIcons  } from '@expo/vector-icons';
import FlipCard from 'react-native-flip-card'
import Colors from '../Colors';
import { useSelector, useDispatch } from 'react-redux';
import { booked } from '../state/actions';





const Payment = ({navigation}) =>  {

    const dispatch=useDispatch();

    const [number,setnumber]=useState("");
    const [date,setdate]=useState("");
    const [cvv,setcvv]=useState('•••');

    const cartItems=useSelector(state=>state.cart.cartItems);
    console.log(cartItems);

    const itemCount=cartItems.length;


  console.log(itemCount);


  function handlepayment(){

    // Alert.alert('Success', );

    Alert.alert(
        'Purchase Successful',
        'Payment Recieved Sucessfully',
        [
          {text: 'OK', onPress: ()=> {
            
            dispatch(booked())
            navigation.navigate('BookedHistory');
        

        }},
        ],
        { cancelable: false }
      )


  }


const TotalAmount=cartItems.reduce((amount,item)=> amount+ ((parseInt(item.price)*20)*item.quantity),0);
console.log(TotalAmount);

  
   return (
     <View style={styles.container}>
 
    <FlipCard 
    style={{}    }
    friction={6}
    perspective={1000}
    flipHorizontal={true}
    flipVertical={false}
    flip={false}
    // clickable={true}
    onFlipEnd={(isFlipEnd)=>{console.log('isFlipEnd', isFlipEnd)}}
   >
 
 <View style={{paddingTop:20,height:320}}>
        
          
        <Image source={require('../assets/cardfront.png')} style={{width:'95%',alignSelf:'center',height:250}}/>
        <Image source={require('../assets/visa.png')} style={{width:70,height:30,bottom:'70%',left:'75%'}}/>  
        {/* <Text style={styles.name}>{number.padEnd(12,'•')}</Text> */}

        <TextInput
        style={styles.name}
        placeholder="•••••••••••••••"
        placeholderTextColor={"white"}
        onChangeText={setnumber}
        value={number}
        maxLength={12}
        keyboardType='numeric'
      />
        <View style={{flexDirection:'row',justifyContent:'space-around',bottom:120,left:120}}>
          
          <View>
          <View >
           <Text style={{fontSize:15,color:'white',paddingBottom:5,fontWeight:'bold'}}>Month/Year</Text>
           </View> 
           <View>
           {/* <Text >{date}</Text> */}

           <TextInput
                style={{fontSize:18,color:'white'}}
                 placeholder='MMYY'
                placeholderTextColor={"white"}
                onChangeText={setdate}
                value={date}
                maxLength={4}
                keyboardType='numeric'
      />
           </View>
          </View>
        </View>
    </View> 
  
  <View style={{paddingTop:20,height:320}}>
        
          
        <Image source={require('../assets/cardback.png')} style={{width:'95%',alignSelf:'center',height:250}}/>
        <Image source={require('../assets/visa.png')} style={{width:70,height:30,bottom:'72%',left:'75%'}}/>  
        {/* <Text style={{position: "absolute",top:'45%', left:280,fontWeight:'bold',fontSize:20}}>{cvv}</Text> */}
        <TextInput
        style={{position: "absolute",top:'45%', left:280,fontWeight:'bold',fontSize:20,width:150}}
        onChangeText={setcvv}
        secureTextEntry={true}
        value={cvv}
        maxLength={3}
        keyboardType='numeric'
      />
        {/* <Text style={{fontSize:14,color:'white',bottom:60,left:150}}>VALID THROUGH</Text>  */}
       
    </View>
</FlipCard>


<View style={{top:10,backgroundColor:'white',borderRadius:10}}>
      <View style={{height:10,elevation:5,backgroundColor:'transparent'}}></View>
     <View style={{padding:20,}} >
      
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

    
      {/* <View style={{borderStyle: 'dotted',borderWidth: 1,borderColor:  Colors.gray}}/> */}


      </View>

      <TouchableOpacity onPress={handlepayment} style={{alignSelf:'flex-end',margin:20}}>
            <View style={{ width: 150, height: 40, backgroundColor: '#fb641b',borderRadius:3, justifyContent: 'center', alignItems: 'center' }}>

              <Text style={{ fontWeight: 'bold', color: 'white' }}>Proceed</Text>

            </View>
          </TouchableOpacity>

     </View>

{/* 

<View style={{padding:15,backgroundColor:'white',borderRadius:20}}>

<Text style={{fontSize:20,fontWeight:'bold'}}>Enter your Card Details</Text>

<Text style={{fontSize:15,fontWeight:'500',marginTop:15}}>Card Number</Text>

<TextInput
        style={styles.input}
        onChangeText={setnumber}
        value={number}
        maxLength={12}
        keyboardType='numeric'
      />

    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
    <View style={{flex:1}}>
    <Text style={{fontSize:15,fontWeight:'500',marginTop:25}}>Expiry Date</Text>
    <TextInput
        style={styles.input1}
        onChangeText={setdate}
        value={date}
        maxLength={5}
      />
    </View>

    <View style={{flex:1}}>
    <Text style={{fontSize:15,fontWeight:'500',marginTop:25}}>CVV</Text>
    <TextInput
        style={styles.input1}
        onChangeText={setcvv}
        secureTextEntry={true}
        value={cvv}
        maxLength={3}
        keyboardType='numeric'
      />
    </View>
    
    </View>

    <TouchableOpacity onPress={()=>navigation.navigate('Payments')} style={{alignSelf:'flex-end',margin:20}}>
            <View style={{ width: 150, height: 40, backgroundColor: '#fb641b',borderRadius:3, justifyContent: 'center', alignItems: 'center' }}>

              <Text style={{ fontWeight: 'bold', color: 'white' }}>Proceed</Text>

            </View>
          </TouchableOpacity>
     </View> */}
     
      


    

    
       
    
     </View>
   );

}
export default Payment;
const styles = StyleSheet.create({

    container:{
        flex:1
    }, 
    name: {
        width:400,
        fontSize: 30,
        position: "absolute",
        top:'35%', 
        letterSpacing:8, 
        //left:100,
        color:'white',
        textAlign:'center'
        
      },
      input: {
        marginTop:10,
        height: 40,
        borderRadius:5,
        borderWidth: 1,
        borderColor:Colors.primary,
        padding: 10,
      },
      input1: {
        width:'90%',
        height: 40,
        marginTop:20,
        borderWidth: 1,
        borderColor:Colors.primary,
        borderRadius:5,
        padding: 10,
      },
 
});
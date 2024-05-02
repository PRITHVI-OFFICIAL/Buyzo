import React ,{useEffect,useState}from 'react';
import { Modal, View, Image, Button,Text,StyleSheet, TouchableOpacity , Dimensions } from 'react-native';
import colors from '../Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import { AntDesign,FontAwesome,MaterialIcons  } from '@expo/vector-icons';
import { useDispatch,useSelector } from 'react-redux';
import {auth} from '../state/actions';




const Userprofile = ({navigation}) =>  {

  const dispatch=useDispatch(); 
  const authallow=useSelector(state=>state.auth.allow);
  console.log(authallow);

  const onHandleSignOut=()=>{

    dispatch(auth(false));
    console.log("HiiI");
  }

  useEffect(() => {
    navigation.setOptions({
        headerLeft: () => (
            <TouchableOpacity onPress={()=>navigation.goBack()} >
              <AntDesign name="arrowleft" size={24} color="black" style={{marginLeft:15}} />
            </TouchableOpacity>
        ),
    });
}, [navigation]);




  




    
  {
   return (
     <View style={styles.container}>
       <View style={styles.header}>
         <View style={styles.headerContent}>
           <Image
             style={styles.avatar}
             source={{
               uri: "https://cdn3d.iconscout.com/3d/premium/thumb/boy-avatar-6299533-5187865.png",
             }}
           />

           <Text style={styles.name}>Prithvi</Text>
           {/* <Text >{data.length}</Text> */}

  
         </View>
       </View>


   <View style={styles.body}>

       <View style={{ width: "80%",height:100,padding:30,rowGap:10,}}>
       <Text style={{color: "#5e5e5e" ,fontSize:13,marginBottom:20}}>P R O F I L E</Text>

       <TouchableOpacity style={{borderColor:"blue",borderColor:"green",}}>
     <View
       style={{width: "100%",height:50,borderColor: "black",flexDirection:"row",gap:15}}>
       <FontAwesome name="user" size={25} color={"#5e5e5e"} /> 
       <Text style={{ color: "#5e5e5e", fontSize: 16,}}>Edit Profile</Text>
     </View>
   </TouchableOpacity>

   
   <TouchableOpacity style={{borderColor:"blue",borderColor:"green",}}>
     <View
       style={{width: "100%",height:50,borderColor: "black",flexDirection:"row",gap:15}}>
       <Ionicons name="location-sharp" size={25} color={"#5e5e5e"}/> 
       <Text style={{ color: "#5e5e5e", fontSize: 16}}>Shopping Address</Text>
     </View>
   </TouchableOpacity>

   <TouchableOpacity style={{borderColor:"blue",borderColor:"green"}}>
     <View
       style={{width: "100%",height:50,borderColor: "black",flexDirection:"row",gap:15}}>
       <FontAwesome name="heart" size={25} color={"#5e5e5e"} /> 
       <Text style={{ color: "#5e5e5e", fontSize: 16,}}>Wishlist</Text>
     </View>
   </TouchableOpacity>


   <TouchableOpacity style={{borderColor:"blue",borderColor:"green"}}>
     <View
       style={{width: "100%",height:50,borderColor: "black",flexDirection:"row",gap:15}}>
       <Ionicons name="clipboard" size={25} color={"#5e5e5e"} /> 
       <Text style={{ color: "#5e5e5e", fontSize: 16,}}>Booked Status</Text>
     </View>
   </TouchableOpacity>
   
   <TouchableOpacity onPress={onHandleSignOut} style={{marginLeft:60}}>
     <View
       style={{
         backgroundColor: colors.primary,
         width: 120,
         height: 40,
         borderRadius:15,
         justifyContent: "center",
         alignItems:"center",
         flexDirection:"row",
         marginTop:40,
         alignSelf:'center'
       }}
     >
       <FontAwesome name="sign-out" size={22} color={"white"} style={{marginRight:10,justifyContent:"center"}}/>
       <Text style={{ color: "white", fontSize: 13, justifyContent:"center",alignItems:"center",}}>LogOut</Text>
     </View>
     <Text style={{color: "#5e5e5e" ,fontSize:13,marginTop:5,textAlign:"center"}}>Do you want to Signout?</Text>
   </TouchableOpacity>

       </View>

 

       

       </View>

    
     </View>
   );
 }
}
export default Userprofile;
const styles = StyleSheet.create({
 header:{
  // backgroundColor: '#fff',
 },
 headerContent:{
   padding:30,
   alignItems: 'center',
 },
 avatar: {
   width: 80,
   height: 80,
   borderRadius: 63,
   borderWidth: 1,
   borderColor: "white",
   marginBottom:10,
   backgroundColor:colors.primary
 },
 name:{
   fontSize:22,
   color:"#000",
   fontWeight:'400',
   marginTop: 5,

 },
 userInfo:{
   fontSize:16,
   color:"#5e5e5e",
   fontWeight:'600',
 },
 body:{
  // backgroundColor: "#fff",
   height:600,
   //alignItems:'center',

 },
 item:{
   flexDirection : 'row',
 },
 infoContent:{
   flex:1,
   alignItems:'flex-start',
   paddingLeft:5
 },
 iconContent:{
   flex:1,
   alignItems:'flex-end',
   paddingRight:5,
 },
 icon:{
   width:30,
   height:30,
   marginTop:20,
 },
 info:{
   flex:1,
   alignItems:'flex-end',
   paddingRight:5,
   fontSize:18,
   marginTop:20,
   color: "#FFFFFF",
 },
 logout:{
  backgroundColor: "#fff",
  width: 100 ,
  height: 50,
  alignItems: "center",
  justifyContent: "center",
  marginTop: 60, 
  backgroundColor: colors.primary, 
  borderColor: "black",
  borderRadius: 10,
}
});
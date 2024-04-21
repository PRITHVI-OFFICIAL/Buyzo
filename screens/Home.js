import React from 'react';
import { Modal, View, Image, Button,Text,StyleSheet, TouchableOpacity , Dimensions ,ScrollView} from 'react-native';
import Colors from '../Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';





const Home = () => {

  const {width} =Dimensions.get('window');
  const navigation = useNavigation();
  console.log('Hii');
  
  return (
    <View style={styles.container}>
    <ScrollView
      horizontal
      pagingEnabled={true}
    >
      <View style={[styles.imageContainer,{width:width-40}]}>
        <Image source={{uri: 'https://rukminim2.flixcart.com/fk-p-flap/1020/540/image/1f2e2549a466b88e.jpg',}} style={{ width: '100%', height: '100%', borderRadius: 15 }}/>
      </View>

      <View style={[styles.imageContainer,{width:width-40}]}>
        <Image source={{uri: 'https://rukminim2.flixcart.com/fk-p-flap/1020/540/image/3614e4f686524e06.jpg',}} style={{ width: '100%', height: '100%', borderRadius: 15 }}/>
      </View>

      <View style={[styles.imageContainer,{width:width-40}]}>
        <Image source={{uri: 'https://rukminim2.flixcart.com/fk-p-flap/1020/540/image/8c847eea35140ed6.jpg',}} style={{ width: '100%', height: '100%', borderRadius: 15 }}/>
      </View>
    </ScrollView>

    <View style={styles.homelist}>

    <Text style={styles.heading}>Welcome!!</Text>


    
    <View>
      <ScrollView horizontal>

     <View style={{height:90,flexDirection:'row',justifyContent:'space-around',borderRadius:10}}>

    <View  style={styles.phonelogoContainer}>

    <TouchableOpacity style={{width:70,justifyContent:'center',alignItems:'center'}} onPress={navigation.navigate('Products')}>
    <Image source={{uri: 'https://fdn.gsmarena.com/imgroot/news/19/12/realme-fitness-band-launch-h1-2020/-727/gsmarena_001.jpg',}} style={{ width: 50, height: 50, borderRadius:100, resizeMode: 'cover' }}/>
    <Text style={{marginTop:5}}>Realme</Text>
    </TouchableOpacity>
    </View>


    <View  style={styles.phonelogoContainer}>

    <TouchableOpacity style={{width:70,justifyContent:'center',alignItems:'center'}}>
    <Image source={{uri: 'https://i03.appmifile.com/i18n/share/default.jpg',}} style={{ width: 50, height: 50, borderRadius:100, resizeMode: 'cover' }}/>
    <Text style={{marginTop:5,}}>Redmi</Text>
    </TouchableOpacity>
    </View>


    
    <View  style={styles.phonelogoContainer}>

    <TouchableOpacity style={{width:70,justifyContent:'center',alignItems:'center'}}>
    <Image source={{uri: 'https://static-00.iconduck.com/assets.00/samsung-icon-512x512-0o72hicf.png',}} style={{ width: 50, height: 50, borderRadius:100, resizeMode: 'cover' }}/>
    <Text style={{marginTop:5,}}>Samsung</Text>
    </TouchableOpacity>
    </View>



      <View style={styles.phonelogoContainer}>

      <TouchableOpacity style={{width:70,justifyContent:'center',alignItems:'center'}}>
      <Image source={{uri: 'https://www.pngfind.com/pngs/m/600-6002930_lenovo-laptop-logo-hd-png-download.png',}} style={{ width: 50, height: 50, borderRadius:100, resizeMode: 'cover' }}/>
      <Text style={{marginTop:5,}}>Lenovo</Text>
      </TouchableOpacity>
      </View>

    </View> 


    <View style={{height:90,flexDirection:'row',justifyContent:'space-around',borderRadius:10}}>

    <View  style={styles.phonelogoContainer}>

    <TouchableOpacity style={{width:70,justifyContent:'center',alignItems:'center'}}>
    <Image source={{uri: 'https://files.cults3d.com/uploaders/15233766/illustration-file/bb8529be-1119-4928-a68f-70598188cfba/7.jpeg',}} style={{ width: 50, height: 50, borderRadius:100, resizeMode: 'cover' }}/>
    <Text style={{marginTop:5}}>Asus</Text>
    </TouchableOpacity>
    </View>


    <View  style={styles.phonelogoContainer}>

    <TouchableOpacity style={{width:70,justifyContent:'center',alignItems:'center'}}>
    <Image source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/HP_logo_2012.svg/2048px-HP_logo_2012.svg.png',}} style={{ width: 50, height: 50, borderRadius:100, resizeMode: 'cover' }}/>
    <Text style={{marginTop:5,}}>HP</Text>
    </TouchableOpacity>
    </View>


    
    <View  style={styles.phonelogoContainer}>

    <TouchableOpacity style={{width:70,justifyContent:'center',alignItems:'center'}}>
    <Image source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Dell_logo_2016.svg/1200px-Dell_logo_2016.svg.png',}} style={{ width: 50, height: 50, borderRadius:100, resizeMode: 'cover' }}/>
    <Text style={{marginTop:5,}}>Dell</Text>
    </TouchableOpacity>
    </View>



      <View style={styles.phonelogoContainer}>

      <TouchableOpacity style={{width:70,justifyContent:'center',alignItems:'center'}}>
      <Image source={{uri: 'https://ugc.production.linktr.ee/sWfx83t8QrithF6Q0a3k_hSmSqG3I8HCOB7kE?io=true&size=avatar-v3_0',}} style={{ width: 50, height: 50, borderRadius:100, resizeMode: 'cover' }}/>
      <Text style={{marginTop:5,}}>Zebronics</Text>
      </TouchableOpacity>
      </View>

    </View>
    </ScrollView>
    </View>

    <View style={{marginTop:20,}}>
    <Text style={styles.heading}>Popular Offers!!</Text>

    <View style={{flexDirection:'row',flexWrap:'wrap',justifyContent:'space-around'}}>

      <View style={styles.photocontainer}>
      <TouchableOpacity>
      <Image source={{uri: 'https://rukminim2.flixcart.com/image/240/240/xif0q/backpack/y/q/d/-original-imagh3w8jyhynyyr.jpeg?q=80',}} style={{ width: '100%', height: '70%', resizeMode: 'cover',borderRadius:10}}/>
      <Text style={{margin:5}}>Bags</Text>
      <Text style={{margin:5,fontWeight:'bold',color:'green'}}>Min 70% Offer</Text>
      </TouchableOpacity>
      </View>

      
      <View style={styles.photocontainer}>
      <TouchableOpacity>
      <Image source={{uri: 'https://rukminim2.flixcart.com/image/210/210/l58iaa80/electric-cycle/i/y/f/-original-imagfykthgudy4qz.jpeg?q=80',}} style={{ width: '100%', height: '70%', resizeMode: 'contain',borderRadius:10 }}/>
      <Text style={{margin:5}}>Cycles</Text>
      <Text style={{margin:5,fontWeight:'bold',color:'green'}}>Min 50% Offer</Text>
      </TouchableOpacity>
      </View>


      <View style={styles.photocontainer}>
      <TouchableOpacity>
      <Image source={{uri: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-665455a5-45de-40fb-945f-c1852b82400d/react-infinity-run-flyknit-mens-running-shoe-zX42Nc.jpg',}} style={{ width: '100%', height: '70%', resizeMode: 'contain',borderRadius:10 }}/>
      <Text style={{margin:5}}></Text>
      <Text style={{margin:5,fontWeight:'bold',color:'green'}}>Min 10% Offer</Text>
      </TouchableOpacity>
      </View>


    </View>
    </View>

    

   

  </View>
  </View> 
  );
};

export default Home;

const styles = StyleSheet.create(
  {
  container: {
    flex: 1,
    //backgroundColor: 'white',
  
    width:"100%", 
  },
  
  heading:{
    paddingBottom:10,
    fontSize:22,
    fontWeight:"bold"  
},
  imageContainer:{
    height: 200,
    backgroundColor: 'black',
    borderRadius: 15,
    margin: 20,
  }, 
  homelist:{
    margin:20, 
    height:500, 
    bottom:30
  }, 
  phonelogoContainer:
  {
    marginLeft:2,
    width:90,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:15
  }, 
  photocontainer:{
    marginTop:5,
    height:200,
    width:120,
    backgroundColor:'white',
    borderRadius:10,
    elevation:0.5
  }
    

});
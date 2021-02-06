import React,{useEffect} from 'react';

import database from '@react-native-firebase/database';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  ImageBackground

} from 'react-native';

import navigation from '../config/navigation'

import {useSelector,useDispatch} from 'react-redux'
import {getalluser} from '../store/actions'


  
const Login = (props) => {
  const dispatch = useDispatch()

  useEffect(
    ()=>{
      dispatch(getalluser())
     
    }
  )
  const allusers = useSelector(state=>state.userred.allusers)

  return (
    
    <View style = {styles.wrapper}>
      <ImageBackground source={require('../config/bck2.png')}
  style={{width: '100%', height: '100%',marginHorizontal:56}}
> 
      
      <View style={styles.outerbox}>
        {/* <Text style={styles.appname}>SAVE ME  </Text>
        <Text style={styles.text}>A Blood Doner Search App</Text> */}
      </View>
      <View>
      <TouchableOpacity style={styles.rgBtn} onPress = {()=> props.navigation.navigate('Rigestration')}>
        <Text style={{fontSize:18,fontWeight:'900'}}>
          Rigister
        </Text>
      </TouchableOpacity>
      
      </View>
    </ImageBackground>
    </View>


  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red'
  
  },
  outerbox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  
  },
  appname:{
    fontSize:72,
    color:'white',
   
  },
  text:{
    fontSize:22,
    color:'white'
  },
  rgBtn:{
    backgroundColor:'#75a7a5',
    padding:8,
    width:100,
    borderRadius:3,
    margin:15,
    alignItems:'center',
    shadowColor:'black',
    elevation:12,
    shadowOffset:{
      width:4,
      height:1
    }

  }

});

export default Login;

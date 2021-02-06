/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {useSelector,useDispatch} from 'react-redux'


// importing Screens
import Screennavigator from './config/navigation'

import store  from './store'
import {Provider}from 'react-redux'



const App=() => {
  return (
    <Provider store = {store}>   
  <Screennavigator></Screennavigator>
    </Provider>
    
  );
};

const styles = StyleSheet.create({
 container:{
   flex:1,
   alignItems:'center',
   justifyContent:'center',
   backgroundColor:'red'
 }
});

export default App;

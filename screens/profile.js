import React ,{useState,useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  TextInput

} from 'react-native';
import database from '@react-native-firebase/database';
import { Value } from 'react-native-reanimated';
import DeviceInfo from 'react-native-device-info';
import {useSelector,useDispatch} from 'react-redux'
import {getData} from '../store/actions'


const Profile = () => {
  let uniqueId = DeviceInfo.getUniqueId();
 const userinfo = useSelector(state=>state.userred.allusers[uniqueId])


  return (
    
    <View style={styles.container}>

      <View>
      <Text style={styles.boldtext}> Profile</Text>
      </View>

      <View style={styles.innerdiv}>
      <ScrollView style={{margin:0,padding:0}}>

       
        <Text style = {styles.inputs} >{userinfo.Name}</Text>
        <Text style = {styles.inputs}  >{userinfo.City}</Text>
        <Text style = {styles.inputs} >{userinfo.ContactNumber}</Text>
        <Text style = {styles.inputs} >{userinfo.LastBleed}</Text>
        <Text style = {styles.inputs} >{userinfo.BloodGroup}</Text>
        <View >
{/* 
        <TouchableOpacity style={styles.btn}>
          <Text style = {{fontSize:22}}>Save</Text>
        </TouchableOpacity> */}
        </View>
      </ScrollView>

      </View>
    </View>


  );
};

const styles = StyleSheet.create({

  container: { flex: 1, padding: 10, paddingTop: 10, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' },
  innerdiv: { backgroundColor: 'lightpink', width: '90%', flex: 1, padding: 10, padding: 30, marginBottom: 30, borderRadius:8 ,alignItems:'center'},
  inputs:{ paddingBottom:0,marginBottom:30,fontSize:20},
  boldtext:{fontSize:32,margin:10},
  btn:{fontSize:20,backgroundColor:'red',borderRadius:5,padding:10,alignItems:'center', shadowColor: "white",
  shadowOffset: {
    width: 5,
    height: 1,
  },
  shadowOpacity: 0.36,
  shadowRadius: 6.68,

  elevation: 6}
  

});

export default Profile;

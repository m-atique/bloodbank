import React, { useState , useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  TextInput,
  Button

} from 'react-native';

import database from '@react-native-firebase/database';
import DeviceInfo from 'react-native-device-info';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import DatePicker from 'react-native-datepicker';




const Register = () => {
  let d = new Date()
  const [date, setDate] = useState(d)
  const [name,setName] =   useState('')
  const [blood,setBlood] = useState('')
  const [city,setCity] =   useState('')
  const [phone,setPhone] = useState('')

  let uniqueId = DeviceInfo.getUniqueId();
 const savedata =()=>{

    let user ={
    'Name':name,
    'BloodGroup': blood,
    "City": city,
    "ContactNumber": phone,
    'LastBleed': date 

  }
  let uniqueId = DeviceInfo.getUniqueId();

  database().ref('users').child('123456789023').set(user)
  setName('')
    setBlood('')
    setCity('')
    setPhone('')
    setDate(d)
 }
 

//-------------------------------------------------------------------dat and time picker essentials---

const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
 
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
 
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
 
  const handleConfirm = (date) => {
    setLast(date);
    hideDatePicker();
  };

//-----------------------------------------------------------------------------------------------------

 

  return (
    <View style={styles.container}>

      <View>
      <Text style={styles.boldtext}> Registration</Text>
      </View>

      <View style={styles.innerdiv}>
      <ScrollView style={{margin:0,padding:0,}}>

       
        <TextInput style = {styles.inputs}   value={name}  onChangeText = {(txt)=>setName(txt)}  placeholder='Name'></TextInput>
        <TextInput style = {styles.inputs}   value={blood} onChangeText = {(txt)=>setBlood(txt)} placeholder='Blood Group'></TextInput>
        <TextInput style = {styles.inputs}   value={city}  onChangeText = {(txt)=>setCity(txt)}  placeholder='City'></TextInput>
        <TextInput style = {styles.inputs}   value={phone} onChangeText = {(txt)=>setPhone(txt)} placeholder='Contact Number'></TextInput>
       <Text>Last bleed Date</Text>
      
      <DatePicker
          style={styles.datePickerStyle}
          date={date} // Initial date from state
          mode="date" // The enum of date, datetime and time
          placeholder="select date"
          format="DD-MM-YYYY"
          maxDate= {new Date()}
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
             position: 'absolute',
              right: 0,
             
              
            },
            dateInput: {
              width:'90%'
            },
          }}
          onDateChange={(date) => {
            setDate(date);
          }}
        />
  
        <View >
        
        <TouchableOpacity style={styles.btn} onPress ={()=>savedata()}>
          <Text style = {{fontSize:22}}>Save</Text>
        </TouchableOpacity>
        </View>
      </ScrollView>

      </View>
    </View>


  );
};

const styles = StyleSheet.create({

  container: { flex: 1, padding: 10, paddingTop: 10, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' },
  innerdiv: { backgroundColor: 'lightpink', width: '90%', flex: 1, padding: 10, padding: 30, marginBottom: 30, borderRadius:8 },
  inputs:{borderBottomWidth:2, paddingBottom:0,marginBottom:30},
  boldtext:{fontSize:32,margin:10},
  btn:{fontSize:20,backgroundColor:'red',borderRadius:5,padding:10,alignItems:'center', shadowColor: "white",
  shadowOffset: {
    width: 5,
    height: 1,
  },
  shadowOpacity: 0.36,
  shadowRadius: 6.68,

  elevation: 6},

 
  datePickerStyle: {
    width: '100%',
    marginBottom: 20
  },
  

});

export default Register;

import React, { useState } from 'react';
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

const Lastbleed = () => {

  const [last,setLast] =   useState('')


  return (
    <View style={styles.container}>

      <View>
      <Text style={styles.boldtext}> Last Bleed </Text>
      </View>

      <View style={styles.innerdiv}>
      <ScrollView style={{margin:0,padding:0,}}>

        <TextInput style = {styles.inputs}   value={last}  onTextInput = {(txt)=>setLast(txt)}  placeholder='Last Bleed'></TextInput>
        <View >

        <TouchableOpacity style={styles.btn}>
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
  innerdiv: { backgroundColor: 'lightpink', width: '90%', flex: 1, padding: 30, borderRadius:18 },
  inputs:{borderBottomWidth:2, paddingBottom:0,marginBottom:30},
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

export default Lastbleed;

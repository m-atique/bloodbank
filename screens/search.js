import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
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
// import {useSelector } from 'react-redux'




const Home = () => {

  const usersdetail = useSelector(state => state.userred.allusers)
const doners=()=>{
    for (const [key, value] of Object.entries(usersdetail)) {
      if(value.BloodGroup == search){
        console.log('aslam o alikum ',value.Name,value.ContactNumber,value.City)
      }
    }
    }
  

  const [search, setSearch] = useState('')
  return (
    <View style={styles.wrapper}>
      <View style={styles.outerbox}>
        <Text style={styles.appname}>Search</Text>

      </View>
      <View style={styles.inputbox}>

        <TextInput style={styles.search} onChangeText={(txt) => setSearch(txt)} />
        <TouchableOpacity onPress={() => doners()}>
          <Text>Search</Text>
        </TouchableOpacity>
      </View>
    </View>


  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightpink'

  },
  outerbox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  inputbox: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',

  },
  appname: {
    fontSize: 32,
    color: 'red',

  },
  text: {
    fontSize: 16,
    color: 'black'
  },
  search: {
    backgroundColor: 'white'
  }



});

export default Home;

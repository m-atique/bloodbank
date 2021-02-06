import React from 'react';
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
import Search from '../screens/search'


const HomeScreen = () => {
  return (
      <View style={styles.wrapper}>
         <Search></Search>
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
    flex: 4,
    alignItems: 'center',
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
  


});

export default HomeScreen;

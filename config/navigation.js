import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  TextInput,
  Image

} from 'react-native';
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'


const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();


//importing screens.....................
import Login from '../screens/login'
import Register from '../screens/register';
import Home from '../screens/homescreen'
import Profile from '../screens/profile';
import Lastbleed from '../screens/lastbleed'
import HomeScreen from '../screens/homescreen';
import DrawerContent  from './drawercontent'

const TabNavigator =({navigation})=>(
  <Tab.Navigator         tabBarOptions={{
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
    labelStyle: {
      fontSize: 15,
      margin: 0,
      padding: 10,
    },
    
  }}>
        <Tab.Screen name="Home" component={Login}  options={{
          
          headerLeft:()=>(
            
            <TouchableOpacity style={{paddingLeft:10}} onPress={()=>navigation.openDrawer()}><Text></Text></TouchableOpacity>
          ),
          headerRight:()=>(
            
            <TouchableOpacity onPress = {()=> navigation.navigate('Register')} style={{backgroundColor:'lightgray',padding:10,borderRadius:5, marginRight:20}} ><Text>Register</Text></TouchableOpacity>
          )
        }}/>
        <Tab.Screen name = 'Search' component ={HomeScreen}/>     
        <Tab.Screen name = 'Profile' component ={Profile}/>
  </Tab.Navigator>
)




const HomeNavigator =({navigation})=>(
  <HomeStack.Navigator>
   
        <HomeStack.Screen name="Home" component={TabNavigator} />
        <HomeStack.Screen name = 'Rigestration' component ={Register}/>  
          
  </HomeStack.Navigator>

)



function Screennavigator() {
  return (
    <NavigationContainer>
   
      <Drawer.Navigator initialRouteName="Home" drawerContent={props=><DrawerContent {...props} />}> 
        <Drawer.Screen name="Home" component={HomeNavigator} />
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name = 'Rigestration' component ={Register}/> 
      </Drawer.Navigator>
    
    </NavigationContainer>
  );
}

export default Screennavigator;




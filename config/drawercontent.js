import React from 'react'
import {
   
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    TextInput,
    Image  
  
  } from 'react-native';
  import {  DrawerContentScrollView,
    DrawerItemList,SafeAreaView,DrawerItems} from '@react-navigation/drawer'
    let img ={uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgHuwH6M3-DulUxY-Ord53IeLkky7zrZZWmg&usqp=CAU'}
const DrawerContent =props=>(

    <DrawerContentScrollView {...props}>
        <View style = {{flex:1, flexDirection:'row', height:50 ,margin: 25}}>
            <Image source= {img} style={{height:50,width:50, borderRadius:50,margin:5}}></Image>
            <View style={{alignItems:'center'}}>
            <Text style={{fontSize:20,paddingTop:10}}>Save Me</Text>
              <Text>A Blood Doner Seach App</Text>
              </View>
            
            
        </View>
    <DrawerItemList {...props} />
  </DrawerContentScrollView>
    )


export default DrawerContent

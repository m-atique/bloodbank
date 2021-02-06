import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {

    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    TextInput,
    FlatList

} from 'react-native';


const Doners = () => {
    const mydoner = useSelector(state => state.userred.blooddoners)
    return (
        <View>
            {mydoner.map((doner, index) => {
                return (

                    <View style={styles.innerbox}>

                        <ScrollView>
                            <View >
                                <View style = {styles.bgroup}>
                                    <View><Text style={{fontSize:20,color:'white'}}>{doner.BloodGroup}</Text></View>
                                </View>
                                <View style={{zIndex:0}}>

                                    <View style={styles.donerName}>
                                        <Text style={{ fontSize: 20 }}>{doner.Name}</Text>
                                    </View>
                                    <View style={styles.donerDet}>
                                        <Text style={{ fontSize: 16, padding: 4 }}> {doner.City}</Text>
                                        <Text style={{ fontSize: 16, padding: 4 }}>Cell#    {doner.ContactNumber}</Text>
                                    </View>
                                </View>
                            </View>
                        </ScrollView>

                    </View>
                )
            })

            }
        </View>

    )


};
const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: 'center'
    },
    innerbox: {
       
        margin: 20,
        marginBottom:0,
        
        shadowColor: 'black',
        shadowOffset: {
            width: 5,

        },
        elevation: 12
    },
    bgroup:{
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        borderRadius: 50,
        borderWidth:0.8,
        borderColor:'white',
        height:65,
        width:65,
        position:'relative',
        top:86,
        zIndex:1, marginLeft:10
    },
    donerName: {
        backgroundColor:  '#e4e5e7',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 14,
        borderTopRightRadius: 16,
        borderTopLeftRadius: 16,
        
    },
    donerDet: {
        backgroundColor: '#f0fcf4',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomRightRadius: 16,
        borderBottomLeftRadius: 16,

    }


}
)



export default Doners; 
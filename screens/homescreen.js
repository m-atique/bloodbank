import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {

    StyleSheet,
    ScrollView,
    View,
    Text,
    TouchableOpacity,
    TextInput

} from 'react-native';
//-----------------------------------------------importing Components
import Doner from '../screens/doners'
import {getdoners} from '../store/actions'



const HomeScreen = () => {
    const [search, setSearch] = useState('')
    const usersdetail = useSelector(state => state.userred.allusers)  
    const dispatch =useDispatch()

    return (
        <View style={styles.wrapper}>
            <View style={styles.innerbox}>
                <TextInput style={styles.srInput} onChangeText={(txt)=>setSearch(txt)} />
                <TouchableOpacity  onPress ={()=>{dispatch(getdoners(search,usersdetail))}} style={styles.srBtn}><Text>srch</Text></TouchableOpacity>
            </View>
            <View style={{ flex: 1, backgroundColor: '#75a7a5' }}>
                <ScrollView>
                   
                    <Doner></Doner>
                </ScrollView>

            </View>
        </View>
    )
};
const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: 'center'
    },
    innerbox: {
        // flex: 1,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#75a7a5',
        borderWidth: 1,
        borderColor: 'darkgray',
        shadowColor: 'yellow',
        shadowOffset: {
            width: 2,

        },
        elevation: 12
    },
    srInput: {
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 12,
        backgroundColor: '#f0fcf4',
        width: 200,
        padding: 4,
        paddingLeft: 10,
        shadowColor: 'black',
        shadowOffset: {
            width: 5,
            height: 0.7

        },
        elevation: 3
    },
    srBtn: {
        backgroundColor: 'red',
        borderColor: 'red',
        borderWidth: 1,
        borderRadius: 50,
        height:43,
        width: 43,
        padding: 4,
        marginLeft:10
    }
}
)



export default HomeScreen; 
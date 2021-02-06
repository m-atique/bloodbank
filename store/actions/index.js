

import database from '@react-native-firebase/database';
import DeviceInfo from 'react-native-device-info';


const getData = () => {
    let uniqueId = DeviceInfo.getUniqueId();
    
      return  (dispatch)=>{
        

        database().ref('/users').child(uniqueId).once('value',data=>{
            userdata = data.val()   
        })
        .then(
            
            ()=>{
            
            return userdata != null ?
            dispatch({
                type:'getData',
                 payload:userdata
     
               })
           :null; 
           })   
    .catch=(e)=> {
      alert(e)
    }
      
  }
}
const getalluser=()=>{
  return  (dispatch)=>{

    database().ref('/users').once('value',data=>{
      userdata = data.val()  
      
    })
    .then(
      
      ()=>{
        
        return userdata != null ?
        dispatch({
          type:'getusers',
          payload:userdata
          
        })
        :null; 
      })   
      .catch=(e)=> {
        alert(e)
      }
      
    }
  }

//----------------------------------------------getting user detail of demanded blood groups
const getdoners=(search,usersdetail)=>{
    let data =[]
    return  (dispatch)=>{
      if (search == 'B+ve'){
        for (const [key, value] of Object.entries(usersdetail)) {
          if(value.BloodGroup == 'B+ve'|| value.BloodGroup =='B-ve'|| value.BloodGroup == 'O+ve'|| value.BloodGroup == 'O-ve'){
  
            data.push(value)
      }
    }
  }
  else if (search == 'A+ve'){
    for (const [key, value] of Object.entries(usersdetail)) {
      if(value.BloodGroup == 'A+ve'|| value.BloodGroup =='A-ve'|| value.BloodGroup == 'O+ve'|| value.BloodGroup == 'O-ve'){

        data.push(value)
  }
}
}
else if (search == 'A-ve'){
  for (const [key, value] of Object.entries(usersdetail)) {
    if( value.BloodGroup =='A-ve'||  value.BloodGroup == 'O-ve'){

      data.push(value)
}
}
}else if (search == 'B-ve'){
  for (const [key, value] of Object.entries(usersdetail)) {
    if( value.BloodGroup =='B-ve'|| value.BloodGroup == 'O-ve'){

      data.push(value)
}
}
}
else if (search == 'O+ve'){
  for (const [key, value] of Object.entries(usersdetail)) {
    if( value.BloodGroup == 'O+ve'|| value.BloodGroup == 'O-ve'){

      data.push(value)
}
}
}
else if (search == 'O-ve'){
  for (const [key, value] of Object.entries(usersdetail)) {
    if(value.BloodGroup == 'A-ve'|| value.BloodGroup == 'O-ve'){

      data.push(value)
}
}
}
else if (search == 'AB+ve'){
  for (const [key, value] of Object.entries(usersdetail)) {
    
      data.push(value)

}
}
else if (search == 'AB-ve'){
  for (const [key, value] of Object.entries(usersdetail)) {
    if(value.BloodGroup == 'A-ve'|| value.BloodGroup =='B-ve'|| value.BloodGroup == 'AB-ve'|| value.BloodGroup == 'O-ve'){

      data.push(value)
}
}
}
              dispatch({
                      type:'mydoner',
                      payload:data
                      
                    })

        }
      }
    
  


export {
   getData,
   getalluser,
   getdoners,
   
}
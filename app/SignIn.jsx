import React, { useEffect, useState } from 'react'
import { Button, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native'
import Create from './Create.jsx'
import { useNavigation, useRouter } from 'expo-router'
import Place from './Place.jsx'

import AsyncStorage from '@react-native-async-storage/async-storage'

export default function SignIn() {

  let nav=useNavigation()
  let [name,setName]=useState(null);

  
  useEffect(()=>{
      AsyncStorage.setItem('user',name)

    },[name])

  
    

  let style=StyleSheet.create({
    input:{
       color:'#ffffffff',
       padding:20,
       width:300,
       margin:20,
        borderWidth:2,
        borderColor:'#9b7225ff',
        borderRadius:20
       
    },
    button:{
      backgroundColor:'#846f19ff',
      color:'white',
      width:'50%',
      marginVertical:10,
      marginHorizontal:'auto',
      textAlign:'center',
      fontSize:20,
      paddingVertical:10,
      paddingHorizontal:60,
      borderRadius:30,
      fontWeight:'bold'
    }
  })
  return<>
  <View>
     
      <ImageBackground source={{uri: "https://images.pexels.com/photos/262786/pexels-photo-262786.jpeg"}}
          style={{width:"100%",height:'100%',position:'relative'}}
      >
    <View style={{backgroundColor:'#0202026f',width:'100%',height:'100%',position:'absolute',zIndex:0,top:0}}></View>
       
       <View style={{margin:'auto',borderWidth:1,borderColor:'#ad7f29ff',borderRadius:20,marginVertical:200}}>
        <TextInput placeholder='your Email' style={style.input} placeholderTextColor={'#9c9a9add'} onChangeText={(text)=>setName(text)
        }/>
        <TextInput secureTextEntry={true} placeholder='Password' style={style.input} placeholderTextColor={'#9c9a9add'}/>
        <Text style={style.button} onPress={()=>{ nav.navigate(Place)}}>Send</Text>
        <Text style={{color:'#fae83b',margin:'auto',paddingBottom:10,fontWeight:'bold'}}  onPress={()=>nav.navigate(Create)} >Create new account</Text>
       </View>



      </ImageBackground>

  </View>
  </>
}

import React, { useEffect, useState } from 'react'
import { Button, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {Video} from 'expo-av'
import SignIn from './SignIn.jsx';
import Create from '@/app/Create.jsx'

import * as Animatable from 'react-native-animatable';
import { useNavigation } from 'expo-router';


let style=StyleSheet.create({
  buttons:{
    backgroundColor:"#9b7c4f",
    color:"white",
    fontSize:25,
    fontWeight:"bold",
    padding:10,
    margin:"auto",
    marginTop:50,
    textAlign:"center",
    width:"60%",
    borderRadius:20
  },
shadow:{
  textShadowOffset:{
     width:12,
    height:14
  },
  textShadowColor:'#3d1b0c',
  textShadowRadius:6,
}
})

export default function Home() {

  let [hidden,setHidden]=useState(false)
  let nav=useNavigation()

 useEffect(()=>{
  setTimeout(()=>{
    setHidden(true)
  },1000)
 },[])

  return <>
  

<View style={{height:'100%',width:'100%'}}>
      <ImageBackground source={{uri: "https://images.pexels.com/photos/262786/pexels-photo-262786.jpeg"}}
    style={{width:"100%",height:'100%',paddingTop:30}}
>

     <View style={{position:'absolute',bottom:'10%',width:'100%'}}>
<Animatable.Text  delay={1000} iterationDelay={2000} duration={2000} animation="fadeInDown" iterationCount={1} direction="alternate" style={{paddingStart:20,paddingTop:300}}>
        <Text style={[{fontSize:30,fontWeight:'bold',color:"#c59a4c"},style.shadow]}>
          Explore and discover the best trips</Text>
        </Animatable.Text>

{hidden?
 <TouchableOpacity>
      <Text style={style.buttons} onPress={()=>nav.navigate(SignIn)}>Sign in</Text>
    </TouchableOpacity>
      :""}
      {hidden?
    <TouchableOpacity>
      <Text 
      style={{textAlign:'center',fontSize:17,color:"#fae83b",marginTop:13,fontWeight:"bold"}}
      onPress={()=>nav.navigate(Create)}
      >Create new account</Text>
    </TouchableOpacity>
    :""}
     </View>
  
     
</ImageBackground>
 </View>

  </>
}


 
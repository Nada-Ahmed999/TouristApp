import { FontAwesome } from '@expo/vector-icons'
import { useLocalSearchParams, useNavigation } from 'expo-router'
import React, { useState } from 'react'
import { Image, ImageBackground, Text, View } from 'react-native'
import Place from './Place.jsx'



export default function Card() {
let {img,key}=useLocalSearchParams()
 let nav=useNavigation()
 let [like,setLike]=useState("black")
 let[book,setBook]=useState('gray');
 let[done,setDone]=useState("Book Now")

  return<>
 <View>

  <ImageBackground source={{uri:img}} style={{width:'100%',height:500}}>
    <View style={{padding:20,paddingTop:50,display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
  <FontAwesome onPress={()=>nav.navigate(Place)} name='arrow-left' size={25} style={{textAlign:'center',backgroundColor:'#fefefe97',borderRadius:100,width:50,marginBottom:20}} color={'black'}/>
  <FontAwesome onPress={()=>like == "red"?setLike("black"):setLike('red')} name='heart' size={25} style={{textAlign:'center',backgroundColor:'#fefefe97',borderRadius:100,width:50,marginBottom:20}} color={like}  />
    </View>
  </ImageBackground>
  
  <Text style={{paddingStart:15,color:'green',fontSize:20,fontWeight:'bold'}}>{key}</Text>

   <View style={{paddingStart:15,display:'flex',flexDirection:'row'}}>
         <FontAwesome name='star' size={15} style={{marginBottom:20,paddingTop:15,paddingHorizontal:5}} color={'orange'}  />
      <FontAwesome name='star' size={15} style={{marginBottom:20,paddingTop:15,paddingHorizontal:5}} color={'orange'}  />
      <FontAwesome name='star' size={15} style={{marginBottom:20,paddingTop:15,paddingHorizontal:5}} color={'orange'}  />
      <FontAwesome name='star' size={15} style={{marginBottom:20,paddingTop:15,paddingHorizontal:5}} color={'orange'}  />
      <FontAwesome name='star-half' size={15} style={{marginBottom:20,paddingTop:15,paddingHorizontal:5}} color={'orange'}  />
      </View>
       <Text style={{paddingStart:15,fontWeight:'bold',fontSize:20}}>
            <FontAwesome name='map-pin' size={20} style={{marginBottom:20,paddingTop:15,paddingHorizontal:15}} color={'gray'}  />
            <Text style={{color:'gray'}}>Egypt</Text>
            </Text>

            <Text style={{padding:15,color:'green',fontWeight:'bold',fontSize:20}}>
              <Text>$100/day</Text>
            </Text>
              <Text 
              style={{backgroundColor:book,color:'white',fontSize:20,width:200,padding:15,margin:'auto',textAlign:'center',borderRadius:40}}
              onPress={()=>{
                setDone("Done");
                setBook("green")
              }}
              >{done}
              {done == "Done"?
              <FontAwesome name='thumbs-up' size={20} style={{marginBottom:20,paddingTop:15,paddingHorizontal:5}} color={'orange'}  />
              :""}
              </Text>
 </View>
  </>
}

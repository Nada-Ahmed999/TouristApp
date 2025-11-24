import React, { useContext, useEffect, useState } from 'react'
import { Button, Image, Pressable, ScrollView, Text, TextInput, View } from 'react-native'



import {FontAwesome} from '@expo/vector-icons'
import { useNavigation, useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage'


export default function Place() {
  let[name,setName]=useState("user")
  let[area,setArea]=useState('TouristPlaces');
  let nav=useNavigation()
  let router=useRouter()
  let id=10;
  let id2=50;

  useEffect(()=>{
    let user=  AsyncStorage.getItem('user').then((name)=>setName(name))
  },[])
  

  

  let data={
 TouristPlaces:['https://images.pexels.com/photos/6388861/pexels-photo-6388861.jpeg',
    'https://media.istockphoto.com/id/1205585723/photo/ancient-ruins-of-the-karnak-temple-in-luxor-egypt-the-largest-temple-complex-of-antiquity-in.jpg?s=2048x2048&w=is&k=20&c=tgK5p_0dlxyAMcssTvs6jqPTDbtT7XK9caHYe-d0u0s=',
    'https://media.istockphoto.com/id/1054618518/photo/the-kebash-road-is-the-road-linking-the-luxor-temple-to-the-karnak-temple.jpg?s=2048x2048&w=is&k=20&c=auEZWGIfjI-8Ai7CSP90Ddo10oWIayZ-dAxIH3wU9rw=',
    "https://media.istockphoto.com/id/173575006/photo/egyptian-museum.jpg?s=2048x2048&w=is&k=20&c=OOOGYLW19J8z1HL1ia08VjgMBcaT3qSfim5n5MMjZS0=",
    "https://media.istockphoto.com/id/599101096/photo/abu-simbel-monument-egypt.jpg?s=2048x2048&w=is&k=20&c=015pXmM0lrxl0ZtuCas9dUCZUku2p8u-P_Hasx_-NPE=",
    'https://media.istockphoto.com/id/91707240/photo/statues-in-temple-of-queen-hatshepsut.jpg?s=2048x2048&w=is&k=20&c=ZifzmOinHleJjpNmO1nxHdeEnoC1jwKJIcdbjWNm_bk=',
    'https://media.istockphoto.com/id/463809857/photo/facade-of-kom-ombo-temple-by-night.jpg?s=2048x2048&w=is&k=20&c=vAWC9rcNaoi3mlYqvuTLrD3ZHT-0wn0Him8BhxE6v04=',],
  TheNile:[
    "https://media.istockphoto.com/id/1177517174/photo/river-nile-and-ship.jpg?s=2048x2048&w=is&k=20&c=SlUGCfh9oON3h2wTAKs3wurMd1VJhpxNkLEjOrXfTC0=",
    "https://media.istockphoto.com/id/1311040044/photo/nile-the-longest-river-in-africa.jpg?s=2048x2048&w=is&k=20&c=gFu-VmiVCVn9646ZkgYIAhEd3FO6qJgU7eXvPfGEL2Y=",
    "https://images.pexels.com/photos/16386721/pexels-photo-16386721.jpeg",
    "https://images.pexels.com/photos/3723031/pexels-photo-3723031.jpeg",
    'https://media.istockphoto.com/id/2149010167/photo/the-temple-of-hathor-in-the-dendera%C2%A0temple%C2%A0complex.jpg?s=2048x2048&w=is&k=20&c=8AmLN4cpdYtY--Tj4qVBLepUhm6czcYAQaEazdtG4Vs=',
  ],
  Cairo:[
    'https://media.istockphoto.com/id/675730792/photo/egypt-cairo-nile-view-to-gezira-island-with-the-cairo-tower.jpg?s=2048x2048&w=is&k=20&c=ujA_GW3rCmxnf6dFJ_9oqX-4faDQovaXNcQUegc0yqc=',
    "https://images.pexels.com/photos/34721264/pexels-photo-34721264.jpeg",
    "https://media.istockphoto.com/id/140393790/photo/cairo-opera-house.jpg?s=2048x2048&w=is&k=20&c=97iaRxpWxuGbMILlr1ZauBynme6o_5Gfr4f66PjHhG4=",
    "https://media.istockphoto.com/id/173681964/photo/zoo.jpg?s=2048x2048&w=is&k=20&c=VWrPKb0K1j-aiBhSwaKGLIAiKc7pYpMeljlbl3W1760=",

  ]
  }
  
  
 const places={
  TouristPlaces:[
    //  🏺 آثار وتماثيل
  "Great_pyramids_of_Giza",
  "Karnak_Temple_Complex",
  "Avenue_of_Sphinxes",
  "Egyptian_Museum",
  "Abu_Simbel_temples",
  "Mortuary_Temple_of_Hatshepsut",
  "Temple_of_Kom_Ombo",
  ],
  TheNile:[
    //   // // 🚤 نيلية وفرعونية
  "Nile",
  "Nile_Cruise",
  "Aswan",
  "Luxor",
  "Dendera_Temple_complex",
  ],
  Cairo:[
  "Cairo_Tower",
  "Al-Azhar_Park",
  "Cairo_Opera_House",
  "Giza_Zoo",
  ]
 }
 



  

  return <>
  <ScrollView style={{paddingVertical:5,paddingHorizontal:10}}>
    <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',paddingVertical:20}}>
    <FontAwesome name='bars' size={30} style={{marginBottom:20}}/>
    <FontAwesome name='bell' size={30} style={{marginBottom:20}}  />

    </View>

    <View>
    <Text style={{fontSize:30,fontWeight:'bold'}} >Welcome,{name}</Text>
    <Text style={{fontSize:15,fontWeight:'bold',color:"gray"}}>let's find a place for you</Text>
    </View>

    <View 
    style={{backgroundColor:"#e2e1e1ff",marginVertical:20 ,display:'flex',flexDirection:'row',width:'100%',justifyContent:'space-between',borderRadius:50}}>

    <FontAwesome name='search' size={20} style={{marginBottom:20,paddingTop:15,paddingHorizontal:15}} color={'gray'}  />
      <TextInput  placeholder='search' style={{padding:15,width:'70%',outline:'none',fontSize:20}} placeholderTextColor={"gray"} />
    <FontAwesome name='close' size={20} style={{marginBottom:20,paddingTop:15,paddingHorizontal:15}} color={'gray'}  />
    </View>

    <View 
    style={{display:'flex',flexDirection:'row' ,justifyContent:'space-between',padding:7,marginVertical:7}}>
      <Text style={{color:'blue',fontWeight:'bold'}} >Hotels</Text>
      <Text style={{fontWeight:'bold'}}>Attraction</Text>
      <Text style={{fontWeight:'bold'}}>Sights</Text>
      <Text style={{fontWeight:'bold'}}>Recommended</Text>
    </View>
    
    
    
  {Object.keys(data).map((key)=>
  <View key={id2++}>
  <Text key={id+1}  style={{color:'#091e4bff',fontWeight:'bold',fontSize:20 ,borderColor:'#0f1951ff',borderWidth:2,marginVertical:20,textAlign:'center',borderRadius:50}}>{key}</Text>
    <ScrollView key={id+20} horizontal={true} style={{display:'flex',flexDirection:'row',marginBottom:20}}>
    {data[key].map((img,index)=>{
      return <Pressable key={index} onPress={()=>router.push({ pathname: "/Card", params: {img:img,key:places[key][index]} })}>
       <View  style={{marginEnd:20,borderRadius:50,width:200,shadowOffset:{width:5,height:5},shadowColor:'green',shadowRadius:50,backgroundColor:'white',elevation:60}}>
      <Image source={{uri:img}}
      style={{width:200,height:200,borderRadius:50}}       
      />
      <View style={{display:'flex',flexDirection:'row'}}>
         <FontAwesome name='star' size={15} style={{marginBottom:20,paddingTop:15,paddingHorizontal:5}} color={'orange'}  />
      <FontAwesome name='star' size={15} style={{marginBottom:20,paddingTop:15,paddingHorizontal:5}} color={'orange'}  />
      <FontAwesome name='star' size={15} style={{marginBottom:20,paddingTop:15,paddingHorizontal:5}} color={'orange'}  />
      <FontAwesome name='star' size={15} style={{marginBottom:20,paddingTop:15,paddingHorizontal:5}} color={'orange'}  />
      <FontAwesome name='star-half' size={15} style={{marginBottom:20,paddingTop:15,paddingHorizontal:5}} color={'orange'}  />
      </View>

      <Text style={{fontWeight:'bold',textAlign:'center',fontSize:17,padding:10}}>{places[key][index]}</Text>
      <Text style={{paddingStart:20,fontWeight:'bold',fontSize:20}}>
      <FontAwesome name='map-pin' size={20} style={{marginBottom:20,paddingTop:15,paddingHorizontal:15}} color={'gray'}  />
      <Text style={{color:'gray'}}>Egypt</Text>
      </Text>

      <Text style={{padding:15,paddingStart:30,fontSize:20,fontWeight:'bold',color:'green'}}>$100 / Day</Text>
    </View>
      </Pressable>
    })}
   </ScrollView>
    </View>
  )}

 <View style={{display:'flex',flexDirection:'row',justifyContent:'space-around'}}>
   <FontAwesome name='home' size={30} style={{marginBottom:20,paddingBottom:15,paddingHorizontal:5}} color={'gray'}  />
   <FontAwesome name='user' size={30} style={{marginBottom:20,paddingBottom:15,paddingHorizontal:5}} color={'gray'}  />
   <FontAwesome name='heart' size={30} style={{marginBottom:20,paddingBottom:15,paddingHorizontal:5}} color={'gray'}  />
 </View>
  </ScrollView>
  </>
}


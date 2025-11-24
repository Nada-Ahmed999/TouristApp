import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from '@/app/Home.jsx'
import {Video} from 'expo-av'
import SignIn from '@/app/SignIn.jsx'
import Create from '@/app/Create.jsx'
import Place from './Place.jsx'
import Card from "./Card.jsx";

let stack=createNativeStackNavigator();


export default function App(){
 return <>
  <stack.Navigator initialRouteName="home">
    <stack.Screen  name="home" component={Home}/>
    <stack.Screen  name="SignIn" component={SignIn}/>
    <stack.Screen  name="Create" component={Create}/>
    <stack.Screen  name="Place" component={Place}/>
    <stack.Screen  name="Card" component={Card}/>

  </stack.Navigator>
 </>
}
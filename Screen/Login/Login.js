import { Text, View ,TextInput,Button} from 'react-native'
import React, { Component,useState } from 'react'

export default function Login({navigation}){
  const [email , setEmail]=useState('');
  const [password,setPassword] = useState('');

  const ChangeLogin =()=>{
    console.log("email" ,email)
    console.log("password",password)


  }
    return (
      <View style={{flex:1,marginTop:200}}>
        <Text style={{fontSize:40,fontWeight:'bold'}}>Login</Text>
        <Text/>
        <Text>Email</Text>
        <TextInput style={{borderWidth:1,borderColor:"black",}} value={email} onChangeText={(value)=>setEmail(value)}/>
        <Text/>
        <Text>PassWord</Text>
        <TextInput style={{borderWidth:1,borderColor:"black",}} value={password} onChangeText={(value)=>setPassword(value)}/>
        <Text/>
        <Button onPress={ChangeLogin} title='Login'/>
        <Text/>
        <Button onPress={() => navigation.navigate('Register')} title='Register'/>
      </View>
    )
  }

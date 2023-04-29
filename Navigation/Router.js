import { Text, View } from 'react-native'
import React, { Component ,useState} from 'react'
import AuthStackScreen from './Auth'
import HomeScreen from '../Screen/Home/HomeScreen'
export function Router () {
    const [user,setUser]=useState(false)
    return user ? <HomeScreen/> : <AuthStackScreen/>
    
  }

export default Router
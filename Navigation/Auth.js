import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login,Register } from '../Screen/index.js';
const Stack = createNativeStackNavigator();
function AuthStackScreen() {
    return (

      <Stack.Navigator
        screenOptions={{
          headerShown : false
        }}
      >
        <Stack.Screen name="Login" component={ Login } />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    );
  }
  
  export default AuthStackScreen;
import {Router} from "./Navigation/Router";
import { NavigationContainer } from '@react-navigation/native';
import { AppRegistry } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  return (
    <NavigationContainer>
        <Router/>
    </NavigationContainer>
  );
}
AppRegistry.registerComponent("App",()=>App)
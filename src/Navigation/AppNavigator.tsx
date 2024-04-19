import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Splash from '../screens/Splash';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../screens/Login';
import BottomTabNavigator from './BottomTabNavigator';
import Signup from '../screens/Signup';
import Home from '../screens/Home';
import Setting from '../screens/Setting';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
        
   <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
   <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} options={{ headerShown: false }} />
  
   <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
   <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
   <Stack.Screen name="Setting" component={Setting} options={{ headerShown: false }} />
   <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
   


  
  </Stack.Navigator>
  </NavigationContainer>
  )
}

export default AppNavigator

const styles = StyleSheet.create({})
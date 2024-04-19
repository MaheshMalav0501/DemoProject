import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'


const Signup = ({navigation}:any) => {
  return (
    <View style={{marginTop:100}}>
      <Text>Signup</Text>

      <TouchableOpacity 
      onPress={()=>{
        navigation.navigate('BottomTabNavigator')
      
      }}
      style={{height:30,width:100,backgroundColor:'red',marginTop:50}}>

      </TouchableOpacity>
    </View>
  )
}

export default Signup

const styles = StyleSheet.create({})
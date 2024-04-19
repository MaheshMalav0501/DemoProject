import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Splash = ({navigation}:any) => {
  return (
    <View style={{marginTop:100}}>
      <Text>Splash</Text>

      <TouchableOpacity 
      onPress={()=>{
        navigation.navigate('Signup')
      }}
      style={{height:30,width:100,backgroundColor:'red',marginTop:50}}>

      </TouchableOpacity>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({})
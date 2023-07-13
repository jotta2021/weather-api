import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import Location from 'react-native-vector-icons/Entypo'
import Setting  from 'react-native-vector-icons/Ionicons'

import {} from 'expo-location'



export default function Header(props) {






  return (
    
      <View style={styles.header}>
        <Text style={styles.city}>{props.location}</Text>
      <Location name='location-pin' size={28} color='white'/> 

      <TouchableOpacity>
        <View style={styles.setting}>
              <Setting name='settings-sharp' size={30} color='white'/> 
      </View>
      </TouchableOpacity>
      
      

     </View>
   

     ) 

    }



const styles = StyleSheet.create({
 
  city:{
    fontSize: 30,
  color:'white',

  alignItems:'center'

  },
  header:{
    margin:2,
    flexDirection:'row',
    marginTop:50,
    marginLeft: 25,
    alignItems:'center',
 
  },
  setting:{
    marginLeft: 120

  }
})

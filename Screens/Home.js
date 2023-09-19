import { View, Text, Button,StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'



export default function Home() {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
<TouchableOpacity onPress={()=>navigation.navigate('Scanner')} style={styles.btn}>
  <Text style={styles.txt} >Click to Scan</Text>
</TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
     alignItems:'center',
     justifyContent: 'center',
    },
    btn:{
    
      backgroundColor:'#3085C3',
      padding:25,
      width:110,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius:10,
    },
    txt:{
      color:'#FFFFFF',
    }
  });
  

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { IcMinus, IcPlus } from '../../../foto'
import { useFonts } from 'expo-font';

const Counter = () => {   

  const [loaded] = useFonts({
    'Poppins-Regular': require('../../../../assets/fonts/Poppins-Regular.ttf'),
  });
  
  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
        <TouchableOpacity>
        <IcMinus />
        </TouchableOpacity>
      <Text style={styles.value}>50</Text>
      <TouchableOpacity>
      <IcPlus />
      </TouchableOpacity>
    </View>
  )
}

export default Counter

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', 
        alignItems: 'center',
    },
    value: {
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
        color: '#FFFFFF',
        marginHorizontal: 10
    }
})
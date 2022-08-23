import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { IcMinusBlue, IcTambahBlue } from '../../../foto'
import { useFonts } from 'expo-font';

const CounterKeranjang = () => {

    const [loaded] = useFonts({
        'Poppins-Regular': require('../../../../assets/fonts/Poppins-Regular.ttf'),
      });
      
      if (!loaded) {
        return null;
      }

  return (
    <View style={styles.container}>
        <TouchableOpacity>
        <IcMinusBlue />
        </TouchableOpacity>
      <Text style={styles.value}>50</Text>
      <TouchableOpacity>
      <IcTambahBlue />
      </TouchableOpacity>
    </View>
  )
}

export default CounterKeranjang

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', 
        alignItems: 'center',
    },
    value: {
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
        color: '#27C6E9',
        marginHorizontal: 10
    }
})
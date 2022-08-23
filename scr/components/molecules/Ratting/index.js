import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { IcStarOff, IcStarOn, } from '../../../foto'
import { useFonts } from 'expo-font';

const Ratting = () => {

    const [loaded] = useFonts({
        'Poppins-Regular': require('../../../../assets/fonts/Poppins-Regular.ttf'),
      });
      
      if (!loaded) {
        return null;
      }
    
  return (
    <View style={styles.rattingContainer}>
    <View style={styles.starContainer}>
        <IcStarOn />
        <IcStarOn />
        <IcStarOn />
        <IcStarOn />
        <IcStarOff />
    </View>
    <Text style={styles.text}>4.5</Text>
</View>
  )
}

export default Ratting

const styles = StyleSheet.create({
    rattingContainer: {
        flexDirection: 'row'
    },
    starContainer: {
        flexDirection: 'row'
    },
    text: {
        color: '#FFFFFF',
        fontFamily: 'Poppins-Regular',
        fontSize: 12,
    }
})
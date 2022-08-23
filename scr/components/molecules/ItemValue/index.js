import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font';

const ItemValue = ({label, value, valueColor = '#2196F3'}) => {

  const [loaded] = useFonts({
    'Poppins-Regular': require('../../../../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Light': require('../../../../assets/fonts/Poppins-Light.ttf'),
  });
  
  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value (valueColor)}>{value}</Text>
    </View>
  )
}

export default ItemValue

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent:'space-between'
    },
    label: {
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
        color: '#2196F3'
    },
    value: (color) => ({
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
        color: color
    })
})
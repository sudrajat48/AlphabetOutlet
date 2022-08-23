import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font';

const Button = ({ text, color = '#FFFFFF', textColor = '#2196F3', onPress }) => {
  
  const [loaded] = useFonts({
    'Poppins-Medium': require('../../../../assets/fonts/Poppins-Medium.ttf'),
  });
  
  if (!loaded) {
    return null;
  }

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.container(color)}>
        <Text style={styles.text(textColor)}>{text}</Text>
      </View>
    </TouchableOpacity>

  )
}

export default Button

const styles = StyleSheet.create({
  container: (color) => ({
    backgroundColor: color,
    padding: 12,
    borderRadius: 8
  }),
  text: (color) => ({
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: color,
    textAlign: 'center'
  })
})
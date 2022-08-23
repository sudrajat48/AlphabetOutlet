import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Gap } from '../../components'
import { IlChat } from '../../foto';
import { useFonts } from 'expo-font';

const ChatAddress = ({navigation}) => {

  const [loaded] = useFonts({
    'Poppins-Medium': require('../../../assets/fonts/Poppins-Medium.ttf'),
    'Poppins-Light': require('../../../assets/fonts/Poppins-Light.ttf'),
  });
  
  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.page}>
    <IlChat />
    <Gap height={30} />
    <Text style={styles.title}>Do Deal Time Messaging</Text>
    <Gap height={6} />
    <Text style={styles.subtitle}>Just Stay At Home While We Are</Text>
    <Gap height={20} />
    <Text style={styles.subtitle}>Preparing Your Best Product</Text>
    <Gap height={30} />
    <View style={styles.buttonContainer}>
        <Button text={'Start Messeging'} onPress={() => navigation.replace('Chat')} />
    </View>
</View>
  )
}

export default ChatAddress

const styles = StyleSheet.create({
        page: {
          backgroundColor: '#2196F3',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
      },
      title: {
          fontSize: 20,
          fontFamily: 'Poppins-Regular',
          color: '#FFFFFF'
      },
      subtitle: {
          fontSize: 14,
          fontFamily: 'Poppins-Light',
          color: '#FFFFFF'
      },
      buttonContainer: {
          width: '100%',
          paddingHorizontal: 80
      }
})
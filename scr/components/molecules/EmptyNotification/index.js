import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { IlSuccessOrder } from '../../../foto'
import { Button, Gap } from '../../atoms'
import { useNavigation } from '@react-navigation/native'
import { useFonts } from 'expo-font';

const EmptyNotification = () => {
const navigation = useNavigation ();

const [loaded] = useFonts({
    'Poppins-Regular': require('../../../../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Light': require('../../../../assets/fonts/Poppins-Light.ttf'),
  });
  
  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.page}>
    <IlSuccessOrder />
    <Gap height={30} />
    <Text style={styles.title}>You've Have Placed An Order</Text>
    <Gap height={6} />
    <Text style={styles.subtitle}>Just Stay At Home While We Are</Text>
    <Gap height={20} />
    <Text style={styles.subtitle}>Preparing Your Best Product</Text>
    <Gap height={30} />
    <View style={styles.buttonContainer}>
        <Button text={'Other Product'} onPress={() => navigation.replace('MainApp')} />
    </View>
</View>
  )
}

export default EmptyNotification

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
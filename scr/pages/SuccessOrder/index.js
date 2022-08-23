import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { IlSuccesSignUp, IlSuccessOrder } from '../../foto'
import { Button, Gap } from '../../components'

const SuccessOrder = ({navigation}) => {

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
    <Gap height={12} />
    <View style={styles.buttonContainer}>
        <Button text={'View My Order'} onPress={() => navigation.replace('MainApp', {screen: 'Notification'})} color="#8D92A3" textColor='#F0F0F0' />
    </View>
</View>
  )
}

export default SuccessOrder

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
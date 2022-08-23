import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Gap, Header, ItemKeranjang, ItemValue } from '../../components'
import { ProductDummy1 } from '../../foto'
import { useFonts } from 'expo-font';

const Keranjang = ({navigation}) => {

  const [loaded] = useFonts({
    'Poppins-Medium': require('../../../assets/fonts/Poppins-Medium.ttf'),
    'Poppins-Light': require('../../../assets/fonts/Poppins-Light.ttf'),
  });
  
  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Header title={'Keranjang'} subTitle={'buy this product immediately'} onBack={() => navigation.goBack()} />
      <Gap height={20} />
      <ItemKeranjang type={'product'} name={'Tinta Container'} image={ProductDummy1} price={'250.000'} counter={40} />
      <Gap height={20} />
      <ItemKeranjang type={'product'} name={'Tinta Container'} image={ProductDummy1} price={'250.000'} counter={40} />
      <Gap height={20} />
      <ItemKeranjang type={'product'} name={'Tinta Container'} image={ProductDummy1} price={'250.000'} counter={40} />
      <Gap height={20} />
      <ItemKeranjang type={'product'} name={'Tinta Container'} image={ProductDummy1} price={'250.000'} counter={40} />
      <Gap height={20} />
      <ItemKeranjang type={'product'} name={'Tinta Container'} image={ProductDummy1} price={'250.000'} counter={40} />

      <View style={styles.content}>
          <Text style={styles.text}>Total Price</Text>
          <Text style={styles.price}>Rp 1.500.000</Text>
          <View style={styles.buttom}>
            <Button text={'Order Now'} onPress={() => navigation.navigate('OrderSummary')} color='#2196F3' textColor='#FFFFFF' />
          </View>
        </View>
      </View>
  )
}

export default Keranjang

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2196F3'
  },
  content: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    marginTop: 24,
    flexDirection: 'row',
    paddingVertical: 8,
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
    color: '#2196F3'
  },
  buttom: {
    width: 163
  },
  price: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#2196F3',
    paddingHorizontal: 10
  },
})
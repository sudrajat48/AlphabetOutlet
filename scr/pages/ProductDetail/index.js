import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import { IcBackBlue, ProductDummy2 } from '../../foto'
import Ratting from '../../components/molecules/Ratting'
import { BottomDetail, Counter } from '../../components';
import { useFonts } from 'expo-font';

const ProductDetail = ({navigation}) => {
  
  const [loaded] = useFonts({
    'Poppins-Regular': require('../../../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Light': require('../../../assets/fonts/Poppins-Light.ttf'),
    'Poppins-Medium': require('../../../assets/fonts/Poppins-Medium.ttf'),
  });
  
  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.page}>
      <ImageBackground source={ProductDummy2} style={styles.cover}>
        <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
          <IcBackBlue />
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.content}>
        <View style={styles.mainContent}>
        <View style={styles.productContainer}>
          <View>
            <Text style={styles.title}>Tinta Toner Epson</Text>
            <Ratting />
            <Text style={styles.priceTotal}>Rp250.000</Text>
          </View>
          <Counter />
        </View>
        <Text style={styles.desc}>
          Tinta Toner Epson Adalah Tinta Untuk Printer Yang Biasa Di Gunakan Oleh Tukang
          Foto Copy Dan Tinta Ini sangat Bagus Dan Bermerek Di Jamin sangat Bagus Tidak Akan Mengecewakan
        </Text>
        <Text style={styles.label}>Ingredients :</Text>
        <Text style={styles.desc}>Barang Sangat Bagus Dan Tidak Akan Mengecewakan</Text>
        </View>
        
        <View style={styles.footer}>
          <View style={styles.buttom}>
            <BottomDetail text={'Order Now'} />
          </View>
        </View>
      </View>
    </View>

  )
}



export default ProductDetail

const styles = StyleSheet.create({
  page: {
    flex: 1
  },
  cover: {
    height: 330,
    paddingTop: 55,
    paddingLeft: 22
  },
  back: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  content: {
    backgroundColor: '#2196F3',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    marginTop: -40,
    paddingTop: 26,
    paddingHorizontal: 16,
    flex: 1
  },
  mainContent: {
    flex: 1
  },
  productContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14
  },
  title: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: '#FFFFFF'
  },
  desc: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#F0F0F0',
    marginBottom: 16
  },
  label: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#FFFFFF',
    margin: 4
  },
  footer: {
    flexDirection: 'row',
    paddingVertical: 16,
    alignItems: 'center'
  },
  priceContainer: {
    flex: 1
  },
  buttom: {
    width: 162
  },
  labelTotal: {
    fontSize: 13,
    fontFamily: 'Poppins-Regular',
    color: '#F0F0F0'
  },
  priceTotal: {
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
    color: '#FFFFFF'
  }
})
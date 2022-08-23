import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { Button, Gap, Header, ItemListProduct, ItemProduct, ItemValue } from '../../components'
import { ProductDummy1, ProductDummy2 } from '../../foto'

const OrderDetail = ({navigation}) => {

  return (
    <ScrollView style={styles.container}>
      <Header title={'Payment'} subTitle="You Deserve Better Product" onBack={() => navigation.goBack()} />

      <View style={styles.content}>
        <Text style={styles.lebel}>Item Ordered</Text>
        <ItemProduct type={'product'} name={'Tinta Toner'} price={'250.000'} image={ProductDummy1} items={15} />
        <Text style={styles.lebel}>Metode Pembayaran :</Text>
        <ItemValue label={'Kartu Kredit'} />
        <ItemValue label={'Transfer Bank'} />
        <ItemValue label={'Ovo'} />
      </View>

      <View style={styles.content}>
        <Text style={styles.lebel}>Detail Transaction</Text>
        <ItemValue label={'Subtotal'} value="Rp500.000" />
        <ItemValue label={'Sub Pengiriman'} value="Rp10.000" />
        <ItemValue label={'Diskon'} value="10%" valueColor='#27C6E9' />
        <ItemValue label={'Total Price'} value="Rp510.000" />
      </View>

      <View style={styles.content}>
        <Text style={styles.lebel}>Order Status: </Text>
        <ItemValue label={'#FM45902234J00L89'} value="Paid" valueColor='#1ABC9C' />
      </View>
      <View style={styles.buttom}>
        <Button text={'Cancel My Order'} onPress={() => navigation.navigate('SuccessOrder')} />
      </View>
      <Gap height={40} />
    </ScrollView>

  )
}

export default OrderDetail

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2196F3'
  },
  content: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    paddingVertical: 16,
    marginTop: 24
  },
  lebel: {
    fontSize: 19,
    fontFamily: 'Poppins-Regular',
    color: '#2196F3'
  },
  buttom: {
    paddingHorizontal: 24,
    marginTop: 24
  },
})
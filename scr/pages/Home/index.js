import { StyleSheet, View, ScrollView } from 'react-native'
import React from 'react'
import ProductCard from '../../components/molecules/ProductCard';
import Gap from '../../components/atoms/Gap';
import { ProductDummy1, ProductDummy2, ProductDummy3, ProductDummy4 } from '../../foto';
import { HomeProfile, HomeTabSection } from '../../components/molecules';

const Home = () => {

  return (
    <View style={styles.tampilan}>
      <HomeProfile />
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.productCardContainer}>
            <Gap width={24} />
            <ProductCard image={ProductDummy1} />
            <ProductCard image={ProductDummy2} />
            <ProductCard image={ProductDummy3} />
            <ProductCard image={ProductDummy4} />
          </View>
        </ScrollView>
      </View>

      <View style={styles.tabContainer}>
        <HomeTabSection />
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  tampilan: {
    flex: 1,
    backgroundColor: '#2196F3'
  },
  productCardContainer: {
    flexDirection: 'row',
    marginVertical: 24,
  },
  tabContainer: {
    flex: 1,
  }
})
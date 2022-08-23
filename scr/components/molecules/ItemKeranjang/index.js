import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Counter from '../Counter'
import { useFonts } from 'expo-font';
import CounterKeranjang from '../CounterKeranjang';

const ItemKeranjang = ({name, price, counter, type, image}) => {
    const renderContent = () => {
        switch (type) {
            case 'product':
                // item list product seperti di home page
                return (
                    <>
                        <View style={styles.content}>
                            <Text style={styles.title}>{name}</Text>
                            <Text style={styles.price}>Rp{price}</Text>
                            <CounterKeranjang counter={counter} />
                        </View>
                    </>
                )

            default:
        }
    }

    const [loaded] = useFonts({
        'Poppins-Regular': require('../../../../assets/fonts/Poppins-Regular.ttf'),
        'Poppins-Light': require('../../../../assets/fonts/Poppins-Light.ttf'),
      });
      
      if (!loaded) {
        return null;
      }

  return (
    <View style={styles.container}>
        <Image source={image} style={styles.image} />
        {renderContent()}
    </View>
  )
}

export default ItemKeranjang

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        paddingVertical: 8,
        alignItems: 'center',
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 8,
        overflow: 'hidden',
        marginRight: 12,
    },
    title: {
        fontFamily: 'Poppins-Medium',
        fontSize: 16,
        color: '#2196F3'
    },
    price: {
        fontFamily: 'Poppins-Regular',
        fontSize: 13,
        color: '#27C6E9'
    },
    content: {
        flex: 1,
    },
})
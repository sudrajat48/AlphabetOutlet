import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font';

const ItemProduct = ({name, price, items, image, type}) => {
    const renderContent = () => {
        switch (type) {
            case 'product':
                // item list product seperti di home page
                return (
                    <>
                        <View style={styles.content}>
                            <Text style={styles.title}>{name}</Text>
                            <Text style={styles.price}>Rp{price}</Text>
                        </View>
                        <Text style={styles.items}>{items} items</Text>
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

export default ItemProduct

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        paddingVertical: 8,
        alignItems: 'center',
    },
    title: {
        fontFamily: 'Poppins-Regular',
        fontSize: 16,
        color: '#2196F3'
    },
    price: {
        fontFamily: 'Poppins-Light',
        fontSize: 13,
        color: '#27C6E9'
    },
    items: {
        fontSize: 13,
        fontFamily: 'Poppins-Light',
        color: '#8D92A3'
    },
    content: {
        flex: 1
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 8,
        overflow: 'hidden',
        marginRight: 12,
    },
})
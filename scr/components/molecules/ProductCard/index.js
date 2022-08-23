import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Ratting from '../Ratting';

const ProductCard = ({ image }) => {

    return (
        <View style={styles.container}>
            <Image source={image} style={styles.image} />
            <View style={styles.content}>
                <Text style={styles.text}>Tinta Toner Cannon</Text>
                <Ratting />
            </View>
        </View >
    )
}

export default ProductCard

const styles = StyleSheet.create({
    container: {
        width: 200,
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        shadowColor: '#27C6E9',
        shadowOffset: { width: 0, height: 7 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 14,
        borderRadius: 8,
        overflow: 'hidden',
        marginRight: 24
    },
    image: {
        width: 200,
        height: 140,
        resizeMode: 'cover'
    },
    content: {
        padding: 12
    },
    text: {
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
        color: '#2196F3'
    },

})
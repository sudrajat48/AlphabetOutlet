import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { IcTambah, IcTombol } from '../../../foto';
import { useNavigation } from '@react-navigation/native';

const BottomDetail = ({ text, color = '#FFFFFF', textColor = '#2196F3' }) => {
    const navigation = useNavigation();

    return (
        <View style={styles.footer}>
            <View style={styles.buttom}>
                <TouchableOpacity activeOpacity={0.7} style={styles.icon} onPress={() => navigation.navigate('Keranjang')} >
                    <IcTambah />
                </TouchableOpacity>
            </View>
            <View style={styles.buttom}>
                <TouchableOpacity activeOpacity={0.7} style={styles.icon} onPress={() => navigation.navigate('Chatting')} >
                    <IcTombol />
                </TouchableOpacity>
            </View>

            <View>
                <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('OrderSummary')}>
                    <View style={styles.container(color)}>
                        <Text style={styles.text(textColor)}>{text}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default BottomDetail

const styles = StyleSheet.create({
    container: (color) => ({
        backgroundColor: color,
        padding: 12,
        width: 250,
        height: 44,
        borderRadius: 8
    }),
    text: (color) => ({
        fontSize: 14,
        fontFamily: 'Poppins-Medium',
        color: color,
        textAlign: 'center'
    }),
    footer: {
        flexDirection: 'row',
        paddingVertical: 16,
        alignItems: 'center'
    },
    buttom: {
        width: 65
    },
    icon: {
        borderRadius: 10,
        width: 50,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16,
        backgroundColor: '#FFFFFF'
    },
})
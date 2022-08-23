import { StyleSheet, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { IcSendOff, IcSendOn } from '../../../foto';
import { useNavigation } from '@react-navigation/native';

const SendBottom = ({disable}) => {
    const navigation = useNavigation();
  return (
    <View style={styles.footer}>
    <View style={styles.buttom}>
        <TouchableOpacity activeOpacity={0.7} style={styles.icon} onPress={() => navigation.navigate('Keranjang')} >
            {disable && <IcSendOn />}
            {!disable && <IcSendOff />}
        </TouchableOpacity>
    </View>
</View>
  )
}

export default SendBottom

const styles = StyleSheet.create({
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
import React, { useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Logo } from "../../foto";
import { useFonts } from 'expo-font';
  
const Splash = ({navigation}) => {

    useEffect (() => {
        setTimeout( () => {
            navigation.replace('SignIn');
        }, 2000);
    }, []);

    const [loaded] = useFonts({
        'Poppins-Medium': require('../../../assets/fonts/Poppins-Medium.ttf'),
      });
      if (!loaded) {
        return null;
      }

    return (
        <View style={Styles.Tampilan}>
            <Logo />
            <View style={{ height: 38 }} />
            <Text style={Styles.cardText}>Thazeen Tech</Text>
        </View>
    )
}

export default Splash;
const Styles = StyleSheet.create({
    Tampilan: {
        backgroundColor: '#2196F3',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardText: {
        fontSize: 32,
        color: '#FFFFFF',
        fontFamily: 'Poppins-Medium'
    }
})
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { IlSuccesSignUp } from '../../foto'
import { Button, Gap } from '../../components'
import { useFonts } from 'expo-font';

const SuccessSignUp = ({navigation}) => {

    const [loaded] = useFonts({
        'Poppins-Regular': require('../../../assets/fonts/Poppins-Regular.ttf'),
        'Poppins-Light': require('../../../assets/fonts/Poppins-Light.ttf'),
      });
      
      if (!loaded) {
        return null;
      }

    return (
        <View style={styles.page}>
            <IlSuccesSignUp />
            <Gap height={30} />
            <Text style={styles.title}>Yeay Completed</Text>
            <Gap height={6} />
            <Text style={styles.subtitle}>Now you are able to order</Text>
            <Gap height={20} />
            <Text style={styles.subtitle}>some product as a self-reward</Text>
            <Gap height={30} />
            <View style={styles.buttonContainer}>
                <Button text={'Find Product'} onPress={() => navigation.replace('MainApp')} />
            </View>
        </View>
    )
}

export default SuccessSignUp

const styles = StyleSheet.create({
    page: {
        backgroundColor: '#2196F3',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        fontFamily: 'Poppins-Regular',
        color: '#FFFFFF'
    },
    subtitle: {
        fontSize: 14,
        fontFamily: 'Poppins-Light',
        color: '#FFFFFF'
    },
    buttonContainer: {
        width: '100%',
        paddingHorizontal: 80
    }
})
import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Button, Gap, Header, TextInput } from '../../components';


const SignIn = ({navigation}) => {
  return (
    <View style={styles.pege}>
      <Header title="Sign In" subTitle="Find your best ever product" />
      <View style={styles.container}>
        <TextInput label="Email Address" placeholder="Type your email address" />
        <Gap height={16} />
        <TextInput label="Password" placeholder="Type your password" />
        <Gap height={24} />
        <Button text="Sign In" />
        <Gap height={12} />
        <Button text="Creat New Account" color='#8D92A3' textColor='#FFFFFF' onPress={() => navigation.navigate('SignUp')} />
      </View>
    </View>
  )
}

export default SignIn

const styles = StyleSheet.create({
  pege: {flex: 1},
  container: {
    backgroundColor: '#2196F3',
    paddingHorizontal: 24,
    paddingVertical: 26,
    marginTop: 24,
    flex: 1
  }
})